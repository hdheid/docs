---
title: README
createTime: 2025/09/04 11:44:53
permalink: /go/nmchfl98/
---

## [uber-go/guide](https://github.com/uber-go/guide) 的中文翻译

  
## [English](https://github.com/uber-go/guide/blob/master/style.md)

  

## Uber Go 语言编码规范

 [Uber](https://www.uber.com/) 是一家美国硅谷的科技公司，也是 Go 语言的早期 adopter。其开源了很多 golang 项目，诸如被 Gopher 圈熟知的 [zap](https://github.com/uber-go/zap)、[jaeger](https://github.com/jaegertracing/jaeger) 等。2018 年年末 Uber 将内部的 [Go 风格规范](https://github.com/uber-go/guide) 开源到 GitHub，经过一年的积累和更新，该规范已经初具规模，并受到广大 Gopher 的关注。本文是该规范的中文版本。本版本会根据原版实时更新。

  
## 版本
 
 - 当前更新版本：2024-08-10 版本地址：[commit:#227](https://github.com/uber-go/guide/commit/97314412dfcb60c3f4f0372bc311f9ddcdac54a9)

- 如果您发现任何更新、问题或改进，请随时 fork 和 PR

- Please feel free to fork and PR if you find any updates, issues or improvement.

## 介绍

样式 (style) 是支配我们代码的惯例。术语`样式`有点用词不当，因为这些约定涵盖的范围不限于由 gofmt 替我们处理的源文件格式。

  

本指南的目的是通过详细描述在 Uber 编写 Go 代码的注意事项来管理这种复杂性。这些规则的存在是为了使代码库易于管理，同时仍然允许工程师更有效地使用 Go 语言功能。

  

该指南最初由 [Prashant Varanasi] 和 [Simon Newton] 编写，目的是使一些同事能快速使用 Go。多年来，该指南已根据其他人的反馈进行了修改。

  

[Prashant Varanasi]: https://github.com/prashantv

[Simon Newton]: https://github.com/nomis52

  

本文档记录了我们在 Uber 遵循的 Go 代码中的惯用约定。其中许多是 Go 的通用准则，而其他扩展准则依赖于下面外部的指南：

  

1. [Effective Go](https://golang.org/doc/effective_go.html)

2. [Go Common Mistakes](https://go.dev/wiki/CommonMistakes)

3. [Go Code Review Comments](https://go.dev/wiki/CodeReviewComments)

  

我们的目标是使代码示例能够准确地用于 Go 的两个发布版本 [releases](https://go.dev/doc/devel/release).

  

所有代码都应该通过`golint`和`go vet`的检查并无错误。我们建议您将编辑器设置为：

  

- 保存时运行 `goimports`

- 运行 `golint` 和 `go vet` 检查错误

  

您可以在以下 Go 编辑器工具支持页面中找到更为详细的信息：

<https://go.dev/wiki/IDEsAndTextEditorPlugins>

## 导航


- [介绍](#介绍)

- [指导原则](./1.指导原则/README.md)
    - [指向 interface 的指针](./1.指导原则/1.指向%20interface%20的指针.md)
    - [Interface 合理性验证](./1.指导原则/2.Interface%20合理性验证.md)
    - [接收器 (receiver) 与接口](./1.指导原则/3.接收器%20(receiver)%20与接口.md)
    - [值 Mutex 是有效的](./1.指导原则/4.值%20Mutex%20是有效的.md)
    - [在边界处拷贝 Slices 和 Maps](./1.指导原则/5.在边界处拷贝%20Slices%20和%20Maps.md)
    - [使用 defer 释放资源](./1.指导原则/6.使用%20defer%20释放资源.md)
    - [Channel 的 size 要么是 1，要么是无缓冲的](./1.指导原则/7.Channel%20的%20size%20要么是%201，要么是无缓冲的.md)
    - [枚举从 1 开始](./1.指导原则/8.枚举从%201%20开始.md)
    - [使用 time 处理时间](./1.指导原则/9.使用%20time%20处理时间.md)
    - [Errors](./1.指导原则/10.Errors.md)
    - [处理断言失败](./1.指导原则/11.处理断言失败.md)
    - [不要使用 panic](./1.指导原则/12.不要使用%20panic.md)
    - [原子操作](./1.指导原则/13.原子操作.md)
    - [避免可变全局变量](./1.指导原则/14.避免可变全局变量.md)
    - [避免在公共结构中嵌入类型](./1.指导原则/15.避免在公共结构中嵌入类型.md)
    - [避免使用内置名称](./1.指导原则/16.避免使用内置名称.md)
    - [避免使用 init()](./1.指导原则/17.避免使用%20init().md)
    - [追加时优先指定切片容量](./1.指导原则/18.追加时优先指定切片容量.md)
    - [主函数退出方式 (Exit)](./1.指导原则/19.主函数退出方式%20(Exit).md)
    - [在序列化结构中使用字段标记](./1.指导原则/20.在序列化结构中使用字段标记.md)
    - [不要一劳永逸地使用 goroutine](./1.指导原则/21.不要一劳永逸地使用%20goroutine.md)
