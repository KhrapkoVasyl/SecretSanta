'use strict';

const shuffleArray = arr => {
  const arrCopy = arr.slice();
  const resultArr = [];

  let tmpIndex = Math.floor(Math.random() * arr.length);
  const [lastElement] = arrCopy.splice(tmpIndex, 1);

  while (arrCopy.length) {
    const randIndex = Math.floor(Math.random() * arrCopy.length);
    const [element] = arrCopy.splice(randIndex, 1);
    resultArr[tmpIndex] = element;
    tmpIndex = arr.indexOf(element);
  }

  resultArr[tmpIndex] = lastElement;

  return resultArr;
};

module.exports = shuffleArray;
