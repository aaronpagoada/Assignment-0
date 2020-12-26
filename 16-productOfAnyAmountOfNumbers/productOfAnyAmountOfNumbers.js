function productOfAnyAmountOfNumbers(...args){
  let product = 1;

  for(i in args){
    product *= args[i];
  }

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;