
exports.min = function min (array) {
  if(!array || array.length < 1) {
    return 0
  } else {
    return Math.min(...array)
  }
}

exports.max = function max (array) {
  if(!array || array.length < 1) {
    return 0
  } else {
    return Math.max(...array)
  }
}

exports.avg = function avg (array) {
  if(!array || array.length < 1) {
    return 0
  } else {
    let sum = array.reduce((prev, current) => current += prev)
    return sum / array.length
  }
}
