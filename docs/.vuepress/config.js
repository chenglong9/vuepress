module.exports = {
    title: 'TypeScript4 文档',
    description: 'TypeScript4 最新官方文档翻译',
    base: '/',
    theme: 'reco',
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false,
                children: [
                    { title: "学前必读", path: "/" }
                ]
            }
          ]
    }
}
