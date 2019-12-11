module.exports = {
    title: 'Headless Cms',
    description: '',
    docsDir: 'docs',
    base: '/docs-example/',
    themeConfig: {
        logo: 'https://avatars1.githubusercontent.com/u/22978107?s=40&v=4',
        nav: [
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'Config',
                link: '/config/'
            },
            {
                text: 'Api',
                link: 'http://yapi.51zts.com/'
            },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Group 1',
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
