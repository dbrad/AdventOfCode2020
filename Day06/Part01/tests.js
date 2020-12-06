import { assertEquals, test } from "../../lib/testing.js";
import { countQuestions, sumAllQuestions } from "./main.js";

export function main()
{
  test("number of questions answered should be 6", () =>
  {
    const input = `abcx
abcy
abcz`;
    return assertEquals(countQuestions(input), 6);
  });

  test("number of questions answered should be 3", () =>
  {
    const input = `abc`;
    return assertEquals(countQuestions(input), 3);
  });

  test("number of questions answered should be 3", () =>
  {
    const input = `a
b
c`;
    return assertEquals(countQuestions(input), 3);
  });

  test("number of questions answered should be 3", () =>
  {
    const input = `ab
ac`;
    return assertEquals(countQuestions(input), 3);
  });

  test("number of questions answered should be 1", () =>
  {
    const input = `a
a
a
a`;
    return assertEquals(countQuestions(input), 1);
  });

  test("number of questions answered should be 1", () =>
  {
    const input = `b`;
    return assertEquals(countQuestions(input), 1);
  });

  test("sumr of questions answered should be 11", () =>
  {
    const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    return assertEquals(sumAllQuestions(input), 11);
  });
}