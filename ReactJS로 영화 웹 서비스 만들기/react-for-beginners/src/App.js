// 입력, 클릭, useEffect

import Button from "./Button";
import styles from "./App.module.css"

// useEffect는 두 개의 argument를 가지는 function
// : 대표적인 사용법 => API를 딱 한번만 호출하고 그 뒤로는 다시는 호출하기 싫은 경우
// 첫번째 arg : 우리가 딱 한번만 실행하고 싶은 코드
import {useState,useEffect} from 'react'

function App() {

  const [counter,setValue] = useState(0);
  const [keyword,setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev+1);
  const onChange = (event) => setKeyword(event.target.value)
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log('i run only once.')
  };

  // 오직 1번만 실행되고 싶음
  useEffect(iRunOnlyOnce,[]);
  // keyword에 변화가 있을 때만 실행되고 싶음
  useEffect(() => {
    // if (keyword != '' && keyword.length > 5){
    //   console.log('SEARCH FOR',keyword)
    // }
    console.log("i run when 'keyword' changes")
  },[keyword]);
  // counter에 변화가 있을 때만 실행되고 싶음
  useEffect(()=>{
    console.log("i run when 'counter' changes")
  },[counter]);
  // 둘 중 하나라도 변화가 있을 때만 실행되고 싶음
  useEffect(()=>{
    console.log("i run when 'keyword & counter' changes")
  },[keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} />
      <hr/>

      <input
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."/>
      
      <h2>{counter}</h2>
      <button onClick={onClick}>click me</button>
      <hr/>
    </div>
  );
}

export default App;
