module.exports = {
  title: 'Meta Meta Resources',
  tagline: 'The tagline of my site',
  url: 'https://meta-meta-resources.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'A Meta Resource of Meta Resources for Cognitive Neuroscience',
      logo: {
        alt: 'Meta Meta Resources Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/meta-meta-resources/meta-meta-resources',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    //   // Options...
    // },

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
