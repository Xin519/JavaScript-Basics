// 寄生组合继承
// 寄生组合继承其实需要注意的是子构造函数constructor的指向问题。以及继承的弊病：超集会调用两次。
// constructor 属性返回对创建此对象的数组函数的引用。

function Super() {}
function Sub() {
    Super.call(this)
}
Sub.prototype = new Super();
console.log(Sub.constructor) // Function() { [native code] }
Sub.constructor = Sub;
console.log(Sub.constructor) // Sub() 
