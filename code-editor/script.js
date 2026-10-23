const elHtml = document.querySelector("#html-code")
const elCss = document.querySelector("#css-code")
const elJs = document.querySelector("#js-code")
const elOutput = document.querySelector("#output")

// Starting code shown in the editors
elHtml.value = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>

  <h1>Hello World!</h1>
  <button>Click</button>

</body>
</html>`

elCss.value = `
button {
  background-color: dodgerblue;
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 6px;
  font-weight: 900;
}`

elJs.value = `
const elBtn = document.querySelector("button")

elBtn.addEventListener("click", function(evt) {
  evt.preventDefault()

  alert("Click bosildi Boom 💥")
})`

// Put HTML + CSS + JS together and show it in the iframe
function run() {
  elOutput.srcdoc =
    elHtml.value +
    "<style>" + elCss.value + "</style>" +
    "<script>" + elJs.value + "</scr" + "ipt>"
}

// Update the output a moment after the user stops typing
let timer

function runLater() {
  clearTimeout(timer)
  timer = setTimeout(run, 500)
}

// Pressing Tab inside an editor adds 2 spaces instead of leaving the box
function insertTab(evt) {
  if (evt.key !== "Tab") return

  evt.preventDefault()

  const el = evt.target
  const start = el.selectionStart

  el.value = el.value.slice(0, start) + "  " + el.value.slice(el.selectionEnd)
  el.selectionStart = el.selectionEnd = start + 2

  runLater()
}

for (const el of [elHtml, elCss, elJs]) {
  el.addEventListener("input", runLater)
  el.addEventListener("keydown", insertTab)
}

run()
