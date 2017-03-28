/* eslint-disable */
const randomNumberBetween = (min, max) => (Math.floor((Math.random() * (max - min)) + 1) + min)

const isDivisible = (n, divisbleBy) => n % divisbleBy === 0

const getFizzbuzzStrings = (startingNumber, endingNumber, divisibleWord1, divisibleNumber1, divisibleWord2, divisibleNumber2) => {
  const outputStrings = []
  for (let i = startingNumber; i <= endingNumber; i += 1) {
    if (isDivisible(i, divisibleNumber2) &&
    isDivisible(i, divisibleNumber2)) {
      outputStrings.push(divisibleWord1 + divisibleWord2)
    } else if (isDivisible(i, divisibleNumber1)) {
      outputStrings.push(divisibleWord1)
    } else if (isDivisible(i, divisibleNumber2)) {
      outputStrings.push(divisibleWord2)
    } else {
      outputStrings.push(i)
    }
  }
  return outputStrings
}

return outputStrings.map((str, idx) => (
  // eslint-disable-next-line react/no-array-index-key
  <div key={idx}>{str}</div>
))
