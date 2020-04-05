const hello = () => console.log('Hello, World!');

    hello()
 
const sayHi = (name)  =>  console.log('Hi ' + name + '!');

sayHi("Joku")
 
const multiplyByTen = (a) => console.log(a * 10);

multiplyByTen(10);
 
const sum = (a, b) => console.log(a + b);

sum(5, 5)
 

//function power(base, exponent) {     
   // var result = 1; 
   // for (var count = 0; count < exponent; count++) {   result *= base;  }  
   // return result
 //};




const power = (base, exponent) => {
    var result =1;
    for (var count = 0; count < exponent; count++) { result *= base;}
    return result}

console.log(power(2, 5))