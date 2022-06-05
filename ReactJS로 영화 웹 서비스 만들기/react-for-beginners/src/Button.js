// npm i prop-types
import ProTypes from "prop-types";
import styles from "./Button.module.css"

function Button({text}){
  // global css를 원하지 않는다면 props 활용 -> style={{}} -> 하지만 이 방법 선호X
  // 그래서 필요한 css파일을 index.js가 아니라 직접 import
  // className을 내가 설정했지만 f12에는 랜덤으로 뜸
  return <button className={styles.btn}>{text}</button>;
}

Button.ProTypes = {
  text: ProTypes.string.isRequired
}

// 우리의 App.js에서 Button을 가져올 수 있게 하기 위해
export default Button