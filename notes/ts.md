1 - add empty `tsconfig.json`
2 - `npm install --save-dev typescript @types/react @types/node`
3 - tsconfig is populated by next, need to be revised
  "allowJs":true            - was
  "strict" :false           - change to true
  "strictNullChecks": true, - add
  will save from a lot of runtime issues
