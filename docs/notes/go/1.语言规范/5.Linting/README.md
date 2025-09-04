---
title: README
createTime: 2025/09/04 15:40:36
permalink: /go/mg37g163/
---
比任何 "blessed" linter 集更重要的是，lint 在一个代码库中始终保持一致。

我们建议至少使用以下 linters，因为我认为它们有助于发现最常见的问题，并在不需要规定的情况下为代码质量建立一个高标准：

- [errcheck] 以确保错误得到处理
- [goimports] 格式化代码和管理 imports
- [golint] 指出常见的文体错误
- [govet] 分析代码中的常见错误
- [staticcheck] 各种静态分析检查

  [errcheck]: https://github.com/kisielk/errcheck
  [goimports]: https://pkg.go.dev/golang.org/x/tools/cmd/goimports
  [golint]: https://github.com/golang/lint
  [govet]: https://golang.org/cmd/vet/
  [staticcheck]: https://staticcheck.io/
