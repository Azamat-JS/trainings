let promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve()
    }, 1000);
})
// ---------1- case --------
// promise.then(() => {
//     console.log("done");
// })

//----------- 2 - case -------

// promise.then(
//     function(result){console.log("amazing")},
//     function(error){console.log("error");
//     }
// )

//------------- //////// ///////////////

// let promise1 = new Promise((resolve, reject) => {
//     resolve(123)
// })
// promise1.then((res) => console.log(res))

//---------------------

async function delay(time) {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve()
        }, time)
    })
}
async function done() {
    console.log('first');
    await delay(1000)
    console.log('second');
    await delay(2000) 
    console.log('third');
    
}
done()