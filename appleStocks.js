var stockPricesYesterday = [10, 9, 8, 7, 6, 5, 4, 3];

function getMaxProfit(stockPriceArray){
  var min = stockPriceArray[0];
  var diff = Number.NEGATIVE_INFINITY;
  var maxDiff = Number.NEGATIVE_INFINITY;

  for (var i = 1 ; i < stockPriceArray.length; i++){
    if (maxDiff < stockPriceArray[i] - min){
        maxDiff = stockPriceArray[i] - min;
    }

    if (min > stockPriceArray[i]){
        min = stockPriceArray[i];
    }
  };

  return maxDiff;
};

console.log(getMaxProfit(stockPricesYesterday));

// min:10
// max:15
// diff:5
// maxDiff = 5;
