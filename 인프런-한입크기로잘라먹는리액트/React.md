- React를 사용하는 이유
  - Component 기반의 UI 라이브러리
    - 중복된 부분 유지보수 수월 / 재사용 가능
  - 선언형 프로그래밍
  - Virtual DOM : 5번 render할꺼 1번 render



- React와 같이 사용하는 대표 패키지
  - Webpack
    - 다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리
  - Babel
    - JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리



- npx
  - 설치되어있지 않은 패키지를 한 번만 사용하고 싶을 때
  - npx -v
  - npx create-react-app reactexam1



- JSX

  - js와 html 혼합해서 쓰는 문법

  - 반드시 여는 태그와 닫는 태그 세트

    - 열자마자 닫아도 됨 `<br />`

  - 최상위 태그 필요!

    - 전체를 감싸는 태그

    - 최상위 태그 대체

      ```
      import React from 'react';
      ...
      return
        <React.Fragment>
        ...
        </React.Fragment>
      ...
      ```

  - css

    1. .css파일 + import

    2. 인라인

       ```
       const style = {
           App: {
             backgroundColor:'black',
           },
         };
       return {
         <div style={style.App}>
         ...
         </div>
       }
       ```

  - {}

    - 값을 포함 할 수 있지만 숫자와 문자만 가능
    - bool, 배열 안됨



- state

  ```
  import {useState} from 'react';
  ...
  const [count,setCount] = useState(0);
  // setCount가 count를 변경
  ```

  

- props

  1. 직접 넣기

     ```
     // App.js
     ...
     <Counter a={1} initialValue={5} />
     
     // Counter.js
     const Counter = (props) => {
       const [count, setCount] = useState(props.initialValue);
       ...
     ```

  2. spread

     ```
     // App.js
     ...
     const countProps = {
         a: 1,
         initialValue: 5,
     };
     ...
     <Counter {...countProps} />
     
     // Counter.js
     위 동일
     or
     const Counter = ({initialValue}) => {
       const [count, setCount] = useState(initialValue);
     ...
     ```

  3. 만약 넘겨받지 못했다면

     ```
     // Counter.js Counter함수 밑에
     
     Counter.defaultProps = {
       initialValue: 0,
     };
     ```

     