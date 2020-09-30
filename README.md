# The official package for the botrix API

## Useage

This is a simple example on how you can get the user object. [More info on user object](https://github.com/WindowsCmd/botrixApiDocs)
```js
const botrix_ = require('../src/botrix');

var botrix = new botrix_();


(async function ()  {
    console.log(await botrix.getUser("222042705285480448"))
})();
```

Get bot method 
```js
botrix.getBot("721013842200756276")
```

Get queue method.. Returns the queue of the current bots.
```js
botrix.getQueue()
```


