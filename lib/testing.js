import { log } from "../app.js";

export function test(description, testCase)
{
  log(`TEST: <i>${ description }</i>`);
  try
  {
    testCase();
    log(`<span class="pass">&check; TEST PASSED</span>`);
  }
  catch (err)
  {
    log(`&nbsp;&nbsp;${ err }`);
    log(`<span class="fail">&cross; TEST FAILED</span>`);
  }
  finally
  {
    log("&nbsp;");
  }
}

export function assertEquals(left, right)
{
  let result = left === right;
  if (!result)
  {
    throw `<span class="fail">&cross; ASSERTION FAILED</span> Expected ${ right }, was ${ left }.`;
  }
  return result;
}