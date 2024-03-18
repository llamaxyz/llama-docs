import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/Logo";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="title" content="Llama Documentation" />
      <meta property="og:title" content="Llama Documentation" />
      <meta
        property="description"
        content="Learn how Llama powers onchain governance"
      />
      <meta
        property="og:description"
        content="Learn how Llama powers onchain governance"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
    </>
  ),

  logo: <Logo />,
  project: {
    link: "https://github.com/llamaxyz/llama",
  },

  docsRepositoryBase: "https://github.com/llamaxyz/llama-docs/tree/main",
  footer: {
    text: `© ${new Date().getFullYear()} Llama Ranch, Inc.`,
  },

  primaryHue: { light: 268, dark: 272 },

  useNextSeoProps() {
    return {
      titleTemplate: "%s | Llama",
    };
  },
};

export default config;
