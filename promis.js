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

