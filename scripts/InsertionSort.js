export const insert = arr => {
  for (let i = 1; i < arr.length; i++) {
    var numToBeCompared = arr[i];

    for (var j = i - 1; j >= 0; j--) {
      if (numToBeCompared <= arr[j]) {
        var sorted = arr[j]

        arr[j] = numToBeCompared
        arr[j + 1] = sorted;
      } else {
        break;
      }
    }
  }
  return arr
};


// export const insert = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     var numToBeCompared = arr[i];
//
//     for (var j = i - 1; arr[j] >= numToBeCompared; j--) {
//       var sorted = arr[j]
//
//       arr[j + 1] = sorted;
//     }
//     arr[j + 1] = numToBeCompared;
//   }
//    return arr
// };
