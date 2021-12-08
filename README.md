# vscode 
install plugins eslint,vetur 
* v > 1.41.0
```json
"eslint.alwaysShowStatus": true,
"eslint.quiet": true,
"eslint.format.enable": true,
"eslint.validate": ["javascript", "vue", "html"],
"editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
}
```
* old version
```json
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
```

# install

- npm i  install-peerdeps eslint-config-face -D
- npx install-peerdeps eslint-config-face -D


# node

### package.json
.prettierrc.js and .eslintrc.js
```json
  "eslintConfig": {
    "extends": [
      "face"
    ],
    "rules": {}
  },
  "prettier": {
    "semi": true,
    "tabWidth": 2,
    "printWidth": 120,
    "singleQuote": true,
    "bracketSpacing": false,
    "endOfLine": "lf",
    "trailingComma": "es5",
    "arrowParens": "always"
  },
```

### npm

```json
"fix": "eslint src/**/*.{vue,js} --fix"
"fix": "eslint src --ext .ts --fix"
```

# vue
### package.json
```json
  "eslintConfig": {
    "extends": [
      "face/vue"
    ],
    "rules": {}
  },
  "prettier": {
    "semi": true,
    "tabWidth": 2,
    "printWidth": 120,
    "singleQuote": true,
    "bracketSpacing": false,
    "endOfLine": "lf",
    "trailingComma": "es5",
    "arrowParens": "always"
  },
```

# typescript
### package.json
```json
  "eslintConfig": {
    "extends": [
      "face/typescript"
    ],
    "rules": {}
  },
  "prettier": {
    "semi": true,
    "tabWidth": 2,
    "printWidth": 120,
    "singleQuote": true,
    "bracketSpacing": false,
    "endOfLine": "lf",
    "trailingComma": "es5",
    "arrowParens": "always"
  },
```

# reference
* https://juejin.cn/post/6844904068746313736
* https://juejin.cn/post/6926456864276873230
* http://www.verydoc.net/eslint/00003582.html


