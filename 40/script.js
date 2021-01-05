// const now = new Date('2021-01-05');
//
// console.log(now);

// const now = new Date(2020, 5, 1, 20);
//
// console.log(now);

// const now = new Date(0); // 1970
//
// console.log(now);

// const now = new Date(); // 1970
const now = new Date('2020-05-01');
// new Date.parse('2020-05-01');
// console.log(now.setHours(18));
// console.log(now);



// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // Нумерация с воскресенья, т.е. ВС = 0
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Cycle is ready for ${end - start} millyseconds`)