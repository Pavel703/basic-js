module.exports = function countCats(backyard) {
  let number = 0;

  backyard.filter(arr => arr.filter(item => {
    if (item === '^^') number++;
  }));

  return number;
};
