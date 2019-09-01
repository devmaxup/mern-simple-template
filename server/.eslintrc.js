module.exports = {
  "root": true,
  "extends": [
    "airbnb-base",
    "plugin:prettier/recommended"
  ],
  "env": {
    "es6": true,
    "commonjs": true,
    "node": true
  },
  "plugins": [
    "prettier"
  ],
  "rules": {
    "import/prefer-default-export": 0,
    "no-param-reassign": 0,
    "no-underscore-dangle": 0,
    "prettier/prettier": ["error", require('../.prettierrc.js')]
  }
};
