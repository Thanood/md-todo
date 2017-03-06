class Todo {
  done: boolean;
  title: string;
}

export class App {
  addTodoModal: any;
  keepModalOpen = false;
  message = 'Hello World!';
  newTodo = {
    title: ''
  }
  todos: Todo[] = [];

  addTodo() {
    this.addTodoModal.open();
  }

  saveTodo() {
    this.todos.push({ done: false, title: this.newTodo.title });
    this.newTodo.title = '';
    if (!this.keepModalOpen) {
      this.addTodoModal.close();
    }
  }
}
