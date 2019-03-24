const add = (a,b) => {
    //console.log(arguments);
    return a + b;
};
console.log(add(10, 12, 122));

const user = {
    name: 'Amit',
    location: ['Dhaka', 'Barishal', 'Khulna'],
    showDetails () {
        //const that = this;
        console.log(this.name);
        console.log(this.location);

        return this.location.map((location) => {
            const valueHere =  this.name + ' Lives is '+location;
            console.log(valueHere);   
        });

        // this.location.forEach( (location) => {
        //     console.log(this.name + ' Lives is ' + location);
        // });
        // for(let value of this.location)
        //     console.log(this.name + ' Lives is ' + value);
    }
};

user.showDetails();


const multiply = {
    number: [1,2,3,4,5,6],
    multiplyBy: 2,
    multiply () {
        return this.number.map((number) => number * this.multiplyBy);
    }
};

console.log(multiply.multiply());