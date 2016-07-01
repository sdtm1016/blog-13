---
layout: post
tags: github, 七牛, jekyll, ci, gitbook, markdown
categories: 翻译
title: 一个翻译项目的生命周期：记Spring MVC文档翻译的环境搭建、项目管理及自动化构建
---

## 环境搭建

翻译与写作一样，首要之事均为专注于翻译/写作本身，而不考虑样式等方面。而章节之间的联系，自然也不想过多操心，这部分与样式一起，都可交由工具去处理。然后版本管理，不用说一定要上，后面也会看到github的生态圈使得它与其他工具做到了无缝集成。那么总结起来，我们需要的工具大体是：

* markdown
* markdown编辑器 Atom
* 版本管理 Git
* 代码托管平台 Github
* 写书专用工具 Gitbook
* HTML转markdown工具

### Markdown

Markdown是一种近乎完美的写作标记语言，其最大的功劳便是将写作从内容中分离出来，这个分离使你只专注于写作内容本身，极大地提高了效率及工作愉悦度。没有markdown的话，会是怎样一种情况？想想HTML和写论文经常使用的word。你在HTML中为内容混入各种各样的样式，写论文时最痛苦的莫过于调样式（不过笔者当年写论文时通过Office Word的样式窗也是完美地解决了内容和格式的问题）。

比如说，上面这段文字在markdown中写出来是这样的：

```
## 环境搭建

翻译与写作一样，首要之事均为专注于翻译/写作本身，而不考虑样式等方面。而章节之间的联系，自然也不想过多操心，这部分与样式一起，都可交由工具去处理。然后版本管理，不用说一定要上，后面也会看到github的生态圈使得它与其他工具做到了无缝集成。那么总结起来，我们需要的工具大体是：

* markdown
* markdown编辑器 Atom
* 版本管理 Git
* 代码托管平台 Github
* 写书专用工具 Gitbook
* HTML转markdown工具
```

说起来markdown这个名字也有点意思，一般的标记语言叫markup language。这里将up改成down，寓意着将标记语言中与内容本身无关的标记全部剔除，形成一个精简子集。本篇不是markdown用法记，所以更多的语法请自行~~百度~~Google。我这里可以提供几个链接：

* [Wikipedia: Markdown](https://en.wikipedia.org/wiki/Markdown)
* [Markdown overview](https://daringfireball.net/projects/markdown/)
* [Github上最有名的Markdown Cheat Sheet仓库](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Markdown编辑器 Atom

![](http://7xqu8w.com1.z0.glb.clouddn.com/atom-as-translation-project-editor.png "Use Atom as the translation project's editor")

编辑器的选择并无定式，打造一个完全符合自己操作习惯的编辑器也是每个程序员应做的一个工作，这里我不赘述。在Mac上，不错的markdown编辑器有Sublime 3、Atom、MacDown、Mark Editor、Gitbook Editor、Mou等，可挑选适合自己的，我选择的是Atom，是因为有一个刚性的需求它能够满足：

* **与终端（terminal）的集成**。由于使用了版本管理，同时有时有拷贝文件、查看目录等需求，命令行肯定是必须随时在手的。终端方面我的选择是iTerm2+zsh，关于它们的配置和特性，你可以来我博客查看这两篇文章 [Mac优雅的工具集——iTerm2篇](http://blog.linesh.tw/#/posts/2016-03-11-elegant-mac-iterm2) 和 [Mac优雅的工具集——oh-my-zsh篇](http://blog.linesh.tw/#/posts/2016-03-13-elegant-mac-oh-my-zsh)。对如何在Mac上构建一个优雅的工具集有兴趣的同学，也可以前往Gitbook看看我正在写的这个系列：[关于优雅地使用Mac OS的理念、想法、工具与实践集](https://linesh.gitbooks.io/gitbook-elegant-mac-tools-system-closure/content/index.html)。

### 版本管理 Git

![](http://7xqu8w.com1.z0.glb.clouddn.com/git-logo.png "Git Logo")

Git作为版本管理的意义也不赘言。你肯定不想自己的工作区最后变成这样：

![](http://7xqu8w.com1.z0.glb.clouddn.com/word-as-version-manager.jpeg "Word As version control will suck")

同样本小节也不是Git入门的命令集，这部分请自行查阅学习。当然我还是可以给出一些链接，虽然没有太多的意义~~我真的不知道为什么我还要给~~。基本的几个命令能熟悉就可以满足日常的需要了。另外，zsh下的Git可以配一下 快捷键(alias) 和 自动补全，具体配置非常简单，可以来这篇文章[Mac优雅的工具集——oh-my-zsh篇](http://blog.linesh.tw/#/posts/2016-03-13-elegant-mac-oh-my-zsh)看一下最终的效果。

* [Git - 简易指南](http://www.bootcss.com/p/git-guide/)
* [A Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html)
* [廖雪峰的官方网站：史上最浅显易懂的Git教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/)~~这浮夸的标题收视率果然好~~

### 代码托管平台 Github

![](http://7xqu8w.com1.z0.glb.clouddn.com/github-homepage.png "Github Homepage")

Github是~~世界上最大的同性交友平台~~目前最大~~我并无依据~~的代码托管平台，其生态圈之繁荣与力量令人震惊，几乎你需要的所有工具和资源都可以在上面找到。它与Git不是一个层级的概念~~`git=github.substring(0, 3)`~~，这部分请自行搜索。在这个平台上，我可以给翻译项目一个`README.md`文件，为阅读的人做简单的介绍以及引流，同时它可与CI（持续集成）、Gitbook等工具完美集成，其内置的issue、pull-request功能还能与Zenhub结合，直接当成trello来进行项目管理之用。相关的工具下一节会介绍。

### 写书专用工具 Gitbook

上文提到了翻译内容与样式的分离。实际上在这里样式这部分就是由Gitbook自带的渲染引擎来负责的。此外，Gitbook还能帮助你管理整个书的目录结构、章节生成、搜索、词汇表、站点构建与生成等，同时它也有丰富的插件生态。这一切只需要你进行少量的配置（其实，就只是在书的根目录下运行`gitbook init`命令，它会生成下图所示的一个目录结构），其低学习成本与高效益，使它成为了写书最易入门的趁手工具。

```
.
├── README.md
└── SUMMARY.md
```

## 项目管理



## 自动化构建

由gitbook迁移到七牛。其实就是将gitbook生成的静态站点`_book`文件夹拷贝到七牛的空间里，然后使用`index.html`作为入口。其中，主要就是两步工作：

1. 确保使用正确的gitbook和gitbook-cli版本进行`gitbook build`构建，生成`_book`目录：
  * 使用npm引入最新的gitbook和gitbook-cli：`npm install gitbook gitbook-cli --save`
  * 在`book.json`中指定要使用的gitbook版本：` "gitbook": ">=3.1.0" `
2. 将生成的`_book`目录同步到七牛云。七牛提供了相应的开发者工具，只需要调用其API即可：`./qrsync ./conf.json`

其中第二步，最容易想到的就是利用`git hook`的方式，在提交前调用七牛的API接口。但这个过程可能需要持续3~5分钟，这是我等不起的，这会让我尽量避免去push，进而使得我无法频繁提交。并且，提交就是提交，构建过程并不是我所需要关心的，也不需要让它占用我的时间。那么，很自然地想到， **是否能将这个过程放到远端来执行呢？**

这不就是CI的作用嘛！想到这里，马上安装一个Jenkins撸起

* 安装Jenkins
* 新建一个free-style的项目
* 配置git仓库地址、配置credential、配置Poll SCM
* 安装Hudson Post Build插件：用于在构建完成后、七牛同步前执行一些脚本
* 安装七牛云-jenkins插件：用于完成目录到七牛的自动同步
* 注册一个七牛云开发者账号（如果要自定义域名，必须实名认证~~简直是坑~~并且账户里10元以上人民币）
* 写点脚本

## Ant Glob Pattern

先上最后的成果图：

![](http://7xqu8w.com1.z0.glb.clouddn.com/mvc-translation-with-new-domain-hosted-in-qiniu.png)

![](http://7xqu8w.com1.z0.glb.clouddn.com/jenkins-pipeline-final-success.png)