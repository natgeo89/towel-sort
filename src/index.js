
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  
  return [...matrix].reduce((accum, item, index) => {
    if (index % 2 === 0) return accum.concat(item);      
    return accum.concat(item.reverse())
  }, [])

}
