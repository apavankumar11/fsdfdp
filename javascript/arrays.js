// let arr1 = [1,2,3,4,5]
//  let new_arr = arr1.map((element,index)=>{
//     return element*100
//  })
//  console.log(new_arr)
//  console.log(arr1)

//  let fil_arr = new_arr.filter((element,index)=>{
//     return element >= 300
//  }).reduce((curr,next) =>{
//     return curr + next
//  },800)
//  console.log(fil_arr)

// let arr = [1,2,3,4,5,6,7,8,9,10]
// arr.splice(4,3)
// console.log(arr)
// arr.splice(6,1)
// console.log(arr)
// arr.splice(0,1)
// console.log(arr)
// arr.splice(1,2,10,20,30)
// console.log(arr)
// arr.splice(4,0,89,56,75,23)
// console.log(arr)

// let arr = [20,30,40]
// arr.push(50)
// console.log(arr)

// arr.unshift(10)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()
// console.log(arr)

// let arr =  [10,20,30,40,50,60,70,80,90,100]
// let newarr = arr.slice(0,5)
// console.log(newarr)

// let newarr2 = arr.slice(5)
// console.log(newarr2)

// let final_arr = [...newarr2,...newarr]
// console.log(final_arr)

let str = 'welcome to fullstack'

console.log(str.slice(-9))
console.log(str.slice(-12,-10))