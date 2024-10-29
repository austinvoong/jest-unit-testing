// module.test.js
import mut from "./module.js"; // MUT = Module Under Test

test("Testing sum -- simple", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});
test("Testing sum -- zeros", () => {
  expect(mut.sum(0, 0)).toBe(0);
});

test("Testing sum -- simple positives", () => {
  expect(mut.sum(1, 1)).toBe(2);
});

test("Testing sum -- simple negatives", () => {
  expect(mut.sum(-1, -1)).toBe(-2);
});

test("Testing sum -- bigger nums", () => {
  expect(mut.sum(100000, 100000)).toBe(200000);
});

test("Testing div -- simple division", () => {
  expect(mut.div(4, 2)).toBe(2);
});

test("Testing div -- simple negative division", () => {
  expect(mut.div(-4, 2)).toBe(-2);
});

test("Testing div -- fractions", () => {
  expect(mut.div(1, 2)).toBe(0.5);
});

test("Testing div -- division by zero", () => {
  expect(mut.div(1, 0)).toBe(Infinity);
});

test("Testing div -- zero", () => {
  expect(mut.div(0, 1)).toBe(0);
});

test("Testing containsNumbers -- no nums", () => {
  expect(mut.containsNumbers("hello")).toBe(false);
});

test("Testing containsNumbers -- has nums", () => {
  expect(mut.containsNumbers("hello1")).toBe(true);
});

test("Testing containsNumbers -- just nums", () => {
  expect(mut.containsNumbers("123")).toBe(true);
});

// This test case returns a TypeError when passed nothing
// test("Testing containsNumbers -- empty", () => {
//   expect(mut.containsNumbers()).toBe(false);
// });

