// type Address = {city:string, street:string, houseNum:number}
var nextUserId = 1;
var users = [
    { id: nextUserId++, username: "Ruzim", role: "admin" },
    { id: nextUserId++, username: "Jasur", role: "member" },
    { id: nextUserId++, username: "Ruzim", role: "guest" },
];
//---------- UPDATE user's info --------------
function updateUser(id, updates) {
    var foundUser = users.find(function (user) { return user.id === id; });
    if (!foundUser) {
        return "there is no user with id: ".concat(id);
    }
    var updatedUser = Object.assign(foundUser, updates);
    return updatedUser;
}
updateUser(2, { username: 'Amir', role: 'admin' });
updateUser(3, { username: 'Ilyos' });
updateUser(1, { role: 'guest' });
//----------- GET info on User ----------------
function fetchUserDetails(username) {
    var user = users.find(function (user) { return user.username === username; });
    if (!user) {
        throw new Error("User with username ".concat(username, " not found"));
    }
    return user;
}
// console.log(fetchUserDetails("Ruzim"));
//------------ ADD new user -------------
function addNewUser(newUser) {
    users.push(newUser);
}
addNewUser({ id: nextUserId++, username: "Sarvar", role: "member" });
console.log(users);
