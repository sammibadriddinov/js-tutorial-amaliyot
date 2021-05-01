/* Darsga topshiriq:

1) o'zgaruvchan numberOfNews yarating va foydalanuvchidan savolga javobini qo'ying:
"Siz qancha yangilik ko'rdingiz?"

2) personalNewsDB obyektini yarating va unga quyidagi xususiyatlarni qo'ying:
- count - birinchi savolga javob shu erda beriladi
- news - bu ob'ektga bo'sh ob'ektni qo'ying
- actors - shuningdek, bo'sh ob'ekt joylashtiradilar
- genres - bu erda bo'sh massivni qo'ying
- privat - bu xususiyatga mantiqiy (boolean) false qiymatini qo'ying

3) foydalanuvchiga ikkita savol bering:
  - "Oxirgi ko'rgan yangiliklarizdan biri?"
  - 'Unga qancha baho bergan bo'lar edingiz?'
Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak.
Yangiliklar ob'ektiga javoblarni quyidagi shaklda yozing:
  news: {
    'BBC': '8.1'
  }

Konsolda hamma narsa xatosiz ishlashini tekshiring */

"use strict";

const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

const personalNewsDB = {
  count: numberOfNews,
  news: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
  b = prompt("Unga qancha baho bergan bo'lar edingiz?");

personalNewsDB.news[a] = b;
console.log(personalNewsDB);
