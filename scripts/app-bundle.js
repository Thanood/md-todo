var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "aurelia-i18n"], function (require, exports, aurelia_framework_1, aurelia_i18n_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(i18n) {
            this.i18n = i18n;
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Todos';
            config.map([
                { route: '', redirect: 'all' },
                { route: 'all', name: 'all', moduleId: 'views/todo-list', title: this.i18n.tr('nav.all'), nav: true }
            ]);
        };
        return App;
    }());
    App = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_i18n_1.I18N])
    ], App);
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "aurelia-i18n", "./environment"], function (require, exports, aurelia_i18n_1, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.use.plugin('aurelia-materialize-bridge', function (b) { return b.useAll(); });
        aurelia.use.plugin('aurelia-i18n', function (instance) {
            instance.i18next.use(aurelia_i18n_1.Backend.with(aurelia.loader));
            return instance.setup({
                backend: {
                    loadPath: '../locales/{{lng}}/{{ns}}.json',
                },
                lng: 'de',
                attributes: ['t', 'i18n'],
                fallbackLng: 'en',
                debug: false
            });
        });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('models/todo',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Todo = (function () {
        function Todo() {
        }
        return Todo;
    }());
    exports.Todo = Todo;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            './attributes/md-auto-focus',
            './elements/nav-bar',
            './elements/modals/add-todo-modal'
        ]);
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/todo-list',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TodoList = (function () {
        function TodoList(taskQueue) {
            this.taskQueue = taskQueue;
            this.todos = [];
        }
        TodoList.prototype.attached = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                _this.tapTarget.open();
            });
        };
        TodoList.prototype.addTodo = function () {
            this.addTodoModal.open();
        };
        TodoList.prototype.saveTodo = function (todo) {
            console.log('saveTodo', todo);
            this.todos.push(todo);
        };
        return TodoList;
    }());
    TodoList = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_framework_1.TaskQueue])
    ], TodoList);
    exports.TodoList = TodoList;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/attributes/md-auto-focus',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdAutoFocusCustomAttribute = (function () {
        function MdAutoFocusCustomAttribute(element, taskQueue) {
            this.element = element;
            this.taskQueue = taskQueue;
        }
        MdAutoFocusCustomAttribute.prototype.attached = function () {
            var _this = this;
            this.taskQueue.queueTask(function () {
                var inputs = _this.element.getElementsByTagName('input');
                if (inputs.length > 0) {
                    var input = inputs[0];
                    input.focus();
                    var label_1 = input.nextElementSibling;
                    if (label_1.nodeName === "LABEL") {
                        _this.taskQueue.queueTask(function () { label_1.classList.add("active"); });
                    }
                }
                else {
                    console.warn('No input element found for auto-focus');
                }
            });
        };
        return MdAutoFocusCustomAttribute;
    }());
    MdAutoFocusCustomAttribute = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [Element, aurelia_framework_1.TaskQueue])
    ], MdAutoFocusCustomAttribute);
    exports.MdAutoFocusCustomAttribute = MdAutoFocusCustomAttribute;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/nav-bar',["require", "exports", "aurelia-framework", "aurelia-i18n"], function (require, exports, aurelia_framework_1, aurelia_i18n_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NavBar = (function () {
        function NavBar(i18n) {
            this.i18n = i18n;
            this.languages = [
                { title: 'Deutsch', code: 'de' },
                { title: 'English', code: 'en' }
            ];
            this.language = this.languages[0];
        }
        NavBar.prototype.switchLanguage = function (languageCode) {
            this.language = this.languages.find(function (l) { return l.code === languageCode; }) || this.language;
            this.i18n.setLocale(languageCode);
        };
        return NavBar;
    }());
    __decorate([
        aurelia_framework_1.bindable(),
        __metadata("design:type", Object)
    ], NavBar.prototype, "title", void 0);
    NavBar = __decorate([
        aurelia_framework_1.autoinject(),
        __metadata("design:paramtypes", [aurelia_i18n_1.I18N])
    ], NavBar);
    exports.NavBar = NavBar;
});

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/modals/add-todo-modal',["require", "exports", "aurelia-pal", "aurelia-framework"], function (require, exports, aurelia_pal_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AddTodoModal = (function () {
        function AddTodoModal(element) {
            this.element = element;
            this.keepOpen = false;
            this.newTodo = {
                done: false,
                title: ''
            };
        }
        AddTodoModal.prototype.onReady = function ($event) {
            var nativeInput = this.input.querySelector('input');
            nativeInput.focus();
            nativeInput.nextElementSibling.classList.add('active');
        };
        AddTodoModal.prototype.open = function () {
            this.modal.open();
        };
        AddTodoModal.prototype.saveTodo = function () {
            var event = aurelia_pal_1.DOM.createCustomEvent('todo-added', {
                bubbles: true,
                detail: __assign({}, this.newTodo)
            });
            this.element.dispatchEvent(event);
            this.newTodo.title = '';
            if (!this.keepOpen) {
                this.modal.close();
            }
        };
        return AddTodoModal;
    }());
    AddTodoModal = __decorate([
        aurelia_framework_1.inject(Element),
        __metadata("design:paramtypes", [Element])
    ], AddTodoModal);
    exports.AddTodoModal = AddTodoModal;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./app.css\"></require>\n  <md-colors md-primary-color=\"#78909C\" md-accent-color=\"#FF80AB\"></md-colors>\n  <nav-bar i18n=\"[title]app.title\"></nav-bar>\n\n  <router-view></router-view>\n</template>\n"; });
define('text!app.css', ['module'], function(module) { module.exports = "html {\n  height: calc(100% - 64px); }\n\nbody {\n  height: 100%; }\n\n.todo-list md-checkbox {\n  position: relative;\n  top: 7px; }\n\n.todo-list .todo-title.done {\n  text-decoration: line-through; }\n\n.todo-list-placeholder {\n  color: #b3b3b3;\n  height: 100%;\n  justify-content: center; }\n"; });
define('text!views/todo-list.html', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"todo-list-placeholder valign-wrapper\" show.bind=\"todos.length === 0\">\r\n    <h2 class=\"valign\" i18n=\"todo.placeholder\"></h2>\r\n  </div>\r\n  <md-collection class=\"todo-list\" show.bind=\"todos.length > 0\">\r\n    <md-collection-item repeat.for=\"todo of todos\">\r\n      <md-checkbox md-checked.bind=\"todo.done\"></md-checkbox>\r\n      <span class=\"todo-title ${ todo.done ? 'done' : '' }\">${todo.title}</span>\r\n    </md-collection-item>\r\n  </md-collection>\r\n\r\n  <div class=\"fixed-action-btn\" style=\"bottom: 45px; right: 24px;\">\r\n    <a ref=\"tap\" click.delegate=\"addTodo()\" md-button=\"floating: true; large: true;\" md-tooltip=\"position: left; text: todo.add;\" md-waves=\"color: light; circle: true;\">\r\n      <i class=\"large material-icons\">add</i>\r\n    </a>\r\n  </div>\r\n\r\n  <md-tap-target md-ref.bind=\"tap\" view-model.ref=\"tapTarget\">\r\n    <h5 class=\"white-text\">Add a todo</h5>\r\n    <p class=\"white-text\" i18n=\"todo.placeholder\">xy</p>\r\n  </md-tap-target>\r\n\r\n  <add-todo-modal todo-added.delegate=\"saveTodo($event.detail)\" view-model.ref=\"addTodoModal\"></add-todo-modal>\r\n</template>\r\n"; });
define('text!resources/elements/nav-bar.css', ['module'], function(module) { module.exports = "nav-bar .nav-wrapper .brand-logo {\n  padding-left: 15px; }\n\nnav-bar .nav-wrapper .i18n-dropdown {\n  padding-right: 15px; }\n  nav-bar .nav-wrapper .i18n-dropdown span.material-icons {\n    position: relative;\n    top: 6px; }\n"; });
define('text!resources/elements/nav-bar.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"./nav-bar.css\"></require>\n  <md-navbar>\n    <a href=\"#/\" class=\"brand-logo\"><span>${title}</span></a>\n    <!--<ul class=\"hide-on-med-and-down right\">\n      <li md-waves><a>About</a></li>\n      <li md-waves><a>Installation</a></li>\n      <li md-waves><a>Project Status</a></li>\n    </ul>-->\n    <div class=\"i18n-dropdown right\">\n      <a md-button=\"flat: true;\" md-dropdown=\"ref.bind: i18nDropdown;\">${language.title}<span class=\"material-icons\">arrow_drop_down</span></a>\n      <ul ref=\"i18nDropdown\">\n        <li repeat.for=\"lang of languages\"><a click.delegate=\"switchLanguage(lang.code)\">${lang.title}</a></li>\n      </ul>\n    </div>\n  </md-navbar>\n</template>\n"; });
define('text!resources/elements/modals/add-todo-modal.html', ['module'], function(module) { module.exports = "<template>\r\n  <div md-modal md-on-modal-ready.delegate=\"onReady($event)\" md-modal.ref=\"modal\">\r\n    <div class=\"modal-content\">\r\n      <h4 t=\"todo.add\">Add a todo</h4>\r\n      <form submit.delegate=\"saveTodo()\">\r\n        <div>\r\n          <md-input ref=\"input\" t=\"[md-label]todo.modal.inputLabel\" md-label=\"put some text here\" md-value.bind=\"newTodo.title\"></md-input>\r\n        </div>\r\n      </form>\r\n      <div>\r\n        <md-checkbox md-checked.bind=\"keepOpen\"><span t=\"todo.modal.keepOpen\"></span></md-checkbox>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <a click.delegate=\"saveTodo()\" md-button=\"flat: true;\" md-waves=\"color: primary;\" class=\"modal-action primary-text\"><span t=\"todo.modal.add\"></span></a>\r\n      <a md-button=\"flat: true;\" md-waves=\"color: primary;\" class=\"modal-action modal-close\"><span t=\"todo.modal.close\"></span></a>\r\n    </div>\r\n  </div>\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map