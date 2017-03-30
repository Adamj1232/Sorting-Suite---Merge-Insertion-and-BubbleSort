export const mergeSort = array => {

  var half = (array.length * 0.5)

  if (array.length <= 1) {
    return array;
  }
  let left   = array.slice(0, half)
  let right  = array.slice(half, array.length);


  return sort(mergeSort(left), mergeSort(right));
}


export const sort = (left, right) => {
  var result = [];

  while (left.length || right.length) {
    if (left.length && right.length) {
      (left[0] >= right[0]) ? result.push(right.shift())
                            : result.push(left.shift());
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result;
}
