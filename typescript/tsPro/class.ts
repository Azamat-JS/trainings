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

// class Engine {
//     start():void{
//         console.log('Engine started');
//     }
// }

// class Car {
//     constructor(private engine: Engine){}

//     drive():void{
//         this.engine.start()
//         console.log('Car is driving');
//     }
// }

// const engine = new Engine();
// const car = new Car(engine)
// car.drive()
