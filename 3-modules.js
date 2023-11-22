// modules encapsulated code only share minimum
// every file in node is a module


const name = require('./4-names')
const util = require('./5-utils')
const data = require('./6-alternative')

require('./7-mind-grenade')

console.log(data);
util.sayHi('nick')
util.sayHi(name.john)
util.sayHi(name.peter)