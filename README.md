### 安装

- npm install -D babel-eslint eslint eslint-plugin-vue eslint-config-prettier eslint-plugin-promise eslint-plugin-prettier prettier
- npm link eslint-config-face stylelint-config-face

### .prettierrc.js

```javascript
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 120,
  semi: true,
  singleQuote: true,
  bracketSpacing: false,
  endOfLine: "lf",
  arrowParens: "always"
};
```

### .eslintrc.js

```javascript
module.exports = {
  // extends: ["face"]
  extends: ["plugin:prettier/recommended", "face"]
};
```

```json
 "eslintConfig": {
    "extends": ["plugin:prettier/recommended", "face"],
}
```

### npm

```json
"link": "npm link eslint-config-face",
"lint": "eslint .",
"lint:fix": "eslint . --fix",
"run": "node app.js",
"test": "eslint test.js",
"test:fix": "eslint test.js --fix",
"rule": "eslint test.js --rulesdir rules"
"fix": "eslint --fix src/**/*.{vue,js}",
```
