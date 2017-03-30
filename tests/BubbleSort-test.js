import { assert } from 'chai';
import { bubble } from '../scripts/BubbleSort'
import { generateRandomNumber } from '../scripts/RandomNumberArray'

describe('BubbleSort', () => {

  it('Bubble should be a function', () => {
    assert.isFunction(bubble)
  })

  it('should sort 2 numbers from low to high', () => {
    let numbers = [7, 5]

    assert.deepEqual(bubble(numbers), [5, 7])
  })

  it('should sort number from low to high', () => {
    let numbers = [5, 7, 1, 9, 3, 20, 3]

    assert.deepEqual(bubble(numbers), [1, 3, 3, 5, 7, 9, 20])
  })

  it('should sort letters alphabetically', () => {
    let letters = ['z', 'b', 'c', 't', 'a', 'e', 'l']

    assert.deepEqual(bubble(letters), ['a', 'b', 'c', 'e', 'l', 't', 'z'])
  })

  it('should sort a randomly generated array from low to high', () => {

    let testArray = generateRandomNumber(500)
    let bubbleResults = bubble(testArray)

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(bubbleResults, results)
  })
})
