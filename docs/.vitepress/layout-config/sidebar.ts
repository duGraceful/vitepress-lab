import { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.Sidebar = {
  // /column/Algothm/表示对这个文件夹下的所有md文件做侧边栏配置
  '/column/Algorithm/': [
     // 第一部分
    {
      text: '堆栈模型',
      link: '/column/Algorithm/',
      items: [
        {
          text: '深拷贝和浅拷贝',
          link: '/column/Algorithm/stack'
        }
      ]
    },
    // 第二部分
    {
      text: '字典和树',
      items: [
        {
          text: '树-深/广度优先遍历',
          link: '/column/Algorithm/tree'
        }
      ]
    }
  ]
};