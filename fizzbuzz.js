module.exports = function () {
  const array = [];
  for (let i = 0; i < 100 ; i++){
    if ((i+1) % 3 == 0) {
      array [i] = 'Fizz';
    }
 //hey
    if ((i+1) % 5 == 0) {
      array [i] = 'Buzz';
    }

    if ((i+1) % 3 == 0 && (i+1) % 5 == 0) {
      array [i] = 'FizzBuzz';
    }

    if ((i+1) % 3 != 0 && (i+1) % 5 != 0){
      array[i] = i+1;
    }
  }

  for(let i = 1 ; i <= 100 ; i++){
    console.log(array[i]);
  }
  if(array[2]==='Fizz'){
    console.log("true");
  }
  return array;
}

