const info = require('./information');
const cowsay = require("cowsay")
console.log(info, cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));
