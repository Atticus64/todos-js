import { conteoPendi, crearTodo } from "../js/componentes";
import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        Todo.$conteo += 1;
        conteoPendi();
        this.guardarLocalStorage();
    }

    eliminarTodo( id , completado){
        this.todos = this.todos.filter( todo => todo.id != id );

        let compl = this.todos.filter( todo => todo.completado != false );
        if (compl.length > 0) {
            Todo.$conteo = this.todos.length - compl.length;
        } else {
            Todo.$conteo = this.todos.length;
        }
        // va a regresar un nuevo arreglo con todos los todos diferentes al que seleccione
        // sea diferente a este id 
        conteoPendi();
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for ( const todo of this.todos){
        
             if ( todo.id == id ){
                todo.completado = !todo.completado;
                conteoPendi();
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );
    }

    cargarLocalStorage(){

        this.todos = ( localStorage.getItem('todo') )
        ?  this.todos = JSON.parse(localStorage.getItem('todo')) 
        : this.todos = [];

        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
        let lng = this.todos.filter(todo => todo.completado).length
        Todo.$conteo = Todo.$conteo - lng
        this.todos = this.todos.map( Todo.fromJson );
    
    }


}





