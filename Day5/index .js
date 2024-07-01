class Person{
    constructor(name, age, gender, location, occupation){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.location = location;
        this.occupation = occupation;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Location: ${this.location}, Occupation: ${this.occupation}`;

    }
}
const person = new Person('kamesh',21,'Male','Coimbatore','Student');
console.log(person.getDetails());





//UberPriceCalculator
class UberPriceCalculator{
    constructor(base, km,time){
        this.base = base;
        this.km = km;
        this.time = time;

    }
    calculatePrice(distance,time){
        return this.base +(this.km*distance)+(this.time*time);

    }
}
const uberCalculator = new UberPriceCalculator(2.50, 1.75, 0.25);
const price = uberCalculator.calculatePrice(10, 20);
console.log(`The price is $${price.toFixed(2)}`);