const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Minha Matrícula",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    nav: [ 
      {
        text: "Visão Geral",
        link: "/overview/about",
      },
      {
        text: "Produto",
        link: "/product/tap",
      },
      {
        text: "Metodologia e Processos",
        link: "/methodology/agile",
      },
      {
        text: "Scrum",
        link: "/scrum/",
      },
      {
        text: "GitHub",
        link: "https://github.com/mds-trindadev/minha-matricula",
      },
    ],
    sidebar: [
      {
        title: "Visão Geral",
        collapsable: false,
        children: ["/overview/about", "/overview/repo", "/overview/team"],
      },

      {
        title: "Visão de Produto",
        collapsable: false,
        children: ["/product/tap", "/product/eap", "/product/vision", "/product/architecture", "/product/identity", "/product/prototype"],
      },
      {
        title: "Metodologia e Processos",
        collapsable: false,
        children: ["/methodology/agile"],
      },
      // "/scrum/": [
      //   {
      //     title: "Scrum",
      //     collapsable: false,
      //     children: [""],
      //   },
      // ],
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
