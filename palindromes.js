const Stack = require('./stack-node')

let stack = new Stack()

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let arr = new Stack()
  let forward = s
  // console.log('****** forward: ', forward)
  for (let i = s.length; i >= 0; i--) {
    stack.push(s[i])
    // console.log(backwards)
    console.log('stack of data', stack.top.data)
    // arr.push(stack.top.data)
    // stack.push(forward.charAt(i))
    // let apple = stack.push(s[i])
    // console.log('apple:  ', apple)
  }
  console.log('stack display: ', stack.display())
  // let backwards = stack.stackValueToString()
  // console.log(backwards)
  //   let backward = stack.display()
  //   if (forward == backward) {

  //   }
  return stack
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
console.log(is_palindrome("Not a palidrome"));