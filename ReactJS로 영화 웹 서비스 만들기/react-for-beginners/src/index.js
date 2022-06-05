// v.18부터 변경 /clinent 붙여줘야함, ReactDOM.createRoot 이용 
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
// css 사용하고 싶다면 -> 모든 버튼 색을 통일... -> No
// import "./style.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
    // <App />
    // <App2 />
    // <App3 />
    <App4 />
  // </React.StrictMode>
);