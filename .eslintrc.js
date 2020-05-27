// https://medium.com/@feralamillo/create-react-app-typescript-eslint-and-prettier-699277b0b913

// wip -- might add/change more later on.
module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: ["react-app"],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "settings": {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true
        }
      }
    },
    "rules": {
      // arrow functions:
      "arrow-parens": ["error", "always"],
      // promises -- this one requires another plugin:
    //   "no-floating-promises": ["error"],
      // single quotes:
      "jsx-quotes": ["error", "prefer-single"],
      "@typescript-eslint/quotes": ["error", "single", {
        "allowTemplateLiterals": true,
        "avoidEscape": true,
      }],
      "semi": ["error", "always"],
    //   "object-curly-spacing": ["warn", "always"],
    //   "no-unused-vars": [
        // "warn",
    //     {
    //       "vars": "all",
    //       "args": "none"
    //     }
    //   ],
    //   "@typescript-eslint/no-unused-vars": [
    //     "warn",
    //     {
    //       "vars": "all",
    //       "args": "none"
    //     }
    //   ],
    //   "@typescript-eslint/no-explicit-any": [
    //     "error",
    //     {
    //       "ignoreRestArgs": true
    //     }
    //   ],
    //   "max-len": [
    //     "warn",
    //     {
    //       "code": 80,
    //       "ignoreStrings": true,
    //       "ignoreTemplateLiterals": true,
    //       "ignoreComments": true
    //     }
    //   ],
    //   "no-plusplus": [
    //     "error",
    //     {
    //       "allowForLoopAfterthoughts": true
    //     }
    //   ],
    //   "react/jsx-key": "error",
    //   "import/no-extraneous-dependencies": [
    //     "error",
    //     {
    //       "devDependencies": [
    //         "**/*.test.js",
    //         "**/*.test.jsx",
    //         "**/*.test.ts",
    //         "**/*.test.tsx",
    //         "src/tests/**/*"
    //       ],
    //       "packageDir": "./"
    //     }
    //   ],
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/jsx-boolean-value": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "off",
      "react/destructuring-assignment": "off"
    }
  }