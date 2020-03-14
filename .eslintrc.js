module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    env:{
        "node": true
    },
    rules: {
        // カラム名がアンダースコアなので警告を無視する
        "@typescript-eslint/camelcase": "off",
        // 本当は良くないけど仕方なく・・・。
        "@typescript-eslint/ban-ts-ignore": "off"
    }
}