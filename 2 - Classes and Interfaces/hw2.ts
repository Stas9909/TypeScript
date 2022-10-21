interface Animals{
    sound?: string
    habitat: string;
    gills?: number;
    method: (name:string) => any;
}

class Cat implements Animals{
    sound: string = "Meow";
    habitat: string = "settlements";
    method(cat: string){
       return `${cat} lives in ${this.habitat} and makes ${this.sound}`
    }
}

class Bird implements Animals{
    sound: string = "hoot";
    habitat: string = "sky";
    method(bird: string){
       document.write(`${bird} fly in the ${this.habitat} and makes sounds ${this.sound}`)
    }
}


class Fish implements Animals{
    habitat: string = "water";
    gills: number = 6;
    method(fish: string){
       return `${fish}'s lives  in the ${this.habitat} and has ${this.gills} gills`
    }
}

console.log(new Cat().method("cat"));

let bird: Bird = new Bird();
bird.method('owl');

console.log(new Fish().method("shark"));

// console.log(new DailyReport().build());

