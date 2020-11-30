# Official Botrix API

This is the documention for the API for the Botrix bot list.

```
npm -i bortix-npm
```

## Base URL:
(AS OF 30/11/2020) 
The base url to botrix API is:
```
https://botrix.cc/api/v1/
```

This can further be followed up by:
```
https://botrix.cc/api/v1/bot/:botID
https://botrix.cc/api/v1/server/:serverID
```

### Function: `getUser();`

To use this function, it can be used two ways:

In a JS application:

```js
const Botrix = require('botrix-npm');

user();

async function user() {
const user = await Botrix.getUser('534232491360387082');

return console.log(user);
}

```

or if you would like to implement the function into a Discord bot you can do:

```js
const Botrix = require('botrix-npm');

module.exports = {
    name: 'getuser',
    async run (client, message, args) {
        const user = message.mentions.users.first();
        
        const userData = await Botrix.getUser(user);
        
        console.log(userData);
    }
}
```

### Function: `getBot();`

To use this function, it can be used two ways:

In a JS application:

```js
const Botrix = require('botrix-npm');

bot();

async function bot() {
const bot = await Botrix.getBot('534232491360387082');

return console.log(bot);
}

```

or if you would like to implement the function into a Discord bot you can do:

```js
const Botrix = require('botrix-npm');

module.exports = {
    name: 'getuser',
    async run (client, message, args) {
        const bot = message.mentions.users.first();
        
        const botData = await Botrix.getBot(bot);
        
        console.log(botData);
    }
}
```

### Function: `getQueue();`

To use this function, it can be used two ways:

In a JS application:

```js
const Botrix = require('botrix-npm');

queue();

async function user() {
const user = await Botrix.getQueue();

return console.log(user);
}

```

or if you would like to implement `botrix-npm` into a Discord bot you can do:

```js
const Botrix = require('botrix-npm');

module.exports = {
    name: 'getuser',
    async run (client, message, args) {
        const queueData = await Botrix.getQueue();
        
        console.log(queueData);
    }
}
```

### Links:

Botrix Website: https://botrix.cc/
NPM Package: https://npmjs.org/package/botrix-npm/
