# Nested messages issue quick start

## Issue

Our project has multiple variations of english translations, with en-NZ as fallback language and a number of alternative
variants such as catalogue vs catalog for AU and US. The fallback english supposed to have all the translations 
and other languages just have a few country-specific translations.

Lint displaying
`warning  'announcements.testNz' does not exist in localization message resources @intlify/vue-i18n/no-missing-keys`
for the message which is available in fallback locale.

This seems to be caused by the `findMissingPath` simply looking only in last locale (this was not the case
with `@intlify/eslint-plugin-vue-i18n` 1.0.1).

## Workaround
Either in package.json or in .eslintrc.js update `eslintConfig` to have single fallback locale, instead of a pattern match:
```
    "settings": {
      "vue-i18n": {
        "localeDir": "./src/locales/en-NZ.json"
      }
    },
```

## Project setup

```
npm install
npm run lint
```

