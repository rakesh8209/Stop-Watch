
// let arr1 = [1, 2, 3, 4]
// let arr2 = [4, 5, ...arr1, 6, 7, 8]
// console.log(arr2)  


// let arr = [{
// name:"Ram",
// age:22,
// class: "12th",
// },
// {
//     name:"Shyam",
//     age:22,
//     class: "12th",
// }]
// let arr2 = [...arr]
// arr[0].age=25
// arr[1].name="Mohan"
// arr=arr2
// console.log(arr2)   



let arr1 = [1, 2, 3, 4]
let arr2 = [...arr1 ]
arr2[1]="Ashok"
arr2.forEach(function (element) { 
    console.log(element)


})