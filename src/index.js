
import './styles.css';

import {  TodoList } from './classes'
import { crearTodo } from './js/componentes';
import { conteoPendi } from './js/componentes'

export const todoList = new TodoList();

// console.log( todoList.todos );

// todoList.todos.forEach( todo => crearTodo( todo ));
/* cuando tenemos una funcion como esta, donde el argumento
   que queremos enviar es el unico argumento que mandan a otra funcion o metodo
   que tengamos podemos perfectamente oviar poner ese todo funcion de
   flecha y solo poner la funcion sin el argumento, que es lo mismo*/
todoList.todos.forEach( crearTodo );
// todoList.nuevoTodo( tarea );

// tarea.completado = true;

// console.log( todoList );

// crearTodo( tarea )


// localStorage.setItem( 'myKey', 'ABC456');
// sessionStorage.setItem( 'mykey', 'ABC456');

// todoList.nuevoTodo( newTodo );

todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();
console.log('todos', todoList.todos);


conteoPendi();
