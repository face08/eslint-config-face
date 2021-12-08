# Git规范

## 一、 Commit Message 格式

目前规范使用较多的是 [Angular 团队的规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format):

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

其中，`Header` 是必填，`Body` 和 `Footer` 是选填。




### `Header`
`Header` 包括三个字段：`type`（必填）、`scope`（选填）和 `subject`（必填）
```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|docs-infra|migrations|ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

#### 举个栗子，注意：后有空格
```
docs(changelog): update changelog to beta.5
fix(release): need to depend on latest rxjs and zone.js
feat(影响论坛的相关模块): 增加点赞功能
fix(影响论坛的相关模块): 修改点赞的bug
test: 增加测试并发登录
docs: 增加工程说明文档

```
单个fix提交
```
fix(call): 回音问题

描述问题具体原因

Closes #123, #245, #992
```

#### `type`
`type` 用于说明 `commit` 的类别，只允许使用下面 7 个标识，（ `feat` 和 `fix`）出现在 `Change log` 之中。
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
- revert: 版本回滚
- scope: 用于说明 commit 影响的范围，比如: views, component, utils, test…
- subject: commit 目的的简短描述
- update npm包升级
- roncloud sdk升级



#### `scope`

`scope` 用于说明 `commit` 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

#### `subject`
`subject` 是 `commit` 目的的简短描述，不超过50个字符
```
以动词开头，使用第一人称现在时，比如 change，而不是 changed 或 changes
第一个字母小写
结尾不加句号（.）
```

### `body`

`Body` 部分是对本次 `commit` 的详细描述，可以分成多行。下面是一个范例。

```
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Use a hanging indent
```

### `Footer`

`Footer` 部分只用于两种情况

- 不兼容变动

如果当前代码与上一个版本不兼容，则 `Footer` 部分以 `BREAKING CHANGE` 开头，后面是对变动的描述、以及变动理由和迁移方法。

- 关闭 `Issue` 如果当前 `commit` 针对某个 `issue`，那么可以在 `Footer` 部分关闭这个 `issue`

```
Closes #123, #245, #992
```

## 二、 生成 Change log `conventional-changelog` 或`standard-version`
```
{
  "scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -w -r 0"
  }
}
```


## 三、 VSCode插件 `Git-commit-plugin`

## 四、 结合 `Husky`

校验 commit message 的最佳方式是结合 git hook, 所以需要配合 [Husky](https://link.juejin.im/?target=https%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%3A%2F%2Fgithub.com%2Ftypicode%2Fhusky).

安装

```
npm install husky --save-dev
```

package.json 中添加:

```
"husky": {
  "hooks": {
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
},
```





### 参考
* https://gitbook.rongcloud.net/rd/principle/commit.html
* https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html
* https://juejin.im/post/5bd2debfe51d457abc710b57#heading-12
* https://juejin.im/post/5afc5242f265da0b7f44bee4#heading-3
