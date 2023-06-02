---
# 提供三种布局，doc、page 和 home
# 官方文档相关配置：https://vitepress.dev/reference/default-theme-layout
layout: home
home: true

# https://vitepress.dev/reference/default-theme-home-page
title: dudu 的博客
titleTemplate: Hi，终于等到你
editLink: true
lastUpdated: true

hero:
  name: "dudu"
  text: "吃饱饱, 长高高"
  tagline: /茁壮成长/
  image:
      # 首页右边的图片
      src: /avatar.png
      # 图片的描述
      alt: avatar
  actions:
    - theme: brand
      text: 进入主页
      link: /column/views/guide
    - theme: alt
      text: 个人成长
      link: /column/Growing/
  
features:
  - icon: 🤹♀️
    title: Web前端
    details: Web前端。
    link: /column/views/guide
  - icon: 🌟
    title: 你猜猜呀
    details: 你猜猜呀.
  - icon: 🧩
    title: 斜杆青年
    details: 斜杆青年。

