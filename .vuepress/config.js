module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      markdown: {
        lineNumbers: true
      },
      sidebar: [
        {
          title: 'Group 1',
          children: [
            '/',
            'installation'
          ]
        },
        {
          title: 'Group 2',
          children: [ /* ... */ ]
        }
      ]
    }
  }