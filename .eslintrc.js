/** @format */
/** @format */

module.exports = {
  root: false,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  dev: {
    useEslint: false,
  },
  rules: {
    "eslint-disable": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": ["off"],
    "no-undefined": ["off"],
    "no-undef": ["off"],
    "no-control-regex": 0,
    "eslint-disable-next-line": ["off"],
    eqeqeq: "off",
    curly: "error",
    quotes: ["error", "double"],
  },
};
