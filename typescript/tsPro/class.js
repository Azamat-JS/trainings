///-------- getters and setters
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
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
// decorators
// function log(target:any, key:string){
//     console.log(`${key} was called`);  
// }
// class Example {
//     @log
//     greeting(){
//         console.log('salom');
//     }
// }
// const ex = new Example()
// ex.greeting()
function first() {
    console.log("first(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("first(): called");
    };
}
function second() {
    console.log("second(): factory evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("second(): called");
    };
}
var ExampleClass = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _method_decorators;
    return _a = /** @class */ (function () {
            function ExampleClass() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            ExampleClass.prototype.method = function () { };
            return ExampleClass;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _method_decorators = [first(), second()];
            __esDecorate(_a, null, _method_decorators, { kind: "method", name: "method", static: false, private: false, access: { has: function (obj) { return "method" in obj; }, get: function (obj) { return obj.method; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
