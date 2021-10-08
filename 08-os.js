const os = require('os')

// info about current user
const user = os.userInfo()

// console.log(user)

const currentOS = {
    type: os.type(),
    release: os.release(),
    total: os.totalmem(),
    free: os.freemem()
}

console.log(currentOS);