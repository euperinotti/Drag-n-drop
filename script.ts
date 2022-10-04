document.querySelector('neutralArea')?.addEventListener('click', (e) => {
    
    // .target é usado para descobrir qual elemento (e) foi clicado
    // pelo usuário
    e.target;

    // enquanto isso, o currentTarget tem basicamente a mesma finalidade porém ele exibe
    // o elemento que possui o evento de click
})

document.querySelectorAll('.item')?.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

function dragStart(e: any){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e: any){
    e.currentTarget.classList.remove('dragging');
}