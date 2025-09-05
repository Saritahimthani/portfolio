import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Sarita Himthani',
  tagline: 'Applied Data Scientist',
  favicon: 'img/favico.ico',
  
  // Set the production URL of your site here
  url: 'https://saritahimthani.github.io',
  baseUrl: '/portfolio/',
  trailingSlash: false,
  
  // GitHub pages deployment config
  organizationName: 'saritahimthani', // Your GitHub username
  projectName: 'portfolio', // Your repo name
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/saritahimthani/portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/saritahimthani/portfolio/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    image: 'img/favico.ico',
    navbar: {
      title: 'Sarita Himthani',
      logo: {
        alt: 'SH Logo',
        src: 'img/favico.ico', // You'll need to create this logo file
      },
      items: [
        {to: '/about', label: 'About', position: 'right'},
        {to: '/experience', label: 'Experience', position: 'right'},
        {to: '/projects', label: 'Projects', position: 'right'},
        {to: '/skills', label: 'Skills', position: 'right'},
        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/saritahimthani',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {label: 'About', to: '/about'},
            {label: 'Experience', to: '/experience'},
            {label: 'Projects', to: '/projects'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/saritah28/', // Update with your LinkedIn URL
            },
            {
              label: 'GitHub',
              href: 'https://github.com/saritahimthani',
            },
            {
              label: 'Kaggle',
              href: 'https://www.kaggle.com/saritahimthani',
            },
            {
              label: 'Leetcode',
              href: 'https://leetcode.com/u/sarita-himthani/'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'Skills', to: '/skills'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sarita Himthani. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;