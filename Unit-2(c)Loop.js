// while (a <= 5)

// let i = 1
// for (i; i <= 5; i++) {
//     console.log(i)
// }

// let i = 10;
// for(i; i%10; i++){
//     console.log(i)
// }


// let table=3;
// let i = 1;
// for (i; i <= 10; i++) {
//     console.log(i*table)
// }



// let b = 2;
// let i = 50;
// while(i<=50){
//     i++;
//     console.log(i%b)
// }

// let num = 1;
// for(i=0; i <= 50; i++){
//     if(num%2==0){
//         console.log(i)
// }
// else{
//     console.log("This is Odd number")
//     }
// }


// let year = 2001;
// while (year <= 2024) {
//   if ((year % 400 == 0) || (year % 4 == 0) && (year % 100 !== 0)) {
//     console.log(year)
//   }
//   year++;

// }


// for Loop

/*let i = 1;
for( i; i <= 50; i++){
if(i%2==0){
console.log(i)
 
}
 
}*/


/*let i = 1;
for( i; i <= 50; i++){
 if(i%2!=0){
   console.log(i)
   
   }
   
   }*/



// while loop



// let i = 1
// while (i <= 20) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
//   i++;
// }

/*let i = 1
while(i<=20){
 if(i%2!=0){
   console.log(i)
   }
   i++;
   }*/

//  let i = 1;
//  for(i; i<=40; i++){
//   if(i%4==0){
//     console.log(i)
//   }

//  }

//  let a = 0;
//  while(a<=30){
//   if(a%3==0){
//   console.log(a)
// }
// a++;
// }

// let a = 0;
// do {
//   if (a % 3 == 0) {
//     console.log(a)
//   }
//   a++;
// }
// while (a <= 30)


// for(let i=1;i<=5;i++){
//   process.stdout.write(String(i))
// }







// let num = 13;
// let val = 0;

// for (let j = 2; j <= num; j++) {
//     val = 0;

//     for (let i = 2; i <= j; i++) {
//         if (j % i === 0) {
//             val = 1;
//         break
//         }

//     }

//     if (val === 1) {
//         console.log(j);
//     }
// }




// for(let i = 2; i <= 100; i++) {
//     let val = 0;
//     for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//         val = 1;
//         break;

//     }
// }

//     if (val) {
//         console.log(i)
//     }


// }







// Prime number 


/*let num = 12;
let val = 0; 
for(let i = 2; i<=num-1; i++){
    if(num%i==0){
        val = 1;
        
    }
}
if(val!=0){
    console.log("Not prime number")
}
else{
  console.log("Prime Number")
}*/



/*let num = 100;

for (let i = 2; i <= num; i++) {
    let val = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            val = false;
            break;
        }
    }

    if (val) {
        console.log(i)
    }


}*/


       /* let num = 200;
        for(let i=2; i<=num; i++){
            let a = 1;
            for(let j=2; j<i; j++){
                if(i%j===0){
                    a=0;
                    break;
                }
            }
            if(a){
                console.log(i)
            }
        }*/



// Fibonacci Series 

let num = 80, a=0, b = 1, sum=a+b;
// let a = 0;
// let b = 1;
// let sum = a + b;
while (sum < num) {
    
    console.log(a)
    console.log(sum)
    sum = a + b;  //1+1 =2
    a = b;      //1
    b = sum;    //1+2=3s


}




    
      

       











