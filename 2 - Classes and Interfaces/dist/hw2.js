class Cat {
    constructor() {
        this.sound = "Meow";
        this.habitat = "settlements";
    }
    method(cat) {
        return `${cat} lives in ${this.habitat} and makes ${this.sound}`;
    }
}
class Bird {
    constructor() {
        this.sound = "hoot";
        this.habitat = "sky";
    }
    method(bird) {
        document.write(`${bird} fly in the ${this.habitat} and makes sounds ${this.sound}`);
    }
}
class Fish {
    constructor() {
        this.habitat = "water";
        this.gills = 6;
    }
    method(fish) {
        return `${fish}'s lives  in the ${this.habitat} and has ${this.gills} gills`;
    }
}
console.log(new Cat().method("cat"));
let bird = new Bird();
bird.method('owl');
console.log(new Fish().method("shark"));
// console.log(new DailyReport().build());
//# sourceMappingURL=hw2.js.map