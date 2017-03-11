import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.map([
      { route: '', redirect: 'all' },
      { route: 'all', name: 'all', moduleId: 'views/todo-list', title: 'all', nav: true }
    ]);
  }
}
