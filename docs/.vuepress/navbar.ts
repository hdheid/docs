/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'streamline-plump-color:home-1-flat'},
  {
    text: '编程语言',
    items: [
      { text: 'Go', icon:'vscode-icons:file-type-go', link: '/notes/go/README.md' },
    ],
    icon: 'streamline-color:file-code-1'
  },
  {
    text: '中间件',
    items: [
      { text: 'mongoDB', icon:'devicon:mongodb', link: '/notes/mongoDB/README.md' },
      { text: 'docker', icon: 'devicon:docker' , link: '/notes/docker/README.md' },
    ],
    icon: 'streamline-plump-color:database-flat'
  },
  {
    text: '开发常用',
    items: [
      { text: 'git', icon:'material-icon-theme:git', link: '/notes/git/README.md' },
    ],
    icon: 'streamline-sharp-color:tool-box-flat'
  },
  {
    text: '开源项目',
    items: [
      { text: 'go-utils', icon:'vscode-icons:file-type-go', link: '/notes/utils/README.md' },
    ],
    icon: 'mingcute:github-fill'
  },
  
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '博客', link: '/blog/' },
])
