function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
const animal = new Animal();

let duck = new Bird();
let beagle = new Dog();

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
console.log(duck.constructor);
console.log(beagle.constructor);
