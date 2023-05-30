// let add: string = "안녕";
// console.log(add);

// function test(a: number, b: number) {
//   console.log(a + b);
// }
// test(10, 20);

// ==================================================================================================================

// // 리터럴 / 유니온 교차 타입
// // Literal Types

// // let userName1 = 'jane'
// // userName1 = 3 최소 변수 선언했을 때 문자로 입력하여 자동으로 string 인식했기 때문에 값 수정할 때 string만 입력 가능

// let userName1: string | number = "jane"; // let은 값 수정 가능
// userName1 = 3;

// const userName2 = "tom"; // const는 수정할 수 없고 값 고정

// // type도 만들 수 있음
// type Job = "police" | "developer" | "teacher"; // 개발자가 타입 생성 가능

// interface User {
//   name: string;
//   age?: number;
//   job: Job;
// }

// const user: User = {
//   name: "kane",
//   job: "teacher",
// };

// ==================================================================================================================
// // Union Types
// // interfaca 중복 사용

// interface Car {
//   name: "car";
//   color: string;
//   start(): void;
// }

// interface Mobile {
//   name: "mobile";
//   color: string;
//   call(): void;
// }

// function getGift(gift: Car | Mobile) {
//   console.log(gift.color);
//   if (gift.name === "car") {
//     gift.start();
//   } else {
//     gift.call();
//   }
// }

// // ==================================================================================================================
// // 교차타입 = Intersection Types
// // 교차타입은 여러 타입을 하나의 타입으로 합쳐주는 역할

// interface Car1 {
//   name: string;
//   start(): void;
// }

// interface Toy {
//   name: string;
//   color: string;
//   price: number;
// }

// const toyCar: Toy & Car1 = {
//   name: "타요",
//   start() {},
//   color: "blue",
//   price: 1000,
// };

// ==================================================================================================================

class Car {}
