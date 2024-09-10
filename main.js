const person ={
    name: "Ivan",
    _age: "21",
};

Object.defineProperty(person, "gender", {
    value: "male",
    writable: false,   
    enumerable: true,
    configurable: true 
});

person.name = "Marko";
console.log(person, name);

for(let key in person){
    console.log(key);  
};

delete person._age;
console.log(person);
