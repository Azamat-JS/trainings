///-------- getters and setters
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error('Radius must be positive');
            }
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var circle = new Circle(11);
console.log(circle.radius);
circle.radius = 17;
console.log(circle.radius);
