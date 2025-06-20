import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'html',
      value: `<span class='.sidebar-title'>Main<hr class='sidebar-div'></hr></span>`,
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'doc',
          id: 'getting-started/get-lovepotion',
          label: 'Get LÖVE Potion',
        },
        {
          type: 'doc',
          id: 'getting-started/simulation-testing',
          label: 'Simulation Testing',
        },
        'getting-started/debugging',
      ],
    },
    {
      type: 'category',
      label: 'Compatibility',
      items: [
        'compatibility/general',
        'compatibility/filesystem',
        'compatibility/rendering',
        'compatibility/system-fonts',
        'compatibility/touch-input',
        'compatibility/software-keyboard',
        'compatibility/network',
        'compatibility/gamepad',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items: [
        'development/environment',
        'development/debugging',
        'development/gnu-debugger',
        'development/addr2line',
      ],
    },
    {
      type: 'html',
      value: `<span class='.sidebar-title'>Resources<hr class='sidebar-div'></hr></span>`,
      defaultStyle: true,
    },
    {
      type: 'link',
      href: 'https://sheepolution.com/learn/book/contents',
      label: 'How to LÖVE',
    },
    {
      type: 'link',
      href: 'https://love2d.org/wiki',
      label: 'LÖVE Wiki',
    },
    {
      type: 'html',
      value: `<span class='.sidebar-title'>Links<hr class='sidebar-div'></hr></span>`,
      defaultStyle: true,
    },
    {
      type: 'link',
      href: 'https://paypal.me/TurtleP',
      label: 'Donate',
    },
    {
      type: 'link',
      href: 'https://www.patreon.com/devkitPro',
      label: 'Support devkitPro',
    },
  ],
  bundlerSidebar: [
    {
      type: 'html',
      value: `<span class='.sidebar-title'>Main<hr class='sidebar-div'></hr></span>`,
      defaultStyle: true,
    },
    {
      type: 'doc',
      id: 'bundler-app/overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'bundler-app/getting-started/uploading',
        'bundler-app/getting-started/configuration',
        'bundler-app/getting-started/structure',
      ],
    },
    {
      type: 'html',
      value: `<span class='.sidebar-title'>Links<hr class='sidebar-div'></hr></span>`,
      defaultStyle: true,
    },
    {
      type: 'link',
      href: 'https://bundle.lovebrew.org',
      label: 'Bundler Site',
    },
    {
      type: 'link',
      href: 'https://toml.io/en',
      label: 'TOML Spec',
    },
    {
      type: 'link',
      href: 'https://semver.org/',
      label: 'Semantic Versioning',
    },
  ],
};

export default sidebars;
