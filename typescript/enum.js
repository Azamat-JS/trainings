// ---------- tuples
// let person:[string, number] = ['john', 25]
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// let date:[number, number, number] = [5, 1, 2025]
// function getInfo():[number, boolean]{
//     return [12, false]
// }
// let takeData = getInfo()
// console.log(takeData[0]);
// console.log(takeData[1]);
// //--------optinal
// let jasur: [string, number?] = ['olim']
//-------------enums ------------
// enum ServerResponseStatus {
//     Success = 200,
//     Error = "error"
// }
// Object.values(ServerResponseStatus).forEach((value) => {
//   if(typeof value === 'number'){
//     console.log(value);
//   }
// })
// interface ServerResponse{
//     result:ServerResponseStatus,
//     data:string[]
// }
// function getServerResponse():ServerResponse{
//     return{
//         result:ServerResponseStatus.Error,
//         data:['first', 'second item']
//     }
// }
// const response:ServerResponse = getServerResponse()
// console.log(response);
// //------------------------------------
// enum NumericEnum {
//     Member = 1
// }
// enum StringEnum {
//     Member = 'Value'
// }
// let NumericEnumValue: NumericEnum = 1
// let StringEnumValue: StringEnum = 'Value'
// console.log(NumericEnumValue);
//------------------- tasks
// enum UserRole {
//   Admin = "admin",
//   Manager = "manager",
//   Employee = "employee",
// }
// type User = { id: number; name: string; role: UserRole, contact:[string, string] };
// const user: User = {
//   id: 12,
//   name: "nodir",
//   role: UserRole.Admin,
//   contact: ['nodir@gmail.com', '998910928353']
// };
// //----------------------------
// function createUser(obj: User) {
//   return obj;
// }
// const result = createUser(user);
// console.log(result);
//----------------------------------- type assertion
// let someValue:any = 'this is a string'
// let strLenght:number = (someValue as string).length
// type Bird = {
//     name:string,
// }
// let birdString = '{"name": "Eagle"}'
// let dogString = '{"breed":"Poodle"}'
// let birdObject = JSON.parse(birdString)
// let dogObject = JSON.parse(dogString)
// let bird = birdObject as Bird
// let dog = dogObject as Bird
// console.log(bird.name);
// console.log(dog.name);
// enum Status{
//     Pending = 'pending',
//     Declined = 'declined'
// }
// type User = {
//     name:string,
//     status:Status
// }
// const statusValue = 'pending'
// const user:User = {name:'john', status:statusValue as Status}
// -------------------- type unknown -----------
// let unknownValue:unknown
// unknownValue = 'salom dunyo'
// unknownValue = [1, 4, 12]
// unknownValue = 12.234523
// if(typeof unknownValue === 'number'){
//     unknownValue.toFixed(2)
// }
// function runSomeCode(){
//     const random = Math.random()
//     if(random < 0.5){
// throw new Error("there was an error")
//     }else{
// throw 'some error'
//     }
// }
// try {
//   runSomeCode()
// } catch (error) {
//     if(error instanceof Error){
//         console.log(error.message);       
//     }else{
//         console.log(error);
//     }
// }
//----------------- type NEVER ---------------
// let someValue:never = 0
// type Theme = 'light' | 'dark'
// function checkTheme(theme:Theme):void{
// if(theme === 'light'){
//     console.log('light theme');
//     return
// }
// if(theme === 'dark'){
//     console.log('dark theme');
//   return 
// }
// theme; // type never
// }
// enum Color {
//     Red,
//     Blue,
//     Green
// }
// function getColorName(color:Color){
//     switch(color){
//         case Color.Red:
//             return 'Red'
//             case Color.Blue:
//                 return 'Blue'
//                 case Color.Green:
//                 return "Green"
//                 default:
//                     let unexpectedColor:never = color
//                     throw new Error('Unexpexted color value :' + color)
//     }
// }
// console.log(getColorName(Color.Blue));
// console.log(getColorName(Color.Red));
// console.log(getColorName(Color.Green));
//----------------------------
// export function sayHi(name:string):void{
//     console.log(`hi ${name}`)
// }
// export let person = 'sarvar'
// export type Student ={
//     name:string,
//     age:number
// }
// const newStudent: Student = {
//     name:'peter',
//     age: 34
// }
// export default newStudent
//------------------- fetch data -----------
var url = 'https://reqres.in/api/users?page=2';
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1, errMsg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('http error! status:' + response.status);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data.data]; // Return only the "data" array from the response
                case 3:
                    error_1 = _a.sent();
                    errMsg = error_1 instanceof Error ? error_1.message : "there was an error";
                    console.log(errMsg);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Wrapping in an async function since top-level await is not supported in CommonJS
(function () { return __awaiter(_this, void 0, void 0, function () {
    var tours;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchData(url)];
            case 1:
                tours = _a.sent();
                // Map through the fetched data and log names
                tours.map(function (tour) {
                    console.log("".concat(tour.first_name, " ").concat(tour.last_name));
                });
                return [2 /*return*/];
        }
    });
}); })();
// Call the function and log the data
// fetchData(url).then(data => console.log(data));
