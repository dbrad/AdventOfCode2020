/** @type HTMLDivElement*/
export const listElement = document.querySelector("#list");

/** @type HTMLDivElement*/
export const consoleOutput = document.querySelector("#output");

/** @type HTMLInputElement*/
export const consoleInput = document.querySelector("#console input");

/** @type HTMLSpanElement*/
export const consoleInputCursor = document.querySelector("#input-cursor");

/** @type HTMLDivElement*/
export const dayElement = document.querySelector("#day");

/** @type HTMLDivElement*/
export const consoleElement = document.querySelector("#console");


const dayNumber = 9;
const days = [...Array(dayNumber).keys()];

function clearConsole()
{
  while (consoleOutput.firstChild)
  {
    consoleOutput.removeChild(consoleOutput.firstChild);
  }
}

async function loadFile(filename, targetElement)
{
  const pre = document.querySelector(targetElement);
  pre.classList.remove("hidden");
  pre.classList.add("hidden");
  const runBtn = pre.previousElementSibling.querySelector("span.button");

  const response = await fetch(filename);
  if (!response.ok)
  {
    pre.innerHTML = "File Not Found";
    runBtn.style.display = "none";
    runBtn.onclick = null;
    return;
  }
  const fileContents = await response.text();
  const formatted = fileContents.replace(/[<]/g, "&lt;").replace(/[>]/g, "&gt;");
  const lines = formatted.split("\n");
  const data = [];
  for (const line of lines)
  {
    data.push(`<code>${ line }</code>`);
  }
  pre.innerHTML = data.join("");

  let { main } = await import(filename);
  runBtn.onclick = (ev) =>
  {
    ev.stopPropagation();
    ev.preventDefault();
    clearConsole();
    log(`Running '${ filename }'`);
    main();
    log(`&nbsp;`);
  };
}

async function openDay(day)
{
  history.pushState({ day: day }, `Day ${ (day + "").padStart(2, "0") }`, `?day=${ day }`);
  listElement.style.display = "none";
  dayElement.style.display = "block";

  const padDay = (day + "").padStart(2, "0");

  document.querySelector(`#day-label`).innerHTML = `Day ${ padDay }`;
  await loadFile(`/Day${ padDay }/Part01/main.js`, `#part-1 .code-pre`);
  await loadFile(`/Day${ padDay }/Part01/tests.js`, `#part-1 .tests-pre`);

  await loadFile(`/Day${ padDay }/Part02/main.js`, `#part-2 .code-pre`);
  await loadFile(`/Day${ padDay }/Part02/tests.js`, `#part-2 .tests-pre`);
}

window.addEventListener("popstate", async (event) =>
{
  if (event.state == null)
  {
    listElement.style.display = "grid";
    dayElement.style.display = "none";
  } else
  {
    await openDay(event.state.day);
  }
});

window.addEventListener("load", async () =>
{
  for (let day of days)
  {
    const dayLink = document.createElement("div");
    dayLink.classList.add("button");
    dayLink.innerHTML = `Day ${ (day + 1 + "").padStart(2, "0") }`;
    dayLink.onclick = async () => { await openDay(day + 1); };
    listElement.appendChild(dayLink);
  }

  // consoleElement.addEventListener("click", () =>
  // {
  //   consoleInput.focus();
  //   consoleInputCursor.classList.add("blink");
  // });

  /**@type {NodeListOf<HTMLDivElement>} */
  const codeHeaders = document.querySelectorAll(".code-header");
  for (const codeHeader of codeHeaders)
  {
    codeHeader.addEventListener("click", (ev) =>
    {
      if (codeHeader.nextElementSibling.classList.contains("hidden"))
      {
        codeHeader.nextElementSibling.classList.remove("hidden")
      } else
      {
        codeHeader.nextElementSibling.classList.add("hidden")
      }
    });
  }

  consoleInput.addEventListener("blur", () =>
  {
    consoleInputCursor.classList.remove("blink");
  });

  log("Welcome to Advent of Code 2020");
  const params = new URLSearchParams(window.location.search)
  if (params.has("day"))
  {
    const day = parseInt((params.get("day")));
    openDay(day);
  }
});

export function log(...messages)
{
  for (const message of messages)
  {
    const li = document.createElement("span");
    li.innerHTML = message;
    consoleOutput.appendChild(li);
  }
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

console.log = log;
console.error = log;
console.warn = log;
window.onerror = function (message, source, lineno, colno, error)
{
  log(`${ source } (${ lineno }): ${ message }`);
}