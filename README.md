# vscode
install plugins eslint,vetur
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
# node
### install 

- npm install -D babel-eslint eslint eslint-plugin-vue eslint-config-prettier eslint-plugin-promise eslint-plugin-prettier prettier eslint-config-face

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
### install 
- npm install -D babel-eslint eslint eslint-plugin-vue eslint-config-prettier eslint-plugin-promise eslint-plugin-prettier prettier  eslint-config-face
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
### install 
```js
npm install -D  @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-config-prettier eslint-plugin-prettier prettier typescript  eslint-plugin-promise eslint-config-face
```

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