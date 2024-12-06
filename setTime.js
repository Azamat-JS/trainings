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