const ulElement = document.getElementById('todo-container');
const inputEl = document.getElementById('todo-input');
const deletButton = document.querySelector('.delete-btn')

function addTodo() {
    const time = new Date();
    const dayTime = time.toLocaleDateString('us-Us', {
        day: "2-digit",
        year: "2-digit",
        month: "short",
    });
    const hoursTime = time.getHours().toString();
    const minuteTime = time.getMinutes().toString();
    const inputValue = inputEl.value
    if (!inputValue.trim()) {
        alert('Inputga biror narsa yozing')
    };

    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    const deletBtn = document.createElement('button');
    const div = document.createElement('div')
    const span = document.createElement('span');


    checkBox.type = 'checkbox';
    checkBox.classList.add('checkbox-input')
    deletBtn.classList.add("delete-btn");
    div.classList.add("div-el");
    deletBtn.innerHTML = 'Delete';
    span.innerHTML = `
    ${dayTime} ${hoursTime}:${minuteTime}
    `;

    checkBox.addEventListener('change', function () {
        if (checkBox.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    });

    deletBtn.addEventListener('click', function (e) {

        e.target.parentElement.remove();


    });

    div.append(checkBox, inputValue)
    li.append(div, span, deletBtn)
    ulElement.appendChild(li)
    inputEl.value = ""
}
