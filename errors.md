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