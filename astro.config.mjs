import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
// import preact from "@astrojs/preact";
import rehypePrettyCode from "rehype-pretty-code";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import vercel from "@astrojs/vercel/static";

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
    // Add deleted/inserted line background coloring
    else if (node.children[0].children.length > 0) {
      if (node.children[0].children[0].value.startsWith("-")) {
        node.properties.className.push("deleted");
        node.children[0].children[0].value =
          node.children[0].children[0].value.substr(1);
      } else if (node.children[0].children[0].value.startsWith("+")) {
        node.properties.className.push("inserted");
        node.children[0].children[0].value =
          node.children[0].children[0].value.substr(1);
      }
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
  output: "static",
  adapter: vercel({ analytics: true }),
});
