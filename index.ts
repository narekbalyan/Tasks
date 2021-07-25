abstract class Car {
    public abstract price(): number;
    public abstract getInfo(): string;
}

abstract class CarOption extends Car {
    carDecortarions: Car;

    public abstract price(): number;
}

class BMW extends Car {
    public price(): number {
        return 15000;
    }

    public getInfo(): string {
        return "Your car is BMW";
    }
}

class Color extends CarOption {
    carDecortarions: Car;
    color: string;

    constructor(car: Car, color: string) {
        super();
        this.carDecortarions = car;
        this.color = color;
    }

    public price(): number {
        return this.carDecortarions.price() + 1500;
    }

    public getInfo(): string {
        return `${this.carDecortarions.getInfo()},\nIts color is ${this.color}`;
    }
}

class doorsQuantity extends CarOption {
    carDecortarions: Car;
    quantity: number;
    
    constructor(car: Car, quantity: number) {
        super();
        this.carDecortarions = car;
        if(quantity == 2 || quantity == 4){
            this.quantity = quantity;
        } else {
            throw new Error(`Impossible to make car with ${this.quantity} doors.`);
        }
    }

    public price(): number {
        if(this.quantity == 2) {
            return this.carDecortarions.price() + 3000;
        } else {
            return this.carDecortarions.price() + 6000;
        }
    }

    public getInfo(): string {
        if(this.quantity == 2) {
            return `${this.carDecortarions.getInfo()},\nIts is coupe`;
        } else {
            return `${this.carDecortarions.getInfo()},\nIts have 4 doors`;
        }
    }
}

class Engine extends CarOption {
    carDecortarions: Car;
    engineType: string;

    constructor(car: Car, engineType: string) {
        super()
        this.carDecortarions = car;
        if(engineType == "oil based" || engineType == "hybrid") {
            this.engineType = engineType;
        } else {
            throw new Error(`Impossible to make car with ${engineType} type of engine.`)
        }
    }

    public price(): number {
        if(this.engineType == "oil based") {
            return this.carDecortarions.price() + 2500;
        } else {
            return this.carDecortarions.price() + 4500;
        }
    }

    public getInfo(): string {
        if(this.engineType == "oil based") {
            return `${this.carDecortarions.getInfo()},\nIts engine is oil based`;
        } else {
            return `${this.carDecortarions.getInfo()},\nIts is hybrid`;
        }
    }
}

let car = new BMW();
car = new Color(car, "white");
car = new Engine(car, "oil based");
car = new doorsQuantity(car, 4);
console.log(car.price());
console.log(car.getInfo());
