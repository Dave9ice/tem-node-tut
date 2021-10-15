const os = require('os');

const user = os.userInfo()
console.log(user)

console.log(`the computer has been up for ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    freeMem: os.freemem(),
    release: os.release(),
    totalMem: os.totalmem(),
}

console.log(currentOs)