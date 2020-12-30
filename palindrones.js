const Stack = require('./stack-node')

let stack = new Stack()

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let forward = s
  console.log(forward)
  for (let i = s.length; i >= 0; i--) {
    stack.push(s[i])
    // console.log(s[i])
  }

  // console.log
  //   let backward = stack.display()
  //   if (forward == backward) {

  //   }
}

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));