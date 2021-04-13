// Function.prototype.myBind = function (context) {
//     // 判断调用对象是否为函数
//     if (typeof this !== "function") {
//         throw new TypeError("Error");
//     }

//     // 获取参数
//     const args = [...arguments].slice(1),
//           fn = this;

//     return function Fn() {

//         // 根据调用方式，传入不同绑定值
//         return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments)); 
//     }
// }

// call
Function.prototype.myCall = function(context, ...args) {
  const ctx = context || window
  ctx.fn = this
  const result = eval('ctx.fn(...args)')
  delete ctx.fn
  return result
}

// apply
Function.prototype.myApply = function (context, args) {
  const ctx = context || window
  ctx.fn = this
  const res = eval('context.fn(...args)')
  delete ctx.fn
  return res
}

// bind
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') throw new Error('this must be a function')
  let self = this
  let res = function () {
    // 这里如果执行可能还会有参数，需要和之前的参数合并 Array.prototype.slice.call(arguments)
    return self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)))
  }
  // 如果原型上有方法
  if (this.prototype) {
    res.prototype = Object.create(this.prototype)
  }
  return res
}
