# JS规范

1. 变量命名
- 命名方法：小驼峰。
- 命名规范：前缀应当是名词
- 命名建议：如果是boolean状态相关，加is 、has
```javascript
let userInfo;
let isLogin,isMute,isJoin
```

2. 函数命名
- 命名方法：小驼峰式。
- 命名规范：前缀应当为动词
```javascript
    function getName(){
        return this.name;
    }
```

3. 常量
- 命名方法：名称全部大写
- 命名规范：大写字母和下划线
- 命名建议：无
```javascript
    const PI = 3.14;
    const MAX_COUNT = 10;
```

4. 枚举
- 命名方法：名称全部大写
- 命名规范：大写字母和下划线
- 命名建议：建议加上ENUM
``` javascript
const CLASS_ENUM = {
  BEFORE_CLASS: 0,
  ON_CLASS: 1,
  AFTER_CLASS: 2
};
```

5. 类 & 构造函数
- 命名方法：大驼峰式命名法
- 命名规范：前缀为名称
- 命名建议：{在尾   }另起一行
``` javascript
function Student {
}

class Student {
  constructor() {
  }
}
```

6. 类属性、类函数顺序
- 建议：protect > private > public
- 建议：如果protect、private和函数参数重名，属性前加_ 


# 注释规范:[JSDoc](https://wizardforcel.gitbooks.io/google-javascript-style-guide/content/33.html)
1. 行内简单注释 
- 变量注释放后面
- 函数注释放前面
```javascript
let isMute ; // 是否静音

// 简单函数注释
function test() { 
}
```
2. 多行注释
- 超出2屏（一屏45行）的函数必须添加
- 复杂函数注释 [JSDoc风格](https://jsdoc.app/index.html)
- vscode支持 https://code.visualstudio.com/docs/languages/javascript#_jsdoc-support
```javascript
/**
 * 
 * @function
 * @description Add two numbers.
 * @param {Number} num1 The first number.
 * @param {Number} num2 The second number.
 * @returns {Number} The sum of the two numbers.
 */
export function add(num1, num2) {
  return num1 + num2;
}
```

# eslint规范（到时候会引入插件约束）
1. 单行最多120字符,超出换行
- 如果有操作符，则换行时放前面
```javascript
if (user.isAuthenticated()
    && user.isInRole('admin')
    && user.hasAuthority('add-admin')
    || user.hasAuthority('delete-admin')) {

}

```

2. 当个函数 2屏 = 135行(一屏45行)，超出50行必须有上面提到的多行注释

3. 【建议】单文件 12屏 = 540行(一屏45行)

4. 其它eslint规范
```
缩进为2个空格
使用单引号 ’‘
末尾需要分号;
禁止var
禁止定义前使用变量
禁用with语句
要求使用 === 和 !==
建议：函数参数个数最多 5 个
```
5. AirBnb 规范
- [官方](https://github.com/airbnb/javascript) | [中文](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)



### 参数
* https://jsdoc.app/index.html
* https://github.com/airbnb/javascript
