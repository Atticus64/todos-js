

export class Todo {

    static $conteo = 0;

    static fromJson({tarea, id, completado, creado}){
        const temTodo = new Todo( tarea );
        temTodo.id = id;
        Todo.$conteo += 1;
        temTodo.completado = completado;
        temTodo.creado = creado;
        return temTodo;
    }

    constructor( tarea ) {
        this.tarea = tarea;
        this.id = new Date().getTime(); // 123156451
        this.completado = false;
        this.creado = new Date();
        this.$conteo += 1;
    }

    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}






