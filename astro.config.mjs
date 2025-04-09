import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { rehypePrettyCode } from "rehype-pretty-code";
import { remarkCallout } from "@r4ai/remark-callout";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkCallout],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-mocha",
        },
      ],
    ],
  },
});
