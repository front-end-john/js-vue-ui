module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 0,
    "indent": 0,
    "arrow-parens": 0,
    "generator-star-spacing": 0,
    "semi": [
      "off"
    ],
    "space-before-function-paren": 0,
    "disallowTabs": "off",
    "no-multiple-empty-lines": [
      0,
      {
        "max": 100
      }
    ],
    "no-mixed-spaces-and-tabs": [
      0
    ],
    "key-spacing": [
      "error", {
        "beforeColon": false,
        "afterColon": true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
