---
title: Hugo + gulp.js = Huggle.
subtitle: 速度极快的静态网站构建工具
date: 2014-03-04
slug: zh/intro/

lang: zh
otherlangs: ["en"]
otherurls: ["/intro/"]
---

## 什么是 Huggle ？

Huggle 并非一个全新的工具，它只是整合 Hugo + gulp.js 两大工具的一个示范，
目标是帮助你**更快速地构建静态网站**，如个人博客、公司/项目主页、作品集网站等。

[Hugo](http://hugo.spf13.com/) 是用 Go 语言编写的静态页面生成工具，
与 [jekyll](http://jekyllrb.com/) 等工具类似。Hugo 的最大特点就是快，构建一个包含 200+ 篇文章的博客，
只需要几秒钟。对于如何生成页面，它提供了大量既符合直觉又相当灵活的自定义选项，
但对喜欢自己编写网站模版样式的设计师和前端工程师来说，使用 Hugo 还有一点障碍 —— css/js 的打包工具仍需单独配置。

你可以使用完全基于 NodeJS 和 Grunt.js 生态的 [Assemble](http://assemble.io/) ，可惜就是太慢了。

既然 Hugo 可以很快，就不能让写前端代码的需求拖了后腿。
于是我们把同样拥有极速体验的流模式构建工具 [gulp.js](http://gulpjs.com/) 与 Hugo 结合在一起，
让你能免去一切等待，专心在开发模版和书写文章上。

## 开始

要开始使用 Huggle ，仅需两步：

1. [下载Hugo](https://github.com/spf13/hugo/releases)
1. [克隆本仓库](https://github.com/ktmud/huggle)

步骤一中下载到的符合你系统版本的可执行文件，需要添加到 $PATH 目录（[详细](http://hugo.spf13.com/overview/installing)）。

克隆好 Huggle 之后，执行 `npm install && make watch` ，
即可在 `content/` 目录下开始编辑你自己的文章。

## 进阶

### 改善开发体验

Huggle 打包了大量流行的开发者福利：

1. 使用 [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)，
   保存文件浏览器将自动刷新。得益于 Hugo 和 gulp.js 的极限速度，你甚至都还没来得及切换窗口，页面就已更新完毕。
2. 使用 [browserfy](http://browserify.org/) 和 [coffeeify](https://github.com/substack/coffeeify) ，
   你可以在 `./template/assets` 目录按照 nodejs 的 `require` 用法来书写浏览器脚本。
3. `./template/assets/styles` 目录是样式文件的源代码，所有目录结构都可以在 `gulpfile.js` 里修改，
   你也可以按照自己的习惯将 sass 换成习惯的 less 或 stylus ，只需安装相应的 [gulp 插件](http://gulpjs.com/plugins/)即可。


### 多语言支持

通过添加一些自定义参数，以及按条理组织 Url ，你可以利用 Hugo 轻松搭建多语言网站：

1. 在 `config.yaml` 中设定你的默认语言
2. 在 markdown 头部的 [front matter](http://hugo.spf13.com/content/front-matter) 里添加 `lang: zh` 参数。标准语言代码可以参考[这里](http://www.w3schools.com/tags/ref_language_codes.asp)。
3. 为了将某一语言的文件都组织在同一目录下，指定文档网址： `slug: /zh/article-title-goes-here`
4. 指定此文章其他语言版本的链接：

    ```yaml
    otherlangs: ["en"]
    otherurls: ["/en/article-title"]
    ```


如本文[源码所示](https://raw.github.com/ktmud/huggle/master/content/intro.zh.md)：

```yaml
---
title: Hugo + gulp.js = Huggle.
subtitle: 速度极快的静态网站构建工具
date: 2014-03-04
slug: zh/intro/

lang: zh
otherlangs: ["en"]
otherurls: ["/intro/"]
---
```

    
### golang text/template 小贴士

除了 [Hugo文档](http://hugo.spf13.com/layout/go-templates) 里已经说明的以外，还有一些注意事项值得在此说明：

1. 模版语句内的字符串实体必须用双引号
2. 双括弧两边继续留有空格

因此，对于语句：

```gotmpl
{{ template "chrome/includes.html" . }}
```

双引号（`"`）不能写作单引号，`.` 后面的空格也不能省略。

### 条件判断

如果不等于：

```gotmpl
{{ if ne .Url "/" }}
  <a href="{{ .Site.BaseUrl }}">Back Home</a>
{{ end }}
```

或者

```gotmpl
{{ if not (eq .Url "/") }}
  <a href="{{ .Site.BaseUrl }}">Back Home</a>
{{ end }}
```

两个条件：

```gotmpl
{{ if or (ne .Url "/") (ne .Url "/en/") }}
  <a href="{{ .Site.BaseUrl }}">Back Home</a>
{{ end }}
```

没有 `unless` ，但是可以 `if not` ，更多指南请参考 [golang 文档](http://golang.org/pkg/text/template/)。

### Context 和循环枚举

设 `.Params.tags` 为一个数组：`['标签1', '标签2']`

```gotmpl
{{ range .Params.tags }}
  <a href="{{ $.Site.Params.baseurl }}tag/{{ . }}">{{ . }}</a>
{{ end }}
```

注意你可以使用 `{{ $.OuterValue }}` 获取一个 Context 外部的变量([via][1])。


[1]: http://stackoverflow.com/questions/14800204/in-a-template-how-do-you-access-an-outer-scope-while-inside-of-a-with-or-rang

