function* fibs(){
	let a = 0
	let b = 1
	while(true){
		yield a
		[a, b] = [b, a + b]
	}
}

let [first, second, third, fourth, fifth, sixth] = fibs()

// fibs 是一个 Generator 函数 原生具有 Iterator 接口 解构赋值会依次从这个接口获取值
