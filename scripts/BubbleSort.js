
export const bubble = array => {
  var length = array.length;

  for (var i = 0; i < length; i++) {
    for (var j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];

        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array
}


// export const bubble = array => {
//   let counter = 0
//
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i - 1] > array[i]) {
//       // console.log (array)
//       let starter = array[i - 1]
//
//       array[i - 1] = array[i]
//       array[i] = starter
//       counter++
//     }
//   }
//   if (counter !== 0) {
//     counter = 0
//     bubble(array)
//   }
//   return array
// }
