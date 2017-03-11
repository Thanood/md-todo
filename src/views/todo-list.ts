import { AddTodoModal } from "../resources/elements/modals/add-todo-modal";
import { Todo } from "../models/todo";

export class TodoList {
  addTodoModal: AddTodoModal;
  todos: Todo[] = [];

  addTodo() {
    this.addTodoModal.open();
  }

  saveTodo(todo: Todo) {
    console.log('saveTodo', todo);
    this.todos.push(todo);
  }
}
