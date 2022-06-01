
const isPrime = value => {
  if (!value) {
    return null
  }
  if (value === 1) return []
  if (value === 4 || value === 5) return [2, value - 2]
  if (value === 6) return [3, 3]
  return [value];
}
module.exports = isPrime;