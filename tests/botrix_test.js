const botrix_ = require('../src/botrix');

var botrix = new botrix_();


(async function ()  {
    console.log(await botrix.getBot("416451977380364288"))
})();