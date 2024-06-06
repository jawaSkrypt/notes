const stylisticjs = require("@stylistic/eslint-plugin-js");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = [...compat.extends("eslint:recommended"), {
    plugins: {
        "@stylistic/js": stylisticjs,
    },

    languageOptions: {
        globals: {
            ...globals.commonjs,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "commonjs",
    },

    rules: {
        "@stylistic/js/indent": ["error", 2],
        "@stylistic/js/linebreak-style": ["error", "windows"],
        "@stylistic/js/quotes": ["error", "single"],
        "@stylistic/js/semi": ["error", "never"],
        eqeqeq: "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "always"],

        "arrow-spacing": ["error", {
            before: true,
            after: true,
        }],

        "no-console": 0,
    },
}, {
    files: ["**/.eslintrc.{js,cjs}"],

    languageOptions: {
        globals: {
            ...globals.node,
        },

        ecmaVersion: 5,
        sourceType: "commonjs",
    },
}];