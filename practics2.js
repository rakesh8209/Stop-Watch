

/*let star = "*"
for(let i = 1; i<=5; i++){
  for(let j = 1; j<=5; j++){
    if(i==1 || i==5 || j==1 || j==5){
      process.stdout.write(star)
      }
      else{
        console.log("")
    }
    console.log()
    }
    }*/

/*let year = 2001;
while (year <= 2050) {
  if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 !== 0)) {
    console.log(year)
  }
  year++;

}*/


// for(i=-100; i<=100; i++)
//     console.log(i)


// let num = 0;

// for(let i=2; i<=100; i++){
//   for(let j=1;j<=i;j++){
//     if(i%j==0)
//       num++;
//   }
//   if(num==2)
//     console.log(i)
//   num=0
// }


// let num = 0;
// for(let i=2; i<=100; i++){
//     for(let j=2; j<=i; j++){
//         if(i%j==0){

//         }
//     }
//     }


// Maths object

// let num = -5.623;
// console.log(Math.trunc(num))
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))


// setTimeout(()=>{
//   console.log(20)
// }, 3000)

// setInterval(()=>{
//   console.log(10)
//   console.log(100)
// }, 4000)



// Object

let ram = {
  name: "shyam",
  age: 23,
  rollno: 723,

  mohan: {
    name: "Sohan",
    age: 26,
    rollno: 621
  }

}
console.log(ram.mohan.name)

