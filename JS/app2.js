
// // // console.log("hi there");
// // // setTimeout(() => {
// // //     console.log("hello bacha");
// // // }, 3000);
// // // console.log("welcome to ")

// // setTimeout(()=>{

// // },delay)


// let rand=Math.floor(Math.random()*5)+1;
// console.log(rand);

// function rollDice(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// let nums=[10,20,30];
// nums.forEach(function(num){
//     console.log(num);
// })


// let num=[1,2,3,4];

// let double=num.map((el)=>{
//     return el*2;
// });



// let nums=[1,2,3,4,5,6,7,8,9,10];
// let ans=nums.filter((el)=>{
//     return el%2==0;
// });


// let nums=[10,20,30,40];
// let ans=nums.every(el=>el%10==0);
// console.log(ans);



let nums=[10,20,30,40];
let min=nums.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});
console.log(min);