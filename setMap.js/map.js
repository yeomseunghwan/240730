// Map
// Map 객체는 키와 값의 쌍으로 이루어진 컬렉션.

// 반복 작업 수행
//  구분                            객체                        Map 객체
// 키로 사용할수 있는 값     문자열 또는 심벌 값         객체를 포함한 모든 값
// 이터러블                          X                              O
// 요소 개수 확인           object.keys(obj).length             map.size

// Map 생성자 함수는 이터러블을 인수로 전달받아 Map 객체를 생성한다.
// const map1 = new Map([
// Map은 객체
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map1);

// const map2 = new Map([[1, 2]]);
// console.log(map2);

// Map 생성자 함수는 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.
// const map = new Map([
//   ["key1", "value1"],
//   ["key1", "value2"],
// ]);
// console.log(map);

//Map 요소 개수 확인은 size 프로퍼티 사용
// Map 객체에 요소를 추가할 때는 .set 메서드를 사용한다.
// const { size } = new Map([
//   ["key1", "value1"],
//   ["key2", "vlaue2"],
// ]);
// console.log(size);
// const map = new Map();
// console.log(map);
// map.set("key1", "value1");
// console.log(map);

// Map set 메서드를 호출한 후에 연속적으로 호출 할 수 있다.
// const map = new Map();
// console.log(map);
// map.set("key1", "value1").set("key2", "value2");
// console.log(map);
// Map 객체는 키 타입에 제한이 없다.
// const map = new Map();
// const lee = { name: "Lee" };
// const kim = { name: "Kim" };
// map.set(lee, "developer").set(kim, "designer");
// console.log(map);

// .delete 메서드는 삭제 성공 여부를 나타내는 불리언 값을 반환한다.
// const lee = { name: "Lee" };
// const kim = { name: "Kim" };

// const map = new Map([
//   [lee, "developer"],
//   [kim, "designer"],
// ]);
// console.log(map.delete(kim));
// console.log(map);

// has 메서드는 특정 요소의 존재 여부를 알리는 불리언 값을 반환한다.
// const lee = { name: "Lee" };
// const kim = { name: "Kim" };

// const map = new Map([
//   [lee, "developer"],
//   [kim, "designer"],
// ]);
// console.log(map.has(kim));
// console.log(map);

// .clear 객체 요소 일괄 삭제, clear 메서드는 언제나 undefined를 반환한다.
// const map = new Map();
// const lee = { name: "Lee" };
// const kim = { name: "Kim" };

// map.set([
//   [lee, "developer"],
//   [kim, "designer"],
// ]);
// console.log(map.clear());
// console.log(map);

// forEach() 메서드 사용할 수 있다. 첫 번째 인수는 값, 두 번쨰 인수는 키이다.
// let map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
// map.forEach((value, key) => console.log(key, value));

// 예제 1
// Map 객체를 이용하여 세 과목 성적의 합계와 평균을 구하시오
// 국어: 85, 영어: 90, 수학: 95

// const scores = new Map([
//   ["국어", 85],
//   ["영어", 90],
//   ["수학", 95],
// ]);
// let sum = 0; // 총합
// let average; // 평균

// scores.forEach(function (value) {
//   sum += value;
// });
// average = sum / scores.size;
// console.log(sum);
// console.log(average);

// 예제 2
// Map 객체의 요소를 forEach() 메서드로 다음의 실행 결과를 만드시오.
// title: 유럽 책방 문화 탐구 author: 한미화 price: 23000

// const book = new Map([
//   ["title", "유럽 책방 문화 탐구"],
//   ["author", "한미화"],
//   ["price", 23000],
// ]);
// let text = "";
// book.forEach(function (value, key) {
//   text += key + ":" + value + "<br>";
// });
// document.write(text);
// console.log(book);

// 예제4
// set를 이용하여 배열에서 중복 요소를 제거하여 결과를 내시오.
// numbers = [3,7,12,3,12,3]

// let numbers = [3, 7, 12, 3, 12, 3];
// const numbersSet = new Set(numbers);
// console.log(numbersSet);
