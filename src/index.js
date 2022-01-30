
module.exports = function towelSort (matrix) {
  let result = []
  for (let i in matrix){
    if (i%2 == 0) {matrix[i].map(item => result.push(item))}
    else {matrix[i].reverse().map(item => result.push(item))}
  }
  return result;
}
