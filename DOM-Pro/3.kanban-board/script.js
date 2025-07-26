let draggedCard = null;

const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list');

for (const card of cards) {
    card.addEventListener('dragstart', dragStart);
    card.addEventListener('dragend', dragEnd);

    // Add dragenter/dragover to cards too for reordering
    card.addEventListener('dragover', cardDragOver);
    card.addEventListener('dragenter', cardDragEnter);
    card.addEventListener('dragleave', cardDragLeave);
    card.addEventListener('drop', cardDrop);
}

for (const list of lists) {
    list.addEventListener('dragover', dragOver);
    list.addEventListener('dragenter', dragEnter);
    list.addEventListener('dragleave', dragLeave);
    list.addEventListener('drop', listDrop);
}

function dragStart(e) {
    draggedCard = this;
    e.dataTransfer.setData('text/plain', this.id);
    setTimeout(() => this.style.display = 'none', 0);
}

function dragEnd() {
    draggedCard.style.display = 'block';
    draggedCard = null;
    document.querySelectorAll('.over').forEach(el => el.classList.remove('over'));
}

function dragOver(e) {
    e.preventDefault(); // Allows drop
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}

function dragLeave(e) {
    this.classList.remove('over');
}

// 🔁 Reordering inside cards
function cardDragOver(e) {
    e.preventDefault();
}

function cardDragEnter(e) {
    e.preventDefault();
    this.classList.add('over');
}

function cardDragLeave(e) {
    this.classList.remove('over');
}

function cardDrop(e) {
    e.preventDefault();
    this.classList.remove('over');

    const list = this.parentElement;
    if (draggedCard !== this) {
        list.insertBefore(draggedCard, this); // Insert before hovered card
    }
}

// 📦 Drop on list (if not dropped on a card)
function listDrop(e) {
    const id = e.dataTransfer.getData('text/plain');
    const card = document.getElementById(id);

    if (!e.target.classList.contains('card')) {
        this.appendChild(card); // Append at end if dropped on empty area
    }

    this.classList.remove('over');
}
