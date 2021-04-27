// 寄生组合继承
// 寄生组合继承其实需要注意的是子构造函数constructor的指向问题。以及继承的弊病：超集会调用两次。

function Super() {}
function Sub() {
    Super.call(this)
}
Sub.prototype = new Super();
Sub.constructor = Sub;
