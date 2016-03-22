var question = [1, 7, 3, 4];

//   [84, 12, 28, 21]

//   [7*3*4, 1*3*4, 1*7*4, 1*7*3]
function calcMults(arrayOfNumbers){
  var memo = 1;
  var arrayBefore = [1];
  var arrayAfter = [1];
  var resultArray = [];

  for (var i = 0 ; i < arrayOfNumbers.length - 1 ; i++){
    memo = memo * arrayOfNumbers[i];
    arrayBefore.push(memo);
  };
  console.log(arrayBefore);
  memo = 1;

  for (var j = arrayOfNumbers.length - 1 ; j >= 0 ; j--){
    resultArray[j] = memo * arrayBefore[j];
    memo = memo *  arrayOfNumbers[j];


  };


  console.log(resultArray);
};

calcMults(question);
