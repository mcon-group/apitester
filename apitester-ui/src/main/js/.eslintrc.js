
module.exports = {
  "env": {
    "browser": true,
    "jasmine": true
  },
  "extends": ["eslint:recommended", "google"],
  "globals": {
    "_": true,
    "angular": true,
  },
  "rules": {
    "eqeqeq": ["error", "always"],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-extra-semi": "error",
    "no-mixed-spaces-and-tabs": ["error"],
    "no-unused-vars": [2, {"args": "after-used"}], // Change google
    "no-var": 0,
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error"
  }
};
