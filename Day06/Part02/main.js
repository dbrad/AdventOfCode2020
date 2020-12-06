import { assertEquals } from "../../lib/testing.js";
import { input } from "./input.js";
import { log } from "../../app.js";

/**
 * 
 * @param {string} answer 
 */
export function countQuestions(answer)
{
  const numberOfPeople = answer.split("\n").length;
  answer = answer.replace(/\n/g, "");
  const questions = new Map();
  for (const question of answer)
  {
    if (questions.has(question))
    {
      questions.set(question, questions.get(question) + 1);
    }
    else
    {
      questions.set(question, 1);
    }
  }
  let result = 0;
  for (const [q, count] of questions)
  {
    result += count === numberOfPeople ? 1 : 0;
  }
  return result;
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