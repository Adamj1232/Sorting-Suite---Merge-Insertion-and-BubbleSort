export const generateRandomNumber = arrLength => {
  let testArray = [];

  for (let i = 0; i < arrLength; i++) {
    testArray.push(Math.floor(Math.random() * 100))
  }
  return testArray
}
