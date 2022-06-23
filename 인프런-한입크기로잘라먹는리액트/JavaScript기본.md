- 숫자 * 문자 -> 숫자 : 암묵적 형변환
- 숫자 + 문자 -> 문자
  - 결과를 숫자로 만들고 싶을 때 문자를 parseInt() 안에 넣기 : 명시적 형변환
- == : 값만 비교
- === : 값과 타입도 비교
- 타입 확인 : console.log(typeof 알고싶은거)
- null변환 : 값이 있으면 그대로/ 값이 없다면 10을 넣자
  - a = a ?? 10



- switch

  ```
  let contry = 'ko';
  switch (country){
  	case 'ko':
  		console.log('한국')
  		break;
  	case 'japan':
  		console.log('일본')
  		break;
  	default:
  		console.log('미 분류')
  		break;
  }
  # 결과 
  한국
  ```



- 함수

  - 함수 선언식 : 호이스팅 가능(== 선언 전에 console.log 가능)

    ```
    function helloA(){
    	return '안녕'
    }
    ```

  - 함수 표현식 : 호이스팅 불가능

    ```
    let helloB = function(){
    	return '안녕'
    }
    ```

    - 화살표 함수 : 중괄호 안에 한 줄이면 중괄호 생략 가능

      ```
      let helloB = () => {
      	return '안녕'
      }
      ```



- 객체 리터럴 방식

  ```
  // let이 아닌 const도 가능
  let person = {
  	key: 'value',
  	name: '채민지',
  	age: 26
  };
  
  console.log(person.name); // 채민지
  // 괄호 표기법 : key가 고정되지 않았을 때 유용
  console.log(person["name"]); // 채민지
  
  // ex
  console.log(getPropertyValue('name')); // 채민지
  
  function getPropertyValue(key){
  	return person[key]
  }
  
  // 프로퍼티 추가
  person.location = '한국';
  person['gender'] = '여성';
  
  // 프로퍼티 수정
  person.name = '민지'
  person['age'] = 40
  
  // 프로퍼티 삭제
  // delete는 key와 value의 연결은 끊지만 메모리에는 계속 연결
  delete person.name;
  delete person['name'];
  // null은 메모리에서 연결 끊기
  person.name = null;
  ```




- 배열 리터럴

  ```
  let arr = [1,2,3,4,5];
  
  // 인덱스
  console.log(arr[0]) // 1
  
  // 추가
  arr.push(6);
  
  // 배열의 길이
  console.log(arr.length); // 6
  ```



- 반복문

  ```
  for (let i = 1; i <= 100; i++){
  	console.log('winterlood');
  }
  
  // 배열 순회
  const arr = ["a", "b", "c"]
  for (let i = 0; i < arr.length; i++){
  	console.log(arr[i]);
  }
  
  // 객체 순회
  let person = {
  	name:'채민지',
  	age: 26,
  	tall: 171
  };
  
  const personKeys = Object.keys(person);
  const personValues = Object.values(person);
  
  for(let i = 0; i < personKeys.length; i++){
  	// key: value 순회
  	const curKey = personKeys[i];
  	const curValue = person[curKey];
  	console.log(`${curKey}: ${curValue}`);
  	// console.log(personValues[i])
  }
  ```



- 배열내장함수

  ```
  const arr = [1,2,3,4]
  
  // forEach
  arr.forEach((elm)=> console.log(elm));
  
  const newArr = [];
  arr.forEach(function (elm) {
  	console.log(elm*2);
  	// 새 배열에 넣기
  	newArr.push(elm*2);
  });
  console.log(newArr);
  
  // map
  const newArr2 = arr.map((elm)=>{
   return elm*2;
  });
  console.log(newArr2);
  
  // includes(===)
  let number = 3;
  arr.forEach((elm) => {
  	if (elm === number) {
  		console.log(true);
  	}
  });
  console.log(arr.includes(number));
  
  // indexOf 
  console.log(arr.indexOf("3")); // -1 (일치하는 값이 없는 경우)
  console.log(arr.indexOf(number)); // 2 (인덱스는 0부터 시작)
  
  // findIndex
  const arr2 = [
  	{ color: "red"},
  	{ color: "black"},
  	{ color: "blue"},
  	{ color: "green"},
  	{ color: "blue"}
  ];
  console.log(arr2.findIndex((elm)=> {
  	return elm.color === 'red';
  }));
  // 같은 값이 여러개면 가장 먼저 만나는 요소 인덱스 반환
  // console.log(arr2.findIndex((elm)=> elm.color === 'red')); // 0
  
  // find
  const element = arr2.find((elm) => {
  	return elm.color === 'blue';
  });
  console.log(element); // {color: "blue"}
  
  // filter
  const arr3 = [
  	{ num: 1, color: "red"},
  	{ num: 2, color: "black"},
  	{ num: 3, color: "blue"},
  ];
  console.log(arr3.filter((elm)=> elm.color === "blue")); // (2) [Object, Object]
  
  // slice
  console.log(arr3.slice()) // 모두 다 나옴
  console.log(arr3.slice(0,2)) // index가 0~1인거 출력
  
  // concat
  const arr4 = [
  	{ num: 4, color: "green"},
  	{ num: 5, color: "blue"}
  ];
  console.log(arr3.concat(arr4)); // arr3뒤에 arr4를 붙임 
  
  // sort (문자를 기준으로 사전식 정렬)
  let chars = ['나','다','가'];
  chars.sort(); // 원본을 사전식으로 정렬
  
  let numbers = [0,1,3,2,10,30,20];
  // 숫자 오름차순 정렬
  const compare = (a,b) => {
  	if (a > b) {
  		return 1;
  	}
  	if (a < b) {
  		return -1;
  	}
  	return 0;
  };
  numbers.sort(compare);
  
  // join
  const hello = ['민지','님','안녕하세요','또오셨군요'];
  console.log(hello.join()); // 쉼표로 구분되어 출력
  console.log(hello.join(" ")) // 공백으로 구분되어 출력
  ```

  