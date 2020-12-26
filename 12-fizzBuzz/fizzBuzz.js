function fizzBuzz(start, end) {
  let fbArray = [];

  for(let i = start; i <= end; i++){
    if(i % 3 == 0 && !(i % 5 == 0)){
      fbArray.push("Fizz");
    }else if(!(i % 3 == 0) && i % 5 == 0){
      fbArray.push("Buzz");
    }else if(i % 3 == 0 && i % 5 == 0){
      fbArray.push("FizzBuzz");
    }else{
      fbArray.push(i);
    }
  }

  return fbArray;
}

// Do not edit this line;
module.exports = fizzBuzz;