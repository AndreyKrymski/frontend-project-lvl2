import { readFileSync } from "fs";
import genDiff from "../src/index.js";

const expectedResults = [
  { format: "stylish", expected: "__fixtures__/resultStylish.txt" },
  { format: "plain", expected: "__fixtures__/resultPlain.txt" },
  //{ format: "json", expected: "resultStylish.txt" },
];

const files1 = [
  "__fixtures__/file1.json",
  // "__fixtures__/file1.yaml"
];
const files2 = [
  "__fixtures__/file2.json",
  // "__fixtures__/file2.yaml"
];

const f = (a, b) => [].concat(...a.map((d) => b.map((e) => [].concat(d, e))));
const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

const combinations = cartesian(expectedResults, files1, files2).map((c) => ({
  format: c[0].format,
  expected: c[0].expected,
  file1: c[1],
  file2: c[2],
}));

describe("my tests", () => {
  test.each(combinations)("genDiff", ({ format, expected, file1, file2 }) => {
    const expectedText = readFileSync(expected, "utf-8");
    expect(genDiff(file1, file2, format)).toEqual(expectedText);
  });
});
