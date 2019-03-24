class Person {
    constructor(name='Anonymus', age=0) {
        this.name = name;
        this.age = age;
    }
    getGredding () {
        return `Hello im am ${this.name}`;
    }
    getDetails() {
        return `Hello ${this.name}. You are ${this.age} years old`;
    }
}

class Traveler extends Person {
    constructor(name,age,form) {
        super(name,age);
        this.form = form;
    }

    hasTravelForm() {
        return !!this.form;
    }

    getGredding () {
        let gredding = super.getGredding();
        if(this.hasTravelForm()) {
            gredding += `. I am form ${this.form}`;
        }
        return gredding;
    }

}

const me = new Traveler('Amit Samadder',24, 'Dhaka');
console.log(me.getGredding());

const other = new Traveler();
console.log(other.getGredding());