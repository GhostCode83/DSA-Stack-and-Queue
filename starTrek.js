const Stack = require('./stack-node')

let starTrek = new Stack()

starTrek.push('Kirk')
// console.log(starTrek)

starTrek.push('Spock')
// console.log(starTrek)

starTrek.push('McCoy')
// console.log(starTrek)

starTrek.push('Scotty')
// console.log(starTrek)

console.log(starTrek.isEmpty()
)
console.log(starTrek.peek())