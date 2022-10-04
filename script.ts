document.querySelector('neutralArea')?.addEventListener('click', (e) => {
    
    // .target é usado para descobrir qual elemento (e) foi clicado
    // pelo usuário
    e.target;

    // enquanto isso, o currentTarget tem basicamente a mesma finalidade porém ele exibe
    // o elemento que possui o evento de click
});

document.querySelectorAll('.area')?.forEach(area => {

    // Sempre que for necessário criar um evento de drag and drop, é necessário
    // ter essas 3 funções, drag over, drag leave e drop

    area.addEventListener('dragover', dragOver); // Arrastar um elemento para dentro
    area.addEventListener('dragleave', dragLeave); // Arrastar um elemento para fora
    area.addEventListener('drop', drop); // Soltar um elemento
});

document.querySelectorAll('.item')?.forEach(item => {

    // comeco do evento de arrastar
    item.addEventListener('dragstart', dragStart);

    // final do evento de arrastar
    item.addEventListener('dragend', dragEnd);
});

function dragStart(e: any){
    e.currentTarget.classList.add('dragging');
}

function dragEnd(e: any){
    e.currentTarget.classList.remove('dragging');
}


 // Funcções relacionadas a area do elemento
 


function dragOver(e: any){

    // Permite que o elemento seja solto em outro lugar do html
    e.preventDefault();
    e.currentTarget.classList.add('hover');
}

function dragLeave(e: any){
    e.currentTarget.classList.remove('hover');
}

function drop(e: any){
    e.currentTarget.classList.remove('hover');

    if(e.currentTarget.querySelector('.item') == null){
        let dragItem = document.querySelector('.item.dragging') as HTMLElement;
        e.currentTarget.appendChild(dragItem);
    }
}