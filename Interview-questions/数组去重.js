// 拍平去重排序 
const arr = [[1,2,3],1,1,[9,8,4],1,5,5,2,3,2,9,3,6,99,25,99]

function foo(array){
	return [...new Set(array.join(',').split(','))].map(a => +a).sort((a, b) => a - b)
	// join: 展开转为字符串 => split: 转为数组 => map(a => +a): 数组内每一项字符串转回数字 => sort((a, b) => a - b): 排序 => new Set: 去重 => ...: 展开 => []: 转为数组 => return: 输出
}

let a = foo(arr)
