// let timerId = setTimeout(() => {
//     console.log("timer");
    
// }, 1000);

//---------- func with settime --------

// function sum(a, b){
//     console.log(a + b);
// }
// setTimeout(sum, 1000, 3, 4)

//------------ delete setTimeout ------------

// let timerEd = setTimeout(() => {
//     console.log("won't work");
    
// }, 1000)
// clearTimeout(timerEd)

//--------------- nested setTimeout --------------

// let timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000)
// }, 2000)

// ----------- comparison setTimeout and setInterval ----------
// let n = 1;
// setTimeout(function run() {
//     console.log(n++);
//     setTimeout(run, 1000)
// }, 1000)
//^^^^^^^^^^^^^^^^^^^^^^
// let i = 1;
// setInterval(() =>{
//     console.log(i++);
    
// }, 1000)

//-------------- setInterval ------------
// let timerOd = setInterval(() => {console.log("tick")}, 1000)

//  ------------- setInterval with fixed time -----------
// let timerSd = setInterval(() => {console.log("tick")}, 1000)

// setTimeout(() => {clearInterval(timerSd); console.log('stop');}, 4100)

//--------- delete setInterval -------------

// let timerSd = setInterval(() => {console.log('key');}, 1000)
// clearInterval(timerSd)

//----------------- Zero delay -----------

// let start = Date.now()
// let times = []

// setTimeout(function run() {
//     times.push(Date.now() - start)
//         if(start + 100 < Date.now()) console.log(times);
//         else setTimeout(run)  
// })

//------------- task 1 ------------

// function printNums(from, to){
//     let current = from
//     let timerId = setInterval(() =>{
//         console.log(current);
//         if(current == to){
//             clearInterval(timerId)
//         }
//         current++
//     }, 1000)
// }
// printNums(50, 53)

//------------- task 2 ---------------------

// function printNumbers(from, to){
//     let current = from

//     setTimeout(function go() {
//         console.log(current);
//         if(current < to){
//             setTimeout(go, 1000);
//         }
//         current++
//     }, 1000)
// }
// printNumbers(5, 10)

//--------- task 3 --------------

// function printNumbers(from, to){
//     let current = from

//     function go(){
//         console.log(current);
//         if(current == to){
//             clearInterval(timerOd)
//         }
//         current++
//     }
//     go()
//     let timerOd = setInterval(go, 1000)
// }
// printNumbers(2, 7)

// --------------------function with setTimeout

// let user = {
//     firsname: "John",
//     sayHi(){
//         console.log(`Salom, ${this.firsname}!`);
        
//     }
// }
// setTimeout(function() {
//     user.sayHi()
// }, 1000)

//^^^^^^^^^^^^^^^^^^^^^

// let user = {
//     firstname: "John",
//     sayHi(){
//         console.log(`Salom, ${this.firstname}!`)
//     }
// }
// setTimeout(() => { user.sayHi()}, 1000);

// user = {
//     sayHi() {console.log("Another user in setTimeout!");
//     }
// }


//^^^^^^^^^^^^^^?_------- func.bind

// let user = {
//     firstName: "John",
// }

// function func(phrase){
//     console.log(phrase + ', ' + this.firstName);
    
// }

// let funcUser = func.bind(user)

// funcUser("salom")


//------------------

// let user = {
//     firstname: "John",
//     sayHi(){
//         console.log(`Salom, ${this.firstname}!`);
        
//     }
// }
// let sayHi = user.sayHi.bind(user)

// sayHi()

// setTimeout(sayHi, 1000)

// uesr = {
//     sayHi() {console.log("another user in setTimeout");
//     }
// }

//------------------ function bind
// let user = {
//     firstname: "John",
//     say(phrase){
//         console.log(`${phrase}, ${this.firstname}!`);
//     }
// }

// let say = user.say.bind(user)

// say("salom")
// say("xayr")

//^^^^^^^^^^^^^^^^-------------

// function partial(func, ...argsBound){
//     return function(...args){
//         return func.call(this, ...argsBound, ...args)
//     }
// }

// let user = {
//     firstname: "John",
// say(time , phrase){
//     console.log(`[${time}] ${this.firstname}: ${phrase}`);
    
// }
// }

// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes())
// user.sayNow('salom')

//----------------------

function mul(a, b){
    return a*b
}
let double = mul.bind(null, 2)

console.log(double(3));
console.log(double(4));
console.log(double(13));
