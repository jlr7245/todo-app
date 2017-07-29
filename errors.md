## Who loves errors? WE love errors!!

1. Forgot to import path

```
app.set('views', path.join(__dirname, 'views'));
                 ^

ReferenceError: path is not defined
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/app.js:10:18)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Function.Module.runMain (module.js:605:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:575:3
```

2. Pointed to the boilerplate wrong

```
Error: ENOENT: no such file or directory, open '/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/partials/boilerplate.ejs'
    at Object.fs.openSync (fs.js:651:18)
    at Object.fs.readFileSync [as fileLoader] (fs.js:553:33)
    at fileLoader (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:220:18)
    at includeSource (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:257:14)
    at /Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:604:26
    at Array.forEach (native)
    at Template.generateSource (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:580:15)
    at Template.compile (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:483:12)
    at Object.compile (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:338:16)
    at handleCache (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/ejs/lib/ejs.js:181:18)
```

3. Pointed to my render middleware wrong

```
Error: Cannot find module 'services/render'
    at Function.Module._resolveFilename (module.js:485:15)
    at Function.Module._load (module.js:437:25)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/app.js:18:16)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
```

4. Had to fix something in my render middleware

```
TypeError: Cannot read property 'path' of undefined
    at module.exports (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/services/render.js:2:29)
    at Layer.handle [as handle_request] (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/layer.js:95:5)
    at /Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/index.js:281:22
    at Function.process_params (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/index.js:335:12)
    at next (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/index.js:275:10)
    at SendStream.error (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/serve-static/index.js:121:7)
    at emitOne (events.js:115:13)
```
5. Put my dang views in services instead of in views

```
Error: Failed to lookup view "auth/login" in views directory "/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/views"
    at Function.render (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/application.js:580:17)
    at ServerResponse.render (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/response.js:971:7)
    at module.exports (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/services/render.js:8:7)
    at Layer.handle [as handle_request] (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/route.js:137:13)
    at authController.login (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/controllers/auth-controller.js:8:3)
    at Layer.handle [as handle_request] (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/route.js:137:13)
    at Route.dispatch (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/route.js:112:3)
    at Layer.handle [as handle_request] (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/node_modules/express/lib/router/layer.js:95:5)
```

6. typo 🙄

```
/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/services/user/user-helpers.js:20
  loginRequired,ß
                ^

ReferenceError: ß is not defined
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/services/user/user-helpers.js:20:17)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/routes/user-routes.js:5:21)
    at Module._compile (module.js:569:30)
```

7. Forgot to import passport

```
/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/routes/user-routes.js:27
  passport.authenticate('local', {
  ^

ReferenceError: passport is not defined
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/routes/user-routes.js:27:3)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/app.js:40:20)
    at Module._compile (module.js:569:30)
```

8. Had to fix my config.js

```
WARNING: Creating a duplicate database object for the same connection.
    at module.exports (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/db/config.js:11:12)
    at Object.<anonymous> (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/models/todo.js:1:97)
```

9. Had to instantiate res.locals.data

```
TypeError: Cannot set property 'todos' of undefined
    at Todo.findUserTodos.then.todos (/Users/JLR/GA_TEACH/DELOREAN/UNIT02/HW/todo-app/controllers/todos-controller.js:13:29)
    at <anonymous>
    at process._tickCallback (internal/process/next_tick.js:169:7)
(node:72677) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): ReferenceError: res is not defined
(node:72677) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

10. Forgot RETURNING *

```
QueryResultError {
    code: queryResultErrorCode.noData
    message: "No data returned from the query."
    received: 0
    query: "
    INSERT INTO todos
    (user_id, title, description)
    VALUES (1, 'Finish this todo app', 'categories, styling, fix columns')
  "
}
(node:72769) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): ReferenceError: res is not defined
(node:72769) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```