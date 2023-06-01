import { DefaultTheme } from 'vitepress';


export const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/' // 表示docs/index.md
  },
  {
    text: '个人成长',
    items: [
      {
        text: '游记',
        link: '/column/Travel/'
      },
      {
        text: '所思·所想',
        link: '/column/Growing/'
      }
    ]
  },
  {
    text: '前端开发',
    items: [
      {
        text: '堆栈模型',
        link: '/column/Algorithm/' // 对应docs/column/Algorithm下的idnex.md文件
      }
    ]
  },
  {
    text: '关于我',
    items: [
      { text: 'Github', link: 'https://github.com/Jacqueline712' },
    ]
  }
];
