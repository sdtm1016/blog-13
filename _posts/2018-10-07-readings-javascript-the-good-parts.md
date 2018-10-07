---
title: 读书笔记：《JavaScript 语言精髓》
---

重温经典。这本书告诉你，什么是不好的 JavaScript，这与知道什么是精华的 JavaScript 一样重要。正所谓非彼无我，非我无所取。

## 目录

* 导读
* 语言基本要素
* 精华
* 糟粕

## 导读

这次读这本书可谓是带着目的而来。国庆在家给自己接下来定了学习计划：要深入了解 JavaScript 这门语言。另外，我也不是编程语言圣战中的一名教徒，工作三年之余，除了胜任手上的工作以外，也有更高的学习要求：**了解技术本质**、**了解技术价值观**、**了解技术史**。所以，除了了解 JavaScript 这门语言的好坏外，也是要从编程语言这个视角，了解一门语言的基本要素，以及不同语言间的异同，为日后打好基础。基于这个思路，这本书尝试回答的问题正是我所需要的：

1.  JavaScript 的基本语言要素
2.  JavaScript 的精华
3.  JavaScript 的毒瘤和糟粕（以下统称糟粕，区分其差异不是本次阅读的目的）

精华和糟粕可以用一份 ESLint 规则一言以蔽之。而在语言基本要素一节，其主要的三个部分：弱类型、函数、原型继承——也是其精华——我将在「精华」一节中简要展开。

## 语言基本要素

* 语法要素：空格、注释、标识符、数字、字符串、语句、表达式、字面量等
* 三大编程结构（顺序、条件、循环）
* 数据结构：
  * 类型：弱类型
  * 种类：基本类型 / 对象 / 数组
* 函数：代码复用、组合、模块化、信息隐藏
* 继承：代码复用
* API
* 元编程

语法要素不详细讲，在学习其他编程语言时可以迁移；三大编程结构应该是任何编程语言都应该具备的功能了；弱类型、函数、继承都是 JavaScript 的精华所在，放在精华一节说；至于 API，揉在弱类型一节讲；元编程是大学毕业设计的时候种下的一个种子，可惜这本书中这个主题体现不多，故也略去为敬。

## 精华

看完书，总结了一下，JS 的精华大概就这三点：

* 弱类型 & JSON/array literal
* 函数
* 继承

### 弱类型

弱类型意味着很多事，一是写代码的时候你可以不用在意类型了，开发快；二是更优雅的表达力；三是更有表达力的继承方案的可能性（在继承一小节谈）。当然，类型系统对于编译期的问题发现也是很有价值的，在重构的时候也能给 IDE 提供更多的帮助。但作者认为，靠类型系统发现的 bug，不多也不大，相比起来类型系统就太重量，而弱类型是兼顾表达力和项目价值的优雅方案。

JS 有哪些类型呢？一言以蔽之，最重要的有三类八种：**基本类型**、**对象**和**函数**。基本类型有 `string`、`boolean`、`number` 三种类型；函数包含一般函数和构造函数等；对象就是 `object` 类型，除了对象，它还包含数组、正则表达式、日期对象等。也就是说，以下所有东西都是 `object` 类型：

```javascript
typeof {} // 'object'
typeof [] // 'object'
typeof /s/ // 'object'
typeof new Date() // 'object'
```

而以下东西是函数类型：

```javascript
typeof function() {} // 'function'
typeof class Door {} // 'function'
```

另外还有一些奇葩类型：

```javascript
typeof null // 'object'
typeof undefined // 'undefined'
typeof NaN // 'undefined'
typeof void 0 // 'undefined'
```

![JavaScript Data Types](https://i.stack.imgur.com/L1tYe.png)

与 Java 这门强类型语言做对比，它的 String、Array、Map 都是类型，为了具有类型的方法，不得不使用一个类，有时仅需要存取数据时就显得多余。相比之下，JS 创建字符串、对象和数组就简单得多了，见下面代码段。可不要习以为常，直接写 `{}` `[]` 创建对象和数组的写法是 JS 所支持，带来了极度轻量的便利。其中起源于 JS 的对象结构 JSON（JavaScript Object Notation）更是成了一种通用的数据交换格式。

```javascript
const human = {
  name: 'Lao Wang',
  age: 35,
  ready: true,
}
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]
```

### 函数

JavaScript 里面函数是一等公民。这意味着啥呢？请听下回分解。

### 继承

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
* https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance
* https://hackernoon.com/understanding-javascript-prototype-and-inheritance-d55a9a23bde2
* https://www.google.com/search?q=javascript+prototype+hierarchy&newwindow=1&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwiw65n6x_TdAhUlBMAKHTGXDEQQsAR6BAgBEAE&biw=1097&bih=572
* https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9
* https://github.com/creeperyang/blog/issues/9
* https://www.google.com/search?q=javascript+%E5%8E%9F%E5%9E%8B%E7%BB%A7%E6%89%BF+%E5%9B%BE&newwindow=1&tbm=isch&tbo=u&source=univ&sa=X&ved=2ahUKEwj45vGMzfTdAhVlIcAKHbYCDgoQsAR6BAgAEAE&biw=1097&bih=572
* https://github.com/mqyqingfeng/Blog/issues/2
* http://www.ituring.com.cn/article/56184
* https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014344997013405abfb7f0e1904a04ba6898a384b1e925000
* https://juejin.im/post/5b729c24f265da280f3ad010
* http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html

## 糟粕

## ESLint

* https://github.com/airbnb/javascript
* https://standardjs.com/
* https://google.github.io/styleguide/jsguide.html
* https://eslint.org/docs/4.0.0/rules/