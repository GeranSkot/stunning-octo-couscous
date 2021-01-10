// const num = new Number(3);
// console.log(num);
// const num1 = new Function(3);
// console.log(num1);

function user(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

user.prototype.exit = function (name) {
    console.log(`Good bye ${this.name}`);
};




const ivan = new user('Ivan', 28);
const alex = new user('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

// console.log(ivan);
// console.log(alex);