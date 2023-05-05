import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
// import preact from "@astrojs/preact";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";

const prettyCodeOptions = {
  theme: "dark-plus",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [
        {
          type: "text",
          value: " ",
        },
      ];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["word"];
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    // preact(),
    mdx({
      rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
    }),
    astroImageTools,
    compress({
      img: false,
    }),
  ],
  markdown: {
    syntaxHighlight: false,
  },
  site: "https://davidward.dev/",
});
