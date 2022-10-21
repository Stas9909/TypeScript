    abstract class Car{  
        public car: string;
        constructor(car: string){
            this.car=car;

        }   
    
    abstract method1(element, year, mileage):any
}

class BMW extends Car{
    public model: string;
    constructor(model){
        super("BMW")
        this.model=model;
    }

    method1(element, year, mileage){
        element.insertAdjacentHTML("beforeend", `${this.car}<br/>`);
        element.insertAdjacentHTML("beforeend", `${this.model}<br/>`);
        element.insertAdjacentHTML("beforeend", `${year} year;<br/>`);
        element.insertAdjacentHTML("beforeend", `${mileage} km<br/>`);
        // console.log(model, year, mileage)
    }
}

class Lexus extends Car {
    private model: string;
    private mileage: string;
    // public year: string;
    constructor(model, public year: string, mileage) {
        super("Lexus")
        this.model=model;
        this.mileage=mileage
    
    }

    method1(element){
        element.insertAdjacentHTML("beforeend", `${this.car}<br/>`);
        element.insertAdjacentHTML("beforeend", `${this.model}<br/>`);
        element.insertAdjacentHTML("beforeend", `${this.year} year;<br/>`);
        element.insertAdjacentHTML("beforeend", `${this.mileage} km<br/>`);
    }
}

let car1: BMW = new BMW("Z4");
console.log(car1)
let car2: BMW = new BMW("X6");
let car3: BMW = new BMW("645i");

let div1=document.querySelector("#placeforcar1")
let div2=document.querySelector("#placeforcar2")
let div3=document.querySelector("#placeforcar3")

car1.method1(div1, "2019", "11000")
car2.method1(div2, "2016", "190000")
car3.method1(div3, "2013", "165000")


let car4: Lexus = new Lexus("IS250", "2011", "125000");
console.log(car4)
let car5: Lexus = new Lexus("RX330", "2021", "40000");
let car6: Lexus = new Lexus("GS", "2015", "99900");

car6.year="2016"
car6.mileage="99999"

let div4=document.querySelector("#placeforcar4")
let div5=document.querySelector("#placeforcar5")
let div6=document.querySelector("#placeforcar6")

car4.method1(div4)
car5.method1(div5)
car6.method1(div6)








