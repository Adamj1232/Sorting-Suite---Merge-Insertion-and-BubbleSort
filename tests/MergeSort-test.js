import { assert } from 'chai';
import { mergeSort } from '../scripts/MergeSort'
import { sort } from '../scripts/MergeSort'
import { generateRandomNumber } from '../scripts/RandomNumberArray'


describe('MergeSort', () => {

  it('MergeSort should be a function', () => {
    assert.isFunction(mergeSort)
  })

  it('should sort 2 numbers from low to high', () => {
    let numbers = [7, 5]

    assert.deepEqual(mergeSort(numbers), [5, 7])
  })

  it('should sort number from low to high', () => {
    let numbers = [5, 7, 1, 9, 3, 20, 3]

    assert.deepEqual(mergeSort(numbers), [1, 3, 3, 5, 7, 9, 20])
  })

  it('should sort letters alphabetically', () => {
    let letters = ['z', 'b', 'c', 't', 'a', 'e', 'l']

    assert.deepEqual(mergeSort(letters), ['a', 'b', 'c', 'e', 'l', 't', 'z'])
  })

  it('should sort a small randomly generated array from low to high', () => {

    let testArray = generateRandomNumber(20)
    let mergeResults = mergeSort(testArray)

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(mergeResults, results)
  })

  it('should sort a large randomly generated array from low to high', () => {

    let testArray = generateRandomNumber(5000)
    let mergeResults = mergeSort(testArray)

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(mergeResults, results)
  })
})

describe('sort', () => {

  it('should sort two arrays of one index', () => {

    let testArray = generateRandomNumber(1)
    let testArray2 = generateRandomNumber(1)
    let testArray3 = testArray.concat(testArray2)
    let sortResults = sort(testArray, testArray2)

    let results = testArray3.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(sortResults, results)
  })

  it('should sort two longer sorted arrays of the same length', () => {

    let testArray = generateRandomNumber(200)
    let sortedTestArray = testArray.sort(function(a, b) {
      return a - b;
    })
    let testArray2 = generateRandomNumber(200)
    let sortedTestArray2 = testArray2.sort(function(a, b) {
      return a - b;
    })
    let testArray3 = testArray.concat(testArray2)
    let sortResults = sort(sortedTestArray, sortedTestArray2)

    let results = testArray3.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(sortResults, results)
  })

  it('should sort two longer sorted arrays of different length', () => {

    let testArray = generateRandomNumber(200)
    let sortedTestArray = testArray.sort(function(a, b) {
      return a - b;
    })
    let testArray2 = generateRandomNumber(255)
    let sortedTestArray2 = testArray2.sort(function(a, b) {
      return a - b;
    })
    let testArray3 = testArray.concat(testArray2)
    let sortResults = sort(sortedTestArray, sortedTestArray2)

    let results = testArray3.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(sortResults, results)
  })
})
