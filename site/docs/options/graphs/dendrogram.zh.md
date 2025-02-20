---
category: Components
type: Graph
usage: relation
title: Dendrogram 生态树图
cover: https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mvnUTaA91H0AAAAAAAAAAAAADmJ7AQ/original
order: 3
---

将事物或现象分解成树枝状结构，来系统地展示其构成关系或内在逻辑关系。

```js
import { Dendrogram } from '@ant-design/graphs';
```

## 何时使用

适用于展示数据的层级关系、明确问题的重点、寻求达成目标的合理步骤。

## 代码演示

<!-- prettier-ignore -->
<code src="../graphs-demos/dendrogram/default.tsx">基本用法</code>
<code src="../graphs-demos/dendrogram/direction.tsx">排布方向</code>
<code src="../graphs-demos/dendrogram/compact.tsx">紧凑模式</code>
<code src="../graphs-demos/dendrogram/collapse-expand.tsx">展开/收起节点</code>

## API

通用配置参考：[图通用属性](./overview#图通用属性)

### Dendrogram

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据 | [Data](#data) | - |
| labelField | 指定节点标签内容 <br> - 从数据中选择一个字段，对应字段的值作为节点的标签 <br> - 动态生成，将以节点数据为参数调用该函数，并使用返回值作为节点的标签 | string \| ((node: NodeData) => string) | 节点 ID |
| direction | 语法糖，设置树图节点的排布方向。当设置 layout.direction 时会以后者为准 | `vertical` \| `horizontal` \| `radial` | `horizontal` |
| compact | 是否为紧凑模式 | boolean | false |
| defaultExpandLevel | 默认展开层级，若不指定，将展开全部 | number | - |
| layout | 生态树布局配置 | [Layout](#layout) | - |

<embed src="../graphs-common/tree-data.zh.md"></embed>

### Layout

生态树布局，可配置的参数如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 布局类型 | string | `dendrogram` |
| direction | 布局方向 | `LR` \| `RL` \| `TB` \| `BT` \| `H` \| `V` | `RL` |
| nodeSep | 节点间距 | number | 40 |
| rankSep | 层与层之间的间距 | number | 200 |
| radial | 是否按照辐射状布局。若 radial 为 true，建议 direction 设置为 `LR` 或 `RL` |  |  |
