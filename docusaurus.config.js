module.exports = {
  title: 'Meta-Meta-Resources',
  tagline: 'The tagline of my site',
  url: 'https://meta-meta-resources.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Meta-Meta-Resources', // Usually your GitHub org/user name.
  projectName: 'Meta-Meta-Resources', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'A Meta-Resource of Meta-Resources for Cognitive Neuroscience',
      logo: {
        alt: 'Meta-Meta-Resources Logo',
        src: 'img/logo.svg',
      },
      items: [
          {
            label: "GitHub",
            className: "navbar__item--github",
            href: "https://github.com/meta-meta-resources/meta-meta-resources",
            position: "right",
          },
          {
            label: "Join Slack",
            className: "navbar__item--slack",
            href: "https://join.slack.com/t/meta-meta-resources/shared_invite/zt-gr6x1i0k-~VmpJAZPfXKugXEHhajX2g",
            position: "right",
          },
      ],
    },
    algolia: {
      apiKey: 'f32e7516dde90925c48cd6595498d01e',
      indexName: 'meta-meta-resources',
      placeholder: 'Search Meta Meta Resources',
    },
    image: 'img/social-media-card-blue.png',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // Set this value to '/'.
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'intro',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/meta-meta-resources/meta-meta-resources/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
