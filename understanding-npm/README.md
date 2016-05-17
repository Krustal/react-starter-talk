NPM resolves modules by first looking for a `node_modules` directory in the
current directory. If it finds it, it looks for the module in that directory. If
it doesn't find it, it goes up one directory and looks for `node_modules` again.
It continues going up the directory structure until it gets to global.

From this directory run node and type:

```
var test = require('test_module');
test // => 1
```

Exit with ctrl-D

Now move into the directory `deeper` and start node again.

```
var test = require('test_module');
test // => penguins
```
