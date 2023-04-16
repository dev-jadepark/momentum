/*
  const : contant variable(값이 바뀔수 없음) -> 항상 const를 사용하도록 하자.
*/

const a = 5;
const b = 10;

let myName =  "jade";

console.log(myName);

/*
  let : variable을 재할당 하는 경우 (때에 따라서 필요한 경우만 사용하도록 한다.)
*/

myName = "jadePark";

console.log(myName);


/*
  var : variable (값이 막바뀜) -> 이러한 문제점을 해결하기 위해서 const와 let이 추가됨
*/


/*
  Boolean : 
*/

const amIFat = null;
let something;
console.log(something); // undefined

/*
 *  undefined : variable은 존재하는데 값이 주어지지 않은 것을 의미
 *  null : 메모리에 공간은 있는데 값이 없는 것을 의미 (variable 에 값이 없다라는 것을 확실하게 하기 위해서 사용 -> 의도적으로 사용)
 *  true
 *  false 
 *  모두 데이터타입
 */


/*
  array : 
*/
const mon = 0;
const tue = 1;
const wed = 2;
const thu = 3;
const fri = 4;
const sat = 5;
const sun = 6;

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; //array

const nonsense = [1, 2, "hello", false, true, null, undefined]; //다양한 데이터타입이 들어갈수 있는게 다른 언어와의 차이점이다.
console.log(nonsense);

//컴퓨터는 0부터 숫자를 센다.

// 요소 받아오기
const first = nonsense[0];
console.log("first=", first);

// 요소 추가
daysOfWeek.push("jade");
console.log(nonsense);
