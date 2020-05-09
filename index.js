module.exports = {
  extends: ["stylelint-config-twbs-bootstrap/scss"],
  rules: {
    "selector-max-class": 8,
    "selector-max-combinators": 8,
    "selector-max-compound-selectors": 8,
    "selector-no-qualifying-type": [
      true,
      { ignore: ["attribute", "class", "id"] },
    ],
    "selector-type-no-unknown": [true, { ignore: ["custom-elements"] }],
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
  },
};
