const botrix_ = require('../src/botrix');

var botrix = new botrix_();


(async function ()  {
    console.log(await botrix.getQueue())
})();