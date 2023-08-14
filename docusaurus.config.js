// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GPT AI Flow',
  tagline: '自媒体运营神器，你的 AI 助手！',
  favicon: 'img/favicon.ico',

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'baidu-site-verification',
        content: 'codeva-mWy3GV6uPO',
      },
    },
  ],
  ssrTemplate: `<!DOCTYPE html>
  <html <%~ it.htmlAttributes %>>
    <head>
      <meta charset="UTF-8">
      <meta name="generator" content="Docusaurus v<%= it.version %>">
      <% it.metaAttributes.forEach((metaAttribute) => { %>
        <%~ metaAttribute %>
      <% }); %>
      <%~ it.headTags %>
      <% it.stylesheets.forEach((stylesheet) => { %>
        <link rel="stylesheet" href="<%= it.baseUrl %><%= stylesheet %>" />
      <% }); %>
      <% it.scripts.forEach((script) => { %>
        <link rel="preload" href="<%= it.baseUrl %><%= script %>" as="script">
      <% }); %>
      
      <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KLRK3CV');</script>
      <!-- End Google Tag Manager -->

    </head>
    <body <%~ it.bodyAttributes %>>
      
      <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KLRK3CV"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->

      <%~ it.preBodyTags %>
      <div id="__docusaurus">
        <%~ it.appHtml %>
      </div>
      <% it.scripts.forEach((script) => { %>
        <script src="<%= it.baseUrl %><%= script %>"></script>
      <% }); %>
      <%~ it.postBodyTags %>
    </body>
  </html>`,

  // Set the production url of your site here
  url: 'https://gptaiflow.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GPT-AI-Flow', // Usually your GitHub org/user name.
  projectName: 'gpt-ai-flow-doc-docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    localeConfigs: {
      zh: {
        label: '简体中文',
        htmlLang: 'zh-Hans',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      announcementBar: {
        id: 'alert',
        content: '为了能够拥有最好的应用体验和更强大的功能支持, 请先导出所有指令数据，并将版本升级至最新版 v0.1.18',
        backgroundColor: '#38A3A5',
        textColor: 'white',
        isCloseable: false,
      },
      image: 'img/gpt-ai-flow-social-card.png',
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        // title: 'GPT AI Flow',
        logo: {
          alt: 'GPT AI Flow Logo',
          src: '/img/logo/2023-08-14-logo-for-gptaiflow-img-1.png',
        },
        items: [
          {
            to: '/docs/intro/',
            label: 'AI 助手',
            position: 'left',
          },
          {
            to: '/docs/proudct/presentation',
            label: '产品说明',
            position: 'left',
          },
          {
            to: '/docs/application-scenarios/creative-writing-and-ai',
            label: '应用场景',
            position: 'left',
          },
          {
            to: '/docs/prompt-engineering/How-to-ask-the-gpt',
            label: '提示课程',
            position: 'left',
          },
          {
            to: 'https://github.com/GPT-AI-Flow/gpt-ai-flow-doc-docusaurus/releases',
            label: '下载',
            position: 'left',
          },
          // {
          //   href: 'https://github.com/GPT-AI-Flow/gpt-ai-flow-doc-docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'AI 助手',
                to: '/docs/intro',
              },
              {
                label: '产品反馈',
                href: 'https://wj.qq.com/s2/12214642/c9c6',
              },
            ],
          },

          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: '更多',
            items: [
              {
                label: '小卡养成记: 学习成长频道',
                href: 'https://space.bilibili.com/137975681',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GPT AI Flow`,
      },
      prism: {
        // theme: lightCodeTheme,
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      clarity: {
        ID: 'h9kqzldifi',
      },
    }),

  themes: [
    [
      // @ts-ignore
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        language: ['zh'],
      }),
    ],
    // ... Your other themes.
  ],

  plugins: [
    // [
    //   'docusaurus2-dotenv',
    //   {
    //     systemvars: true, // Set to true if you would rather load all system variables as well (useful for CI purposes)
    //   },
    // ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
    'docusaurus-plugin-clarity',
    'docusaurus-plugin-sass',
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],
};

module.exports = config;
