import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.join(__dirname, "..", "app");

// Categories mapping based on folder names
function determineTag(folderName) {
  if (folderName.includes("pdf")) return ["PDF", "Tools"];
  if (["convert", "webp", "jpg", "png", "grayscale"].some((v) => folderName.includes(v))) return ["Formats", "Images"];
  if (["compress", "resize", "crop", "bulk"].some((v) => folderName.includes(v))) return ["Images", "Tools"];
  return ["Tools"]; // fallback
}

const folders = fs.readdirSync(appDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let modifiedCount = 0;

for (const folder of folders) {
  // Skip non-tool directories
  if (["api", "blog", "components", "hooks", "lib", "public", "styles", "types", "contact", "privacy", "terms"].includes(folder)) continue;
  if (!folder.includes("-")) continue; // Simple heuristic for tool directories

  const pagePath = path.join(appDir, folder, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, "utf-8");

  // Skip if already injected
  if (content.includes("RelatedGuides")) continue;

  const tags = determineTag(folder);
  const tagsString = JSON.stringify(tags);

  // 1. Inject import after the last import statement or the metadata import
  const importRegex = /(import [^{]+ from "[^"]+";\r?\n|import \{[^}]+\} from "[^"]+";\r?\n)+/;
  const match = content.match(importRegex);
  
  if (match) {
    const importBlock = match[0];
    const newImportBlock = importBlock.trimEnd() + '\nimport RelatedGuides from "@/components/seo/RelatedGuides";\n';
    content = content.replace(importBlock, newImportBlock);
  } else {
    // If no match found (rare), just prepend it
    content = 'import RelatedGuides from "@/components/seo/RelatedGuides";\n' + content;
  }

  // 2. Inject component before the final </>
  // Most files end with:
  //      </section>
  //    </>
  //  );
  // }
  
  const injectTarget = '    </>\n  );\n}';
  const injectPayload = `      <RelatedGuides tags={${tagsString}} />\n    </>\n  );\n}`;
  
  // if exact match doesn't work try regex to find the closing piece
  if (content.includes(injectTarget)) {
    content = content.replace(injectTarget, injectPayload);
    fs.writeFileSync(pagePath, content);
    console.log(`Injected into ${folder} with tags ${tagsString}`);
    modifiedCount++;
  } else {
    // Try regex matching white spaces
    const regexInject = /(\s*<\/>\s*\);\s*\}\s*)$/;
    if (regexInject.test(content)) {
        content = content.replace(regexInject, `\n      <RelatedGuides tags={${tagsString}} />$1`);
        fs.writeFileSync(pagePath, content);
        console.log(`Injected into ${folder} with tags ${tagsString} (regex fallback)`);
        modifiedCount++;
    } else {
        console.log(`Skipped ${folder} - could not find injection point.`);
    }
  }
}

console.log(`\nSuccessfully injected RelatedGuides into ${modifiedCount} tool pages.`);
