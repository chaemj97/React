// show + hide

import {useState,useEffect} from 'react'

function Hello(){
  useEffect(()=>{
    console.log('created :)');
    // component가 사라지거나 없어질 때
    return () => console.log('destroyed :(')
  },[]);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setshowing] = useState(false);
  const onClick2 = () => setshowing((prev) => !prev)

  return (
    <div>
      {/*JS : 중괄호{} */}
      {showing ? <Hello/> : null}
      <button onClick={onClick2}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
