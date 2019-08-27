'use strict';

//1 Создайте дату

// let Day = new Date (2012, 1, 20, 3, 12);
// console.log (Day);

// let NDay = new Date ( 2019, 7, 24, 17, 27);
// console.log (NDay);



//2 Покажите день недели

// function getWeekDay(date) {
//   let days =['НД','ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//    return days [date.getDay()];
// } 
// let date = new Date(2012, 0, 4); 
// console.log (getWeekDay(date));



//3 День недели в европейской нумерации

// function getLocalDay (date) {
//   let day = date.getDay();

//   if (day == 0) {
//     day = 7;
//   }
//   return day;
// }
// let date = new Date(2019, 7, 24); 
// console.log ( getLocalDay(date) );



//4 Какой день месяца был много дней назад?
// getDateAgo(date, days);
// time.getDate ();
// const day = time.getDay();
// switch (day){
//    case 0:
//    return "Monday";
//    case 1:
//    return "Tuesday";
//    case  2:
//    return "Wednesday";
//    case 3:
//    return "Tuesday";
//    case 4:
//    return "Friday";
//    case 5:
//    return "Saturday";
//    case 6:
//    return "Sunday";
//   }

// console.log (getDateAgo ( getDateAgo(date, 1)));




// 5 Последнее число месяца?

// function getLastDayOfMonth(year, month) {
//   let date = new Date (year, month + 1, 0);
//   return date.getDate();
// }
// console.log (getLastDayOfMonth(2019, 1));




// 6  Сколько сегодня прошло секунд?

function getSecondsToday() {
  let timeNow = new Date();
  let timeToday = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());
  let difference = timeNow - timeToday;
  return Math.round(difference / 1000);
 }
console.log(getSecondsToday());




//  7 Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let timeNow = new Date();
  let timeTomorrow = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1);
  let difference1 = timeTomorrow - timeNow;
return Math.round(difference1 / 1000);
};
console.log(getSecondsToTomorrow());








//задача 1 JSON

let user = {
  name: "Василий Иванович",
  age: 35
};
console.log (JSON.stringify(user));
console.log (JSON.parse(JSON.stringify(user)));



//задача 2 JSON

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
  return (key != "" && value == meetup) ? undefined : value;

}));