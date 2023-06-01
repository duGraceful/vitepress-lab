# 堆栈模型
- JS 代码执行时
- 值类型变量，存储在栈
- 引用类型变量，存储在堆

![image.png](https://cdn.nlark.com/yuque/0/2022/png/23015620/1650417593804-0a6c0f9c-9cf1-4ada-afd5-f792ef0e9bab.png#clientId=ub39c462c-17f6-4&from=paste&height=486&id=u3fac42df&originHeight=972&originWidth=1636&originalType=binary&ratio=1&rotation=0&showTitle=false&size=316877&status=done&style=none&taskId=u038f566e-41c8-4a54-a379-2f598053e77&title=&width=818)
## 堆

- 完全二叉树（左侧先填满）
- 最大堆：父节点 >= 子节点
- 最小堆：父节点 <= 子节点

![image.png](https://cdn.nlark.com/yuque/0/2022/png/23015620/1650417922007-2d2550c2-1202-4b49-baa0-7fb2e4e41c47.png#clientId=ub39c462c-17f6-4&from=paste&height=394&id=uad430426&originHeight=788&originWidth=1722&originalType=binary&ratio=1&rotation=0&showTitle=false&size=373823&status=done&style=none&taskId=ua90eddbf-b24d-46a8-9689-c520ba3740c&title=&width=861)
## 逻辑结构 VS 物理结构

- 堆，逻辑结构是一颗二叉树
- 但它物理结构是一个数组
- 数组：适合连续存储 + 节省空间

![image.png](https://cdn.nlark.com/yuque/0/2022/png/23015620/1650418114381-e3ac513b-7592-4ccf-b179-c87e52212fa2.png#clientId=ub39c462c-17f6-4&from=paste&height=463&id=u958947a9&originHeight=926&originWidth=1620&originalType=binary&ratio=1&rotation=0&showTitle=false&size=392004&status=done&style=none&taskId=ud99fd69b-567a-4188-a42e-ae6af9b4558&title=&width=810)
## 堆 VS BST

- 查询比 BST 慢
- 删除比 BST 快，维持平衡更快
- 但整体的时间复杂度都在 O(logn) 级别，即树的高度
## 堆的使用场景

- 特别适合“堆栈模型”
- 堆的数据，都是在栈中引用的，不需要从 root 遍历
- 堆恰巧是数组的形式，根据栈的地址，可用 O(1) 找到目标

lastUpdated: true

