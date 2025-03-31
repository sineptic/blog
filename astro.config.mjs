import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { rehypePrettyCode } from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: false,
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
