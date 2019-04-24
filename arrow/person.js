class Person {
    constructor(fullname, likes = []) {
        const names = fullname.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
        this.likes = likes
    }
    sayHi(){
        return `Hello ${this.firstName} ${this.lastName} from Person`
    }
}

class Student extends Person {
    constructor(fullname, likes, years) {
        super(fullname, likes)
        this.years = years
    }
    sayHi(){
        return `Hello ${this.firstName} ${this.lastName} from Student`
    }
}

const me = new Person('Viacheslav Klepach', ['Play', 'Read'])
console.log(me)

const student = new Student('Viacheslav Klepach', ['Play', 'Read'], 28)
console.log(student.sayHi())