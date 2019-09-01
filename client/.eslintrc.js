module.exports = {
  "root": true,
  "extends": [
    "airbnb",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "plugins": [
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "version": "16.9"
    }
  },
  "rules": {
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "no-underscore-dangle": 0,
    "prettier/prettier": ["error", require('../.prettierrc.js')]
  }
};
