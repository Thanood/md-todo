import { autoinject, TaskQueue } from 'aurelia-framework';
import { AddTodoModal } from "../resources/elements/modals/add-todo-modal";
import { StorageService } from '../resources/services/storage/storage-service';
import { Todo } from "../models/todo";

@autoinject()
export class TodoList {
  addTodoModal: AddTodoModal;
  bottomModal: any;
  tapTarget: any;
  todos: Todo[] = [];

  editTodo: Todo;

  constructor(private storage: StorageService, private taskQueue: TaskQueue) { }

  attached() {
    if (this.storage.get('tapTargetDisplayed') !== true) {
      this.taskQueue.queueTask(() => {
        this.tapTarget.open();
        this.storage.set('tapTargetDisplayed', true);
      });
    }
    const todos = this.storage.get('todos');
    if (todos) {
      this.todos = todos;
    }
  }

  addTodo() {
    this.addTodoModal.open();
  }

  openBottomModal(todo) {
    this.editTodo = todo;
    this.bottomModal.open();
  }

  saveTodo(todo: Todo) {
    console.log('saveTodo', todo);
    this.todos.push(todo);
    this.storage.set('todos', this.todos);
  }
}
