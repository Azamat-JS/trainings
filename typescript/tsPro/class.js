///-------- getters and setters
// class Circle {
//     private _radius:number;
//     constructor(radius:number){
//         this._radius = radius;
//     }
//     get radius():number{
//      return this._radius
//     }
//     set radius(value:number){
//         if(value <= 0){
//             throw new Error('Radius must be positive')
//         }
//         this._radius = value
//     }
// }
// const circle = new Circle(11)
// console.log(circle.radius);
// circle.radius = 17
// console.log(circle.radius);
//----------- static 
// class MathUtils{
//     static PI = 3.14;
//     static calculateArea(radius:number){
//         return MathUtils.PI * radius * radius
//     }
// }
// console.log(MathUtils.PI);
// console.log(MathUtils.calculateArea(10));
//  ---- injection
var Engine = /** @class */ (function () {
    function Engine() {
    }
    Engine.prototype.start = function () {
        console.log('Engine started');
    };
    return Engine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.drive = function () {
        this.engine.start();
        console.log('Car is driving');
    };
    return Car;
}());
var engine = new Engine();
var car = new Car(engine);
car.drive();
