---
title: Hugo + gulp.js = Huggle.
subtitle: 速度极快的静态网站构建工具
date: 2014-03-04
lang: zh
otherlangs: ["en"]
otherslugs: ["intro"]
slug: zh/intro
---

## 什么是 Huggle ？

Huggle 并非一个全新的工具，它只是整合 Hugo + gulp.js 两大工具的一个示范，
目标是帮助你**更快速地构建静态网站**，如个人博客、公司/项目主页、作品集网站等。

[Hugo](http://hugo.spf13.com/) 是用 Go 语言编写的静态页面生成工具，
与 [jekyll](http://jekyllrb.com/) 等工具类似。Hugo 的最大特点就是快，构建一个包含 200+ 篇文章的博客，
只需要几秒钟。对于如何生成页面，它提供了大量既符合直觉又相当灵活的自定义选项，
但对喜欢自己编写网站模版样式的设计师和前端工程师来说，使用 Hugo 还有一点障碍 —— css/js 的打包工具仍需单独配置。

你可以使用完全基于 NodeJS 和 Grunt.js 生态的 [Assemble](http://assemble.io/) ，可惜就是太慢了。

既然 Hugo 可以很快，就不能让写前端代码的需求拖了后腿。所以有了 **Huggle** ，
把同样速度巨快的流模式前端构建工具 [gulp.js](http://gulpjs.com/) 与 Hugo 结合在一起，
让你能享受闪电般开发、编辑、构建静态网站的快感。

## 开始

主要步骤就两步：

1. [下载Hugo](https://github.com/spf13/hugo/releases)
1. [克隆本仓库](https://github.com/ktmud/huggle)

下载到符合你系统版本的可执行文件后，需要添加到 $PATH 目录（[详细](http://hugo.spf13.com/overview/installing)）。

克隆好你自己的 Huggle 版本后，执行 `npm install && make watch` ，
然后就开始在 `content/` 目录下添加你自己的文章吧。

## 进阶

### 改善开发体验

相信我，一旦习惯这些流氓的用法后，就再也回不去了：

1. 安装 [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
   ，打开预览网站后点一下 livereload 图标，保存文件浏览器将自动刷新
2. 此项目已配置了 [browserfy](http://browserify.org/) 和 [coffeeify](https://github.com/substack/coffeeify) ，
   你可以在 `./assets` 目录按照 nodejs 的 `require` 用法来书写浏览器脚本。
3. `./assets/styles` 目录是样式文件的源代码，所有目录结构都可以在 `gulpfile.js` 里修改，
   你当然可以按照自己的习惯将 sass 换成你习惯的 less 或 stylus ，只需安装相应的 [gulp 插件](http://gulpjs.com/plugins/)即可。


### 多语言支持

1. 在 `config.yaml` 中设定你的默认语言
2. 在 markdown 头部的 [front matter](http://hugo.spf13.com/content/front-matter) 里添加 `lang: zh` 选项。标准语言代码可以参考[这里](http://www.w3schools.com/tags/ref_language_codes.asp)。
3. 如果你想将某一语言的文件都组织在同一目录下，还可以配置文档网址： `slug: zh/article-title-goes-hear` 
4. 如果某篇文字有其他语言版本，添加 `otherlangs: ["en"]`

如本文的[源码](https://raw.github.com/ktmud/huggle/master/content/intro.zh.md)所示：

```yaml
---
title: Hugo + gulp.js = Huggle.
subtitle: 速度极快的静态网站构建工具
date: 2014-03-04
lang: zh
otherlangs: ["en"]
otherslugs: ["intro"]
slug: zh/intro
---
```

    
### golang html/template 小贴士

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

