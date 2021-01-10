// function showThis() {
//     console.log(this);
// }
// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum:  function () {
//       // console.log(this);
//       function shout() {
//           console.log(this);
//       }
//       shout();
//   }
// };
//
// obj.sum();

// function user(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
//
// let ivan = new user('ivan', 23);

// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//   name: 'Aleksey'
// };
//
// sayName.call(user, 'Olshevsky');
// sayName.apply(user, ['Olshevsky']);
//
// function count(num) {
//     return this*num;
// }
//
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector("button");

// btn.addEventListener('click', function () {
//     // console.log(this);
//     this.style.backgroundColor = 'red';
// });

btn.addEventListener('click', (e) => {
    // console.log(this);
    e.target.style.backgroundColor = 'red';
});

const obj = {
  num: 5,
  sayNumber: function () {
      const say = () => {
          console.log(this);
      };

      say();
  }
};

obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };

// const double = (a) => a*2;

const double = a => a*2;
console.log(double(4));

// 1) Обычная функция: this = window, но если use strict,
// то будет - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр
// объекта
// 4) Ручная привязка this: call, apply, bind
// 5) Стрелочная функция не имеет контекста, берет от родителя

