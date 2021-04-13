async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('settimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')

// 执行整段代码，遇到 console.log('script start') 直接打印结果，输出 script start
// 遇到定时器了，它是宏任务，先放着不执行
// 遇到 async1()，执行 async1 函数，先打印 async1 start，下面遇到await怎么办？先执行 async2，打印 async2，然后阻塞下面代码（即加入微任务列表），跳出去执行同步代码
// 跳到 new Promise 这里，直接执行，打印 promise1，下面遇到 .then()，它是微任务，放到微任务列表等待执行
// 最后一行直接打印 script end，现在同步代码执行完了，开始执行微任务，即 await下面的代码，打印 async1 end
// 继续执行下一个微任务，即执行 then 的回调，打印 promise2
// 上一个宏任务所有事都做完了，开始下一个宏任务，就是定时器，打印 settimeout

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// settimeout