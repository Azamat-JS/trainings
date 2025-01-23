function isEmailValid(email){
    return email.includes("@gmail") ? true : false  
}
console.log(isEmailValid("azamat@gmail.com"));
console.log(isEmailValid("azamat@gil.com"));
