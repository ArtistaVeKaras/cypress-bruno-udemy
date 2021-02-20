let promise = new Promise((resolve, reject) => {
    let a = 1 + 3
    if(a == 2) {
        resolve('Promise Fulfilled')
    } else {
        reject('Promise not fulfilled')
    }
})

promise.then((message) => {
    console.log(message + ', promise has passed!')
}).catch((message) => {
    console.log(message + ', promise has failed')
})