const ERROR = 2;
const OFF = 0;

module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/airbnb"],

  rules: {
    "no-console": OFF,
    "no-debugger": OFF,
    "vue/singleline-html-element-content-newline": OFF,
    "max-len": [
      ERROR,
      {
        code: 110,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }
    ]
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  extends: ["plugin:vue/strongly-recommended", "@vue/airbnb"]
};
