import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Reglas por defecto de Next.js
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 🔽 Añadimos overrides personalizados
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": "warn", // era "error"
      "react/no-unescaped-entities": "warn", // era "error"
    },
  },
];

export default eslintConfig;
