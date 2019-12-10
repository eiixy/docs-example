module.exports = {
    title: 'Headless Cms',
    description: '',
    docsDir: 'docs',
    themeConfig: {
        logo: 'https://avatars1.githubusercontent.com/u/22978107?s=40&v=4',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Group 1', // 必要的
                    collapsable: true,
                    path: '/guide/',
                    children: [
                        '/guide/a.md',
                        '/guide/b.md',
                        '/guide/c.md',
                        '/guide/d.md'
                    ]
                }
            ]
        }
    }
}