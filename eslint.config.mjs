import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    overrides: [
      {
        files: ["*.js", "*.jsx"],
        rules: {
          "no-unused-vars": "off",
          "react/prop-types": "off",
        },
      },
      {
        files: ["**/*.test.js", "**/*.spec.js"],
        env: {
          jest: true,
        },
      },
    ],
  },
  {
    rules: {
      "no-console": "warn",
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
