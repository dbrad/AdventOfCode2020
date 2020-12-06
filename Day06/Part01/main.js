import { assertEquals } from "../../lib/testing.js";
import { input } from "./input.js";
import { log } from "../../app.js";

export function countQuestions(answer)
{
  answer = answer.replace(/\n/g, "");
  const questions = new Set();
  for (const question of answer)
  {
    questions.add(question);
  }
  return questions.size;
}

export function sumAllQuestions(input)
{
  const answers = input.split("\n\n");
  let result = 0;
  for (const answer of answers)
  {
    result += countQuestions(answer);
  }
  return result;
}

export function main()
{
  log(`Input Result: ${ sumAllQuestions(input) }`);
}