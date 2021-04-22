// 拍平去重排序 
const arr = [[1,2,3],1,1,[9,8,4],1,5,5,2,3,2,9,3,6,99,25,99]

function foo(array){
	return [...new Set(array.join(',').split(','))].map(a => +a).sort((a, b) => a - b)
}

let a = foo(arr)
