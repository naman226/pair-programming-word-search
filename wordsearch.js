const wordSearch = function(matrix, word) {
  let solutionArray = [];
  for (let x = 0; x < matrix[0].length; x++) {
    solutionArray.push([]);
    for (let y = 0; y < matrix.length; y++) {
      solutionArray[x].push(matrix[y][x]);
    }
  }
  let newArray = [];
  for (let sol of solutionArray) {
    newArray.push(sol.join(''));
  }
  if (newArray.includes(word)) {
    return true;
  }
  return transpose(matrix, word);
};

const transpose = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    let larray = l.split(' ');
    if (larray.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;