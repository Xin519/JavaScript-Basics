// 实现柯里化其实就是把多个参数长度很分开来调用的意思，好处在于可以观测你参数调用的一个中间的过程，或者中间的变量。面试中常考的add(1, 2, 3)和add(1)(2)(3)就是这个问题

function curry(fn) {
	const finalLen = fn.length // 获取参数 length
	let args = [].slice.call(this, 1)
	return function currying() {
		args = args.concat(Array.from(arguments)) // 合并参数数组
		const len = args.length
		return len >= fn.length ? fn.apply(this, args) : currying // 参数收集完毕 执行fn方法
	}
}


// 支持多参数传递
function progressCurrying(fn, args) {

    var _this = this
    var len = fn.length;
    var args = args || [];

    return function() {
        var _args = Array.prototype.slice.call(arguments);
        Array.prototype.push.apply(args, _args);

        // 如果参数个数小于最初的fn.length，则递归调用，继续收集参数
        if (_args.length < len) {
            return progressCurrying.call(_this, fn, _args);
        }

        // 参数收集完毕，则执行fn
        return fn.apply(this, _args);
    }
}


