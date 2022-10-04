"use strict";
var _a, _b, _c;
(_a = document.querySelector('neutralArea')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    e.target;
});
(_b = document.querySelectorAll('.area')) === null || _b === void 0 ? void 0 : _b.forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});
(_c = document.querySelectorAll('.item')) === null || _c === void 0 ? void 0 : _c.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}
function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
}
function drop(e) {
    e.currentTarget.classList.remove('hover');
    if (e.currentTarget.querySelector('.item') == null) {
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
    }
}
