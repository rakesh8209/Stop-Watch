// Basic Arrays

/*let arr = ["this", 100, true, 10n, undefined, null]

console.log(arr)                                                    //// print all array
console.log(arr.length) */                                          ////print length or array 


/*console.log(arr[3])                                               //// print perticular property
console.log(arr[arr.length - 1])  */                                //// print n-1 property




// Types of Arrays Method 

/*1.for in loop Array
2.for of loop Array
3.for each loop Array
4.Indexof
5.lastIndexOf
6.includes
7.find
8.filter
9.push
10.pop
11.shift
12.unshift
13.splice
14.some
15.every
16.reduce
17.slice
18.concat
19.join
20.map
21.flat
22.at
23.delete*/



// For Loop in array

/*let arr = [10, "okkk", 30, 10n, 50, 60]

for (let i = 0; i <= arr.length - 1; i++) {                      ////print Array  1 to n in for loop
    console.log(arr[i])
}
for (let i = 0; i < arr.length; i++) {                           ////print Array  1 to n in for loop
    console.log(arr[i])
}*/





// For In loop

/*let arr = ['a', 'b', 'c', 'd', 'e', '18']

for(let element in arr){                                             ////for In loop in array       
console.log(element)
}*/


// For Of loop

/*let arr = ['a', 'b', 'c', 'd', 'e', 10]

for (let e of arr) {                                                 ////For OF loop in array
    console.log(e)
}*/


// For each loop

/*let arr = ['a', 'b', 'c', 'd', 'e']

arr.forEach(function (element, index, array) {                        ////For each loop  in array
    console.log(element)
    console.log(index)
    console.log(array)
})*/


/*let arr = ['a', 'b', 'c', 'd', 'e']
arr.forEach((e, i, a) => {
    console.log(e)
    console.log(i)
    console.log(a)
})*/



/*let arr = ['r', 'k', 10]
arr.forEach(function(e, i, arr){
    console.log(e)
    console.log(i)
    console.log(arr)
})*/



// for each loop

/*let arr = ['r', 'k', 10]
// arr[0] = 'm'
// arr[1] = 5                                    //// we can change value 
// arr[2] = 'p'                                               
for (let element of arr) {                       /////for of loop use only print elements 
    console.log(element)
}*/



/*let arr = ['r', 'k', 10]
 
for (let index in arr) {                          ///// for in loop use only print index number
    console.log(index)
}*/



// IndexOf method

/*let arr=['r', 'k', 'p', 10]
console.log(arr.indexOf(10))*/



/*let arr = ['r', 10, 'k', 'p', 10, 1, 2, 3, 10]
// console.log(arr.indexOf(10, 2))
console.log(arr.indexOf(10, 5))*/


//LastIndexOf method


/*let arr = ['r', 10, 'k', 'p', 10, 1, 2, 3, 10]
console.log(arr.lastIndexOf(10, 7)) */                                          ////Indexof method is find the one index number from right to left


/*let arr = ['r', 10, 'k', 'p', 10, 1, 2, 3, 10]
let output=arr.indexOf("z")                                                    ////Indexof method is find the one index number from left to right                  
console.log(output)*/



// Includes Method


/*let arr = ['r', 10, 'k', 'p', 10, 1, 2, 3, 10]
let output = arr.includes(10)                                                  ////Includes method is find the true or false values
console.log(output)*/



// Find Method


/*let arr=[111, 28, 39, 44, 57]
let Output = arr.find((e) => {                                               ////Find method is only find the first one <, =, > values
    return  e < 30;
})
console.log(Output)*/



// Filter Method


/*let arr=[11, 28, 39, 44, 57]                               
let Output = arr.filter((e) => {                                             ////Filter method is find the all < ,=, > values
    return  e < 44;
})
console.log(Output)*/



// Push method


/* let arr = [10, 20, 30, 40]
 arr.push(50, 60, 70, 'r', null)                                         ////push method is use to add element in last 

 console.log(arr)*/



//  unshift method


/*let arr = [10, 20, 30, 40]
arr.unshift(50, 60, 70, 'r', null)                                        ////unshift method is use to add element in starting

console.log(arr)*/




// pop method


/*let arr = [10, 20, 30, 40]
arr.pop()                                                                ////pop method is use to remove element in last 
// arr.pop(arr.pop())
console.log(arr)*/



// shift method


/*let arr = [ 10, 20, 30, 40]
arr.shift()                                                               ////shift method is use to remove element in starting
// arr.shift(arr.shift())
console.log(arr)*/



//splice method


/*let arr = [10, 20, 30, 40, 50, 60, 70]
arr.splice(4, 0, 100)                                                   ////splice method is use to  add , replace & delete the element
// arr.splice(100, 4, 0)
// arr.splice(0, 4, 100)

console.log(arr)*/



/*let arr = [ 34, 274, 813, 837, 8248, 735, 2638, 725]
arr.splice(3, 1, 'rakesh')
console.log(arr)*/



// some method


/*let arr =[2883, 28422, 482, 482, 99, 372, 8272];
let output = arr.some((e)=>{                                       ////some method is use to print true or false value if only one condition are true of false
    return  e < 1000;
});
console.log(output);*/



// every method


/*let arr =[12, 42, 13, 12, 53, 28]
let output = arr.every((e)=>{                                      ////every method is use to print true or false value if every condition are true of false
    return  e < 50;
})
console.log(output);*/



// reduce method


/*let arr =[1, 2, 3, 7, 5]
let output = arr.reduce((a, b)=>{                                  ////reduce method is use to like febonacci series
    return  a + b
})
console.log(output)*/



// slice method


/*let arr =[10, 20, 30, 40, 50]
let output = arr.slice(1, 4)                                       ////slice method is use to print perticular values & remove other values
console.log(output)*/




// concat method


/*let arr =[10, 20, 30, 40, 50]
let output = arr.concat(1, 4, "rakesh")                         ////concat is use to add another arrays
console.log(output)


let arr = [10, 20, 30, 40, 50]
let arr2 = ['a', 'b']
let output = arr.concat(arr2)
console.log(output)*/



// join method

/*let arr = [10, 20, 30, 40, 50]
let output = arr.join(" * ")                                    ////add new element between the every elements
console.log(output)*/



// map loop =>

    /*let arr=[10,20,30,40,50]

  let output=  arr.map((e)=>{                                  ////map is use to perform pertucular task with the array
        return e*10;
    })

    console.log(output)*/



// flat method

/*let arr=[10,20,[100,200],30,40,50]                              ////flat is use to remove [ ] on the [ ]

console.log(arr.flat())*/



// at method

/*let arr=[10,20,39,7273,273,30,40,50]                              //// at is use to given element through the index no.

console.log(arr.at(3))*/



// delete method


/*let arr=[10,20,30,40,50]                                           ////delete is use to delete the perticular element
delete arr[1]
console.log(arr)*/


