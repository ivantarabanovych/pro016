const car = {
    brand: "AUDI",
    model: "A6",
    year: "2010"
};

Object.preventExtensions(car);

car.color = "black";
console.log(car);

const carCopy = Object.assign({}, car);
Object.seal(carCopy);

delete carCopy.year;
console.log(carCopy);


