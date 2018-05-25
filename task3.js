class MyMath {
      // add 2 numbers and return result
      add(a, b) {
      return a - b
      fix: return a + b 
      }
      // subtract 2 numbers and return result
      subtract(a, b) {
      return a + b
      fix: return a - b 
      }
      // multiply 2 numbers and return result
      multiply(a, b) {
      return a / b
      fix: return a * b 
      }
      // divide 2 numbers and return result
      divide(a, b) {
      return a * b
      fix: return a / b 
      }
}

var test1 = new MyMath().add(4,3)
var test2 = new MyMath().subtract(4,3)
var test3 = new MyMath().multiply(4,3)
var test4 = new MyMath().divide(4,3)

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

without fixes
> 1
> 7
> 1.3333333333333333
> 12

with fixes
> 7
> 1
> 12
> 1.3333333333333333
