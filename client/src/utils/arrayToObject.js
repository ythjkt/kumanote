const arrayToObject = (arr, key) =>
  Object.assign({}, ...arr.map(item => ({ [item[key]]: item })))

export default arrayToObject
