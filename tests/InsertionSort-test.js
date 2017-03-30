import { assert } from 'chai';
import { insert } from '../scripts/InsertionSort'
import { generateRandomNumber } from '../scripts/RandomNumberArray'


describe('InsertionSort', () => {

  it('Insert should be a function', () => {
    assert.isFunction(insert)
  })

  it('should sort number from low to high', () => {
    let numbers = [5, 7, 1, 9, 3, 20, 3]

    assert.deepEqual(insert(numbers), [1, 3, 3, 5, 7, 9, 20])
  })

  it('should sort letters alphabetically', () => {
    let letters = ['z', 'b', 'c', 't', 'a', 'e', 'l']

    assert.deepEqual(insert(letters), ['a', 'b', 'c', 'e', 'l', 't', 'z'])
  })

  it('should sort a small randomly generated array from low to high', () => {

    let testArray = generateRandomNumber(20)
    let insertResults = insert(testArray)

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(insertResults, results)
  })

  it('should sort a large randomly generated array from low to high', () => {

    let testArray = generateRandomNumber(5000)
    let insertResults = insert(testArray)

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(insertResults, results)
  })
})
