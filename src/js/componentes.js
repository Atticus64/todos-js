
import { Todo } from "../classes";
import { todoList } from "../index"

// referencias en html

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnElimComp = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
const pendientes = document.querySelector('.todo-count');


export const conteoPendi = () => {
    // console.log(pendientes);
    pendientes.innerHTML = `<strong>${ Todo.$conteo }</strong> pendiente(s)`;
}


export const crearTodo = ( todo ) => {

    const htmlTodo =  `
    <li class="${ (todo.completado)? 'completed' : '' }" data-id="${ todo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ ( todo.completado )? 'checked' : '' }>
        <label> ${ todo.tarea } </label>    
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );


    return div.firstElementChild;
}


// Eventos
txtInput.addEventListener('keyup', (event) => {
    if( event.keyCode === 13 && txtInput.value.length > 0){

        const nuevoTodo = new Todo( txtInput.value );
        console.log( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );
        // console.log( todoList );
        crearTodo( nuevoTodo );
        txtInput.value = '';
    }
})

divTodoList.addEventListener( 'click', (event) => {
    const nElemento = event.target.localName; //label, input, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if ( nElemento.includes('input') ){ // click en checkbox ✔
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
        if ( todoElemento.classList.contains('completed') ){
            Todo.$conteo -= 1;
            conteoPendi();
        } else {
            Todo.$conteo += 1;
            conteoPendi();
        }

    }else if( nElemento.includes('button') ){ // click en eliminar ❌
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento ); // Otra forma de eliminar un elemento HTML
    }

});


btnElimComp.addEventListener( 'click', () => {
    todoList.eliminarCompletados();

    for( let i = divTodoList.children.length - 1; i >= 0; i--){

    const elem = divTodoList.children[i];

        if ( elem.classList.contains('completed') ){
            divTodoList.removeChild( elem );
        }


    }





});


ulFiltros.addEventListener('click', ( event ) => {
    const filtro = event.target.text;
    if( !filtro ){ return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children){

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){

            case 'Pendientes':
                if ( completado ){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if ( !completado ){
                    elemento.classList.add('hidden');
                }
                break;

        }

    }


})
