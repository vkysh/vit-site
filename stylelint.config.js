module.exports = {
  extends: [
    "stylelint-config-standard", // Базові правила CSS/SCSS
    "stylelint-config-prettier", // Вимикає ті, що конфліктують із Prettier
  ],
  plugins: ["stylelint-scss"],
  customSyntax: "postcss-scss",
  rules: {
    indentation: 2, // 2 пробіли
    "string-quotes": "single", // Одинарні лапки
    "color-hex-length": "short", // Коротка форма кольорів (наприклад, #fff)
    "max-empty-lines": 1, // Не більше одного порожнього рядка
    "declaration-block-no-duplicate-properties": true,
    "block-no-empty": true,
    "selector-list-comma-newline-after": "always-multi-line",
    "no-descending-specificity": null, // Вимикає помилки через порядок селекторів (для зручності)
  },
  ignoreFiles: ["**/node_modules/**", "**/dist/**", "**/.parcel-cache/**"],
};
