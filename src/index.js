
exports.min = function min (array) {
  if (array === undefined || array.length === 0) {

    return 0;
  } else {
    let arr = array;
    arr.sort((a, b) => a - b);
    let minimalValue = arr[0];
    
    return minimalValue;
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length === 0) {

    return 0;
  } else {
    let arr = array;
    arr.sort((a, b) => a - b);
    let maximalValue = arr[arr.length - 1];
    
    return maximalValue;
  }
}

exports.avg = function avg (array) {
  return 0;
}
