let output = [
  'push 4',
  'pop',
  'push 3',
  'push 5',
  'push 2',
  'inc 3 1',
  'pop',
  'push 1',
  'inc 2 2',
  'push 4',
  'pop',
  'pop'
]

function superStack(operations) {
  let stack = [];
  operations.forEach(function(el) {
    let splArr = el.split(' ');

    if(splArr[0] === 'inc') {
      for(let i = 0; i < parseInt(splArr[1]); i++) {
        stack[i] += parseInt(splArr[2]);
      }
      console.log(stack[stack.length-1]);
    }
    else if(splArr[1]) {
      stack[splArr[0]](parseInt(splArr[1]));
      console.log(stack[stack.length-1])
    } else {
      stack[splArr[0]]();
      console.log(stack[stack.length-1] || "EMPTY")
    }
  })
}
superStack(output)
