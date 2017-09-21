declare var Promise: any;

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, " + person.firstName + " " + person.lastName);
        }, Math.random() * (1000 - 100) + 100);
    });
    return promise;
}

var user1 = new Student("Jane", "M.", "Doe");
var user2 = new Student("John", "T.", "Smith");
var user3 = new Student("Alex", "D.", "White");

async function greetAll(users){
    const greetings = await Promise.all(users.map(u => {return greeter(u)}));
    document.body.innerHTML = greetings.reduce(function(complete, curr) {return complete + "<br>" + curr});
}


greetAll([user1, user2, user3]);