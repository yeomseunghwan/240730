// Set
// Set은 배열과 유사하고 값의 모음, 컬렉션(데이터의 집합, 그룹)이다.
// 중복된 값을 허용하지 않는다.
// 인덱스가 따로 존재하지 않기 때문에 이터레이터를 사용하여 조회
// Map은 key&Value 구조이다.
// Key는 중복을 허용하지 않고, Value는 중복 허용.

// Set 객체는 중복되지 않는 유일한 값들의 집합이다.
// 동일한 값을 중복하여 포함할 수 있다. 배열 O  객체 X
// 요소 순서에 의미가 있다. 배열 O  객체 X
// 인덱스로 요소에 접근할 수 있다.  배열 O  객체 X

// Set 객체는 Set 생성자 함수로 생성한다.
// Set 생성자 함수는 이터러블을 인수로 전달받아 Set 객체를 생성하고, 중복된 값은 Set 객체에 요소로 저장 되지않는다.
// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3]);
// console.log(set1);

// const uniq = (array) => [...new Set(array)];
// console.log(uniq([2, 1, 2, 3, 4, 5, 4]));

// set 객체의 요소 개수 확인
// size 프로퍼티는 getter함수만 존재하는 접근자 프로퍼티다.
// add는 연속 호출이 가능하다.

// size
// const { size } = new Set([1, 2, 3, 4]);
// console.log(size);

// add
// const set = new Set();
// set.add(1).add(2);
// console.log(set);

// 특정 요소가 존재하는지 확인할 때 has 메서드를 사용한다
// set 객체에 요소를 삭제하려면 delete 메서드를 사용!
// delete는 연속 호출 불가능하다.
// 일괄 삭제하려면 clear 메서드를 사용!

// has 특정 요소가 존재 하는지 확인할수가 있음
// const set = new Set([1, 2, 3]);
// console.log(set.has(2));

// delete 객체 요소 삭제! delete는 연속 호출 불가능
// set.delete(2);
// console.log(set);

// clear 일괄 삭제, 전체삭제!
// set.clear();
// console.log(set);

// Set / for ... of문과 forEach() 메서드를 사용하여 포함된 값을 순회할 수 있다.

// for..of문으로 값을 순회할수 있다.
// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for (let o of odds) {
//   sum += o;
// }
// console.log(sum);

// forEach() 메서드
// let product = 1;
// odds.forEach((o) => (product *= o));
// console.log(product);

// Set 객체의 요소를 순회하려면 forEach 메서드 사용
// 3개의 인수 : (1) 현재 순회중인 요소값 (2)현재 순회 중인 요소값 (3)현재 순회중인 Set 객체 자체

// Set 객체의 요소를 순회하려면 forEach 메서드 사용
// forEach 메서드 사용 중복된 값 전부 삭제
// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach((userID) => {
//   console.log(`ID: ${userID}`);
// });

// const tags = ["JavaScript", "CSS", "HTML", "HTML"];
// const uniqueTages = new Set(tags);
// uniqueTages.forEach((tag) => {
//   console.log(`tag: ${tag}`);
// });

// 스프레드 문법, 배열 디스트럭처링 대상
// 구조 분해 할당은 배열이나 객체의 속성을 쉽게 추출하여 변수에 할당하는 문법
// 레스트 문법은 주로 함수의 매개변수나 구조 분해 할당에서 사용되며, 여러 개의 인자 또는 요소를 배열로
// 수집하는 데 사용, 나머지 요소들을 배열로 묶는 기능

// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);

// Set 객체는 합집합, 교집합, 차집합 개념을 가질 수 있다.
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 2, 3]);
// let union = new Set([...set1, ...set2]);
// let intersection = new Set([...set1].filter((x) => set2.has(x)));
// console.log(intersection);
// let difference = new Set([...set1].filter((x) => !set2.has(x)));
// console.log(difference);

// 예제3
// set 객체의 요소의 개수를 구하시오
// "I am a student"
const set1 = new Set("i am a student");
document.write(set1.size);
