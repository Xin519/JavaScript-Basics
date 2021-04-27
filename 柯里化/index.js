// 实现柯里化其实就是把多个参数长度很分开来调用的意思，好处在于可以观测你参数调用的一个中间的过程，或者中间的变量。面试中常考的add(1, 2, 3)和add(1)(2)(3)就是这个问题

function curry(fn) {
    const finalLen = fn.length
    let args = [].slice.call(this,1)
    return function currying () {
    args = args.concat(Array.from(arguments))
    const len = args.length
    return len >= fn.length ? fn.apply(this, args) : currying
    }
}
