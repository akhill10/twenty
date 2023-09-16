import { RuleTester } from "@typescript-eslint/rule-tester";
import noHardcodedColorsRule from "../rules/no-hardcoded-colors";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run("no-hardcoded-colors", noHardcodedColorsRule, {
    valid: [
      {
        code: "const Wrapper = styled.div`display: flex;align-items: center;background-color: ${lightTheme.color.yellow};`",
      },
      {
        code: "const Wrapper = styled.div`display: flex;align-items: center;background-color: ${darkTheme.color.red};`",
      }
    ], 
    invalid: [
      {
        code: "const Wrapper = styled.div`display: flex;align-items: center;background-color: #FBD603;`",
        errors: [
          {
            messageId: "noHardcodedColors",
          }
        ]
      }
    ]
  })