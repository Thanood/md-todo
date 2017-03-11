import { MdModal } from 'aurelia-materialize-bridge';
import { DOM } from "aurelia-pal";
import { inject } from "aurelia-framework";

@inject(Element)
export class AddTodoModal {
  keepOpen = false;
  modal: MdModal;
  newTodo = {
    done: false,
    title: ''
  }

  constructor(private element: Element) { }

  open() {
    this.modal.open();
  }

  saveTodo() {
    const event = DOM.createCustomEvent('todo-added', {
      bubbles: true,
      detail: {...this.newTodo}
    });
    this.element.dispatchEvent(event);
    this.newTodo.title = '';
    if (!this.keepOpen) {
      this.modal.close();
    }
  }
}
