// 1.sum of array 
const arr1 = [1,2,3,4,5]
const result1 = arr1.reduce((item,sum) => sum + item)
console.log("total sum result :",result1)

// 2.lergest,small number in array
const arr2 = [5, 10, 25, 8];
const large = arr2.sort((a,b) => b-a)


console.log('large :',large[0])

// secound large number
console.log('second large :',large[1])

// small number
const small = arr2.sort((a,b) => a-b)
console.log('small :',small[0])

// second small
console.log('second small :',small[1])


// 3.remove and find duplicates 
const arr3 = [1,2,2,3,3,4,3];

const removed = [... new Set(arr3)]

console.log(removed)

// find duplicates 

const duplicated = [... new Set(arr1.filter(item => arr3.indexOf(item) !== arr3.lastIndexOf(item)))]
console.log(duplicated)