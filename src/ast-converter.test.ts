import * as ts from "typescript";
import { AstConverter } from "./ast-converter";
import { SourceCode } from "eslint";

function createProgram() {
  return ts.createProgram({
    rootNames: [],
    options: {
    },
  });
}

describe("AstConverter", () => {
  describe("#convertToESLintSourceCode", () => {
    it("should create ESLint SourceCode insntance from TypeScript sourcefile", () => {
      const astConverter = new AstConverter({ program: createProgram() });
      const sourceFile = ts.createSourceFile("test.ts", `const a = 1`, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS);
      const actual = astConverter.convertToESLintSourceCode(sourceFile, { });
      expect(actual).toBeInstanceOf(SourceCode);
    });
  });
});