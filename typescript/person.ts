export class Person {
    constructor(public id: number,
                public name: string,
                public age: number) {}
    describe() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
