let testArr = [{ key: 10, content: 'hi' }, { key: 11, content: 'night' }]

const func1 = (arr, key) => arr.map(item => ({ [item[key]]: item }))

const func2 = () => Object.assign({}, { 10: 'content of 10' })

const func3 = () => Object.assign({}, ...[{ 11: 'content of 11' }])

// test
console.log('test1', func1(testArr, 'key'))

console.log('test2', func2())
console.log('test3', func3())
