var name = 'leaf'
			function main() {
				var name = 'main'
				var obj = {}
				console.log(this)
				obj.name = 'LEAF'
				obj.info = function() {
					console.log(this) 
					console.log(this.name)
					console.log(name)
				}
				return obj
			}
			
			var foo = main()
			foo.info() // this 指向 obj 