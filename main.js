const person ={
    name: "Ivan",
    _age: "21",
};

const nameDescriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(nameDescriptor);

const ageDescriptor = Object.getOwnPropertyDescriptor(person, "_age");
console.log(ageDescriptor);

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,   
    enumerable: true,
    configurable: true 
});

const genderDescriptor = Object.getOwnPropertyDescriptor(person, "gender");
console.log(genderDescriptor);