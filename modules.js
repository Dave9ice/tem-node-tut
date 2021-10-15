const names = require('./1st-moduleName')
const sayHi = require('./2nd-moduleUtility')
const data = require('./alternativeModule')
require('./moduleExport2')


console.log(names);
console.log(sayHi);
console.log(data)
sayHi('susan')
sayHi(names.peter)
sayHi(names.john)