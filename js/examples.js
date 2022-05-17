'use strict';
/*
? Напиши класс Blogger для создания обьекта блоггера со следующим свойствами:
? email - email
? age - возраст, число
? numberOfPosts - кол-во постов, число
? topics - массив тем на которых специализируется блоггер
? Класс ожидает один параметр - объект настроек с одноимёнными свойствами.
? Добавь метод getInfo(), который, возвращает строку: Blogger ${email} is ${возраст} years old and has ${кол-во постов} posts.
? Добавь метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.
*/

// class Blogger {
//   constructor({ email, age, numberOfPosts, topics } = {}) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }

//   addElementsToTopics(firstElement, lastElement) {
//     this.topics.unshift(firstElement);
//     this.topics.push(lastElement);
//   }
// }

// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

/*
? Напиши класс Storage который создаёт объекты для управления складом товаров.
? При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

? Добавь методы класса:

? getItems() - возвращает массив товаров.
? addItem(item) - получает новый товар и добавляет его к текущим.
? removeItem(item) - получает товар и, если он есть, удаляет его из текущих.
*/

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const idxOfItem = this.items.indexOf(item);

    this.items.splice(idxOfItem, 1);
  }
}

const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑' ]

storage.addItem('🍌');
console.table(storage.getItems()); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

storage.removeItem('🍋');
console.table(storage.getItems()); // [ '🍎', '🍇', '🍑', '🍌' ]

/*
? Напиши класс User который создаёт объект со свойствами login и email.
? Объяви приватные свойства #login и #email, доступ к которым сделай через геттер и сеттер login и email.
*/

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.email); // poly@mail.com
// poly.email = 'poly@mopva.fj';
// console.log(poly.email); // poly@mopva.fj

/*
? Напиши класс Notes который управляет коллекцией заметок в свойстве items.
? Заметка это объект со свойствами text и priority.
? Добавь классу статическое свойство Priority, в котором будет храниться объект с приоритетами.
?
? {
?   LOW: 'low',
?   NORMAL: 'normal',
?   HIGH: 'high'
? }
?
? Добавь методы addNote(note), removeNote(text) и updatePriority(text, newPriority).
*/

// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя первая заметка', priority: Notes.Priority.LOW });
// console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя вторая заметка',
//   priority: Notes.Priority.NORMAL,
// });
// console.log(myNotes.items);

// myNotes.removeNote('Моя первая заметка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя вторая заметка', Notes.Priority.HIGH);
// console.log(myNotes.items);

/*
? Напишите класс Toggle который принимает объект настроек {isOpen: boolean}
? и объявляет одно свойство on - состояние вкл/выкл (true/false).
? По умолчанию значение свойства on должно быть false.
*/

// const firstToggle = new Toggle({ isOpen: true });

// console.group('firstToggle');
// console.log(firstToggle.on);

// firstToggle.toggle();

// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();

// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// (function () {
// })();
