## 目前存在的问题

6.6

1. 提示语法错误
   `Uncaught SyntaxError: Cannot use import statement outside a module`

6.7

报错的 main.js 第一行是怎么来的。。。刚才一看怎么多了

```javascript
import { getMaxListeners } from "cluster";
import { getPackedSettings } from "http2";
```

这么两行。。。
完全不记得写过啊，注掉之后居然就能用了。。。
