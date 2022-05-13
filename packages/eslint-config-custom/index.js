const prettierConfig = require('prettier-config')

module.exports = {
  extends: ["next", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/no-unresolved": [
      "error",
      {
        "ignore": [
          "^(all|part):"
        ]
      }
    ],
    // must  match .prettierrc in project root
    "prettier/prettier": [
      "error",
      prettierConfig
    ]
  },
};
