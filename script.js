"use strict";
var _a, _b;
(_a = document.querySelector('neutralArea')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
    // .target é usado para descobrir qual elemento (e) foi clicado
    // pelo usuário
    e.target;
    // enquanto isso, o currentTarget tem basicamente a mesma finalidade porém ele exibe
    // o elemento que possui o evento de click
});
(_b = document.querySelectorAll('.item')) === null || _b === void 0 ? void 0 : _b.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});
function dragStart(e) {
    e.currentTarget.classList.add('dragging');
}
function dragEnd(e) {
    e.currentTarget.classList.remove('dragging');
}
