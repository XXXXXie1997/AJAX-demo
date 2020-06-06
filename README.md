## 目前存在的问题

1. 提示语法错误
   `Uncaught SyntaxError: Cannot use import statement outside a module`

2. 网上说给 script 标签`type="module"`属性。。我也不知道什么原理
   试了试，出现了新的问题:
   `Uncaught TypeError: Failed to resolve module specifier "cluster". Relative references must start with either "/", "./", or "../".`
