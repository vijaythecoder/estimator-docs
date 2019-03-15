module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/estimator-docs/',
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
            '/'
          ]
        },
        {
          title: 'Group 2',
          children: [ /* ... */ ]
        }
      ]
    }
  }