'use strict';

export default [
  {
    name: 'Getting Started',
    url: '/getting-started',
    type: 'link'
  },
  {
    name: 'Customization',
    type: 'heading',
    children: [{
      name: 'CSS',
      type: 'toggle',
      pages: [{
        name: 'Typography',
        url: '/CSS/typography',
        type: 'link'
      }]
    }, {
      name: 'Theming',
      type: 'toggle',
      pages: [{
        name: 'Introduction and Terms',
        url: '/Theming/01_introduction',
        type: 'link'
      },
        {
          name: 'Declarative Syntax',
          url: '/Theming/02_declarative_syntax',
          type: 'link'
        },
        {
          name: 'Configuring a Theme',
          url: '/Theming/03_configuring_a_theme',
          type: 'link'
        },
        {
          name: 'Multiple Themes',
          url: '/Theming/04_multiple_themes',
          type: 'link'
        }]
    }]
  }
];
