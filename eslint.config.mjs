import prettier from "eslint-plugin-prettier";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("oclif", "prettier"), {
    plugins: {
        prettier,
    },

    languageOptions: {
        globals: {
            ...globals.jest,
        },

        ecmaVersion: 8,
        sourceType: "module",
    },

    rules: {
        "prettier/prettier": "error",
        "comma-dangle": 0,
        semi: 0,
        "object-curly-spacing": 0,

        "unicorn/filename-case": ["error", {
            case: "kebabCase",
            ignore: ["child_process\\.js$"],
        }],
    },
}];