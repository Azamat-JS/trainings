///------------ Type Interface =------------------
// type Book = { id: number; name: string; price: number };
var computer = {
    id: 12,
    brand: 'HP',
    ram: 32,
    storage: 128,
    price: 123,
    upgradeRam: function (value) {
        return this.ram = value;
    }
};
console.log(computer);
computer.storage = 256;
computer.upgradeRam(64);
console.log(computer);
