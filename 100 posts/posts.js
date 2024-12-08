
const elList = document.querySelector(".list")

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => renderData(json));

  function renderData(info){
for (const item of info) {
    const newLi = document.createElement("li")
    const newTitle = document.createElement("h4")
    const newText = document.createElement("p")
    const newBox = document.createElement("div")
    const newImg = document.createElement("p")
    
    newTitle.textContent = item.title
    newText.textContent = item.body

    newImg.textContent = "🚘"

    newBox.appendChild(newTitle)
    newBox.appendChild(newText)
    newLi.appendChild(newImg)
    newLi.appendChild(newBox)
    elList.appendChild(newLi)
    console.log(newLi);
    
}
  }