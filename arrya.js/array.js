// 배열
// 필요한 부분만 출력하고 싶을땐 드래그 + 컨트롤 + 알트 + N
const me = [1, 2, 3, 4, 5];
// console.log(me);
// 중요한 프로토타입 사용하면서 뭔지 확인하는 시간

// Array.prototype
// Array.isArray() 메서드로 배열인지 아닌지 확인 가능

// 배열 리터럴 사용

let carSales = [
  300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450,
];
// console.log(carSales);

// let carSales2 = new Array(
//   300,
//   350,
//   400,
//   450,
//   500,
//   600,
//   650,
//   620,
//   580,
//   620,
//   580,
//   620,
//   500,
//   450
// );
// console.log(carSales2);

// let copy = Array.from(carSales); // 카피하는 방법
// console.log(copy);

// let concat = [0, carSales, 300, 500]; // 확산 연산자를 사용
// console.log(concat);

// let numbers = [..."0123456789"]; // ""를 이용한 확산 연산자를 사용
// console.log(numbers);

// 배열 생성
// 배열 생성하는 방법 new Array() or Array()를 이용해서 만들기
// > let carSales = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450)

// 새로운 배열 생성
// let a = new Array();
// let a = [];

// 배열 생성
// 기존 배열을 복사해서 새로운 배열로 만들기
// ex) let copy = Array.from(carSales);
// 확산 연산자를 사용하여 새로운 배열 만들기
// ex) let concat = [0,... carSales,300,500]
// 기본 배열의 요소를 복사하는 것이기 때문에 복사본 배열을 수정해도 원래 배열에는 영향을 미치지 않는다. (얕은 복사 개념)
// 확산 연산자 + ""
// ex) let numbers = [..."0123456789"]

// 배열 요소 접근
// 배열 요소 접근
// numbers[인덱스] 제로베이스 넘버 [0]

// let may = carSales[4];
// carSales[4] = 680;
// let june = carSales["5"]

// let may = carSales[4];
// console.log(may);
// let june = carSales[5];
// console.log(june);

// carSales[12] = -50; // 새로운 요소가 생성이 됨
// console.log(carSales);

// 배열 요소 접근
// 길이를 알 수 있는 속성 length
// ex) let len = a.length;

// 배열의 요소를 삭제할 수있다.
// ex) a.length = 0 // 삭제

// let a = [1, 2, 3, 4, 5];
// let len = a.length; // 길이를 알 수가 있다.
// console.log(len);
// a.length = 0; // 0을 이용해서 배열을 삭제
// console.log(a);

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);
// console.log(rest);

// 배열 요소 접근
// for ... of 문
// let sum = 0; // 초기화
// // 전역에서 접근할 수 있음
// for (let sale of carSales) sum += sale; // sum = sum + sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2); // 소수점 2번쨰자리까지만 나오게 하기
// console.log(average);
// console.log(roundedAverage);

// 배열에 각 요소에 대한 이터레이터 객체를 반환
// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//   if (index % 2 === 0)
//     // 2로 나눴을때 나머지가 0
//     sum += sale; // sum = sum + sale
// }
// let average = sum / (carSales.length / 2);
// console.log(average);

// 배열 요소 접근
// for ...of 와 for ...in 의 차이
// for...of: 값을 반환    for...in: 키의 목록반환

// let list = [4, 5, 6];
// for (let i in list) {
//   // for...in 키의 목록을 반환
//   console.log(i);
// }
// for (let i of list) {
//   // for...of 값을 반환
//   console.log(i);
// }
// const car = {
//   // 객체
//   maker: "BMW",
//   color: "red",
//   year: "2012",
// };
// for (let prop in car) {
//   console.log(prop);
// }

// 배열 메서드
// forEach() : 배열에서 각 요소를 순회하면서 함수를 호출하여 배열 요소를 다루는 기능. 새로운 배열 반환 안함

// let sum = 0; // 값 초기화
// carSales.forEach((sale) => {
//   sum += sale;
// });
// let average = sum / carSales.length;
// console.log(average);

// carSales.forEach((sale, index, array) => {
//   array[index] = sale + 50;
// });

// 배열 메서드
// map() : 배열에서 각 요소를 순회하면서 함수를 호출하여 새로운 배열을 생성하여 반환한다.
// filter() : 배열에서 각 요소를 순회하면서 함수를 호출하여 새로운 배열을 생성하여 반환한다.

// 짝수 번째 월의 평균 판매대수만 포함하는 새로운 배열 생성

// map() 메서드
// let newCarSales = carSales.map((sale) => sale + 50); // map 새로운 배열을 생성하여 반환!
// console.log(newCarSales); // 50이 합쳐져있는 배열
// console.log(carSales); // 기본 배열

// // filter() 메서드
// let highSales = carSales.filter((sale) => sale > 500); // filter 새로운 배열을 생성하여 반환!
// console.log(highSales);
// let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);

// every() : 모든 배열 요소에 대한 조건연산에서의 결과 반환(true, false)
// some() : 모든 배열 요소에서 하나라도 참 또는 거짓을 반환하는 경우 결과 반환(true,false)
// reduce() : 더이상 배열 요소가 없을 때까지 함수를 반복하여 하나의 값을 반환
// find() : 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다

// finde() : 제공된 배열에서 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다
// let firstSaleSix = carSales.find((sale) => sale > 600); //
// console.log(firstSaleSix);
// // findIndex()
// let firstSalesSixIndex = carSales.findIndex((sale) => sale > 600); // index 값을 내보내줌
// console.log(firstSalesSixIndex);

// every() : 모든 배열 요소에 대한 조건연산에서 결과 반환
// let allsaleSix = carSales.every((sale) => sale > 600);
// console.log(allsaleSix);

// some() : 모든 배열 요소에서 하나라도 참이라면 true로 반환
// let anysaleSix = carSales.some((sale) => sale > 600);
// console.log(anysaleSix);

// reduce() : 더이상 배열 요소가 없을때까지 함수를 반복하여 하나의 값으로 반환
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);
// let average = sum / carSales.length;
// console.log(average);
// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));
// console.log(highest);

// flat(): 배열 요소에 다른 배열을 포함하고 있을 때 배열을 풀어준다. 단 포함된 배열이 다른 배열을 포함하고 있을 경우
// 풀어주지 못한다.
// flatMap() : 배열의 각요소에 콜백 함수를 적용한 다음 그 결과를 한 단계씩 평탄화하여 새 배열로 반환
// let flat = [1, [2, 3]].flat();
// console.log(flat);

// let message = ["오늘은", "비가 옵니다."]; // flat() 평탄화 작업?
// let word = message.flatMap((msg) => msg.split("")); // split 문자?로 변환?
// console.log(word);

// concat() : 두 개 이상의 배열을 병합하는 데 사용. 기존 배열을 변경하지 않고, 새 배열을 반환
// const array1 = ["a", "b", "c"];
// const array2 = ["b", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3);
// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray);

// push() : 배열의 끝에 요소를 추가
// pop() : 배열 끝에 있는 요소를 꺼내와 반환하고 해당 요소를 배열에서 삭제
// unshift() : 배열의 처음에 요소를 추가
// shift() : 배열의 처음에 있는 요소를 꺼내와 삭제

// push() , pop()
// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop();
// stack.push(4);
// console.log(stack);

// unshift(), shift();
// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();
// console.log(stack);

// 에제1 배열 numbers = [20, 37, -21, 32, -2] 에서 document.write를 이용하여 37,32를 결과값으로 나오게 작성
// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ",");
// document.write(numbers[3]);

// slice() : 배열을 잘라서 분할된 서브 배열을 반환 원래의 배열을 변경하지 않음
// 두 번째 인수는 인덱스
// splice() : 배열을 잘라서 분할된 서브 배열을 반환
// 원래 배열을 변경시킴
// 두 번째 인수는 잘라낼 요소의 개수
// 두 번째 인수를 생략하면 마지막 요소까지 잘라냄
// 세 개 이상의 인수일 경우 1. 시작 인덱스 2. 잘라낸 요소 개수, 3. 인수에 지정된 값이 배열의 첫 번째 인수의 위치 추가

// splice() : (시작위치, 잘라낼 갯수(index)) , (한개) 만 있을 경우 지정된 위치 이후 다 잘림
// let a = [1, 2, 3, 4, 5];
// a.splice(0, 2);
// a.splice(2);
// a.splice(0, 2, 10, 20);
// console.log(a);

// slice()
// 잘려 나간거 확인 하는 방법 변수에 담아서 확인해보면됨
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(c);
// console.log(a);

// indexOf() : 배열에서 인수와 일치하는 맨 처음 요소의 인덱스
// lastIndexOf() : 배열에서 끝에서부터 인수와 일치하는 요소를 찾아 맨처음 요소의 인덱스
// 찾지 못하면 -1을 반환한다.
// fill() : 배열을 첫 번쨰 인수에 지정된 값으로 채움
// 첫번째 인수는 값으로 채우고, 두번째 인수는 시작 인덱스 , 세번째 인수는 끝 인덱스

// fill()
// let a = new Array(5);
// a.fill(0);
// a.fill(1, 1); // 첫번째 인수 시작 값으로 채움, 시작 인덱스 1, 세번째는 끝 인덱스
// a.fill(1, 1, -1);
// console.log(a);

// indexOf() , lastIndexOf()
// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2); // 인수와 일치하는 맨 처음 요소 인덱스 찾음
// let c = a.lastIndexOf(2); // 배열 끝에서부터 일치하는 요소 찾음
// let d = a.indexOf(5); // 찾지 못한다면 -1로 반환
// console.log(d);

// includes() : 인수에 지정된 값이 배열에 포함되어 있으면 true / 아니면 false
// sort() : 배열을 정리할 때 사용, 알파벳 순으로 정렬 숫자의 경우 함수를 통해 지정

// includes()
// let a = [0, true, 2, false, NaN];
// let b = a.includes(NaN); // includes는 질문을 해주면 된다.?
// console.log(b);

// sort()
// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// console.log(b);
// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// let e = c.sort((a, b) => a - b);
// console.log(e);

//join() : 배열의 모든 요소를 문자열로 변환하여 결합한 문자열을 반환
// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join(""); // 합쳐서 결과 용도에 맞게 사용하기!
// console.log(c);

// 예제2. scores = [67,82,97,100,92] 배열의 각 요소 값을 1) For문을 이용하여 출력 2) For of 문을 이용하여 출력
// const scores = [67, 82, 97, 100, 92];
// for (let i = 0; i < scores.length; i++) {
//   document.write(scores[i] + "<br>");
// }
// console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
// for (const score of scores) {
//   console.log(score);
// }

// 예제3. tel["010","1234","5678"]을 문자열 010-1234-5678 로 변환하시오.
// const tel = ["010", "1234", "5678"];
// let tel2 = tel.join("-");
// document.write(tel2);

// 예제4. color = ["빨강","노랑","파랑","주황"] 메서드를 이용하여 노랑,파랑,주황/빨강의 실행 결과 내시오.
// const colors = ["빨강", "노랑", "파랑", "주황"];
// let arr = colors.shift();
// console.log(colors);
// document.write(colors + "/");
// document.write(arr);

// 다차원 배열...!
// 자바스크립트 언어 자체에서 다차원 배열을 지원하지 않는다.
// 그 대신에 내포된 배열을 사용하여 다차원 배열을 생성 할 수 있다.
// array of array : 배열 안의 배열이다.

// let arr = new Array(2); // 새로운 배열 생성
// for (let i = 0; i < arr.length; ++i) {
//   arr[i] = new Array(3);
// }
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3));
// // console.log(arr);

// // 배열에 접근
// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

// //for 문을 사용하여 각 요소에 접근
// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j < arr[i].length; ++j) {
//     console.log(arr[i][j]);
//   }
// }

// 예제 5.
//  3명 학생 4과목 성적의 합계와 평균을 구하라.
// [83, 90, 70, 87], [87,93,62,83], [98,90,77,97]

// const scores = [
//   [83, 90, 70, 87],
//   [87, 93, 62, 83],
//   [98, 90, 77, 97],
// ];
// let sum, average; // 총합 , 평균
// text = "";
// for (let i = 0; i < 3; i++) {
//   sum = 0;
//   for (let j = 0; j < 4; j++) {
//     sum += scores[i][j];
//   }
//   average = sum / 4;
//   text += i + "번째 학생의 합계: " + sum + ", 평균: " + average;
// }

// document.write(text);

// 예제 6.
// 배열을 이용하여 성적의 합계와 평균을 구하시오.
// mathScores = [90,85,70,86,97]
// const mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// let average;
// for (let mathscore of mathScores) {
//   sum += mathscore;
// }
// average = sum / mathScores.length;
// let text = "";
// text += "합계: " + sum + "<br>";
// text += "평균: " + average + "<br>";
// document.write(text);

// 예제 7. // 메서드 찾기
// tempNumbers = [7, -24, -8, 10, 17, -18]
// 0보다 작은 수 중에 가장 첫 번째 숫자를 결과로 나타내시오.
// let tempNumbers = [7, -24, -8, 10, 17, -18];
// tempFind = tempNumbers.find((number) => number < 0);
// document.write(tempFind);

// 예제 9.
// a = [12, 0, 2, 5, 4]
// b = [0, 2, 3, 12, 8]
// 두 배열의 요소 값이 서로 같은 요소들로 새로운 배열을 생성하여 결과로 내시오

// let a = [12, 0, 2, 5, 4];
// let b = [0, 2, 3, 12, 8];
// let c = [];
// b.forEach((element) => {
//   if (a.includes(element)) {
//     c.push(element);
//   }
// });
// document.write(c);

// 예제 10.
// numbers2 = [1,3,5];
// 위 배열을 이용하여 실행 결과 10,30,50를 내시오.

// const numbers = [1, 3, 5];
// let numbersArray = numbers.map((num) => num * 10);
// document.write(numbersArray);
