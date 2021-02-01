const secondarySidebar = [
  { text: 'Our Story', link: '/about/index' }
]

function getMainSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Style Guide', link: '/' }  
      ]
    },
    {
      text: 'Components',
      children: [
        { text: 'Buttons', link: '/buttons/index' },
        { text: 'Dropdowns', link: '/dropdowns/index' },
      ]
    }
  ]
}

module.exports = {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  themeConfig: {
    docsDir: 'docs',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: {
      '/about/': secondarySidebar,
      '/': getMainSidebar(),
    }
  }
}