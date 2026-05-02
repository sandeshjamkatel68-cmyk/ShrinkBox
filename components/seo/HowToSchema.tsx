import React from "react";

interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration
}

/**
 * HowToSchema component for Rich Snippets on Tool pages.
 * This is a major traffic driver for utility sites.
 */
export function HowToSchema({ name, description, steps, totalTime = "PT1M" }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "url": `${typeof window !== "undefined" ? window.location.href : "" }#step${index + 1}`,
      "name": step.name,
      "itemListElement": [{
        "@type": "HowToDirection",
        "text": step.text
      }],
      ...(step.image && { "image": step.image })
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
