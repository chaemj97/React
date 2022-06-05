// todo-list

import {useState,useEffect} from 'react'

function App(){
  // state는 직접 수정X
  const [toDo,setToDO] = useState("");
  const [toDos,setToDOs] = useState([])
  const onChange = (event) => setToDO(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === ""){
      return;
    }
    setToDO("");
    setToDOs((currentArray)=>[toDo,...currentArray]);
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="Write your to do"
          value={toDo}
          onChange={onChange} />
        <button>Add To Do</button>
      </form>
      <hr/>
      {/* .map()의 첫번째 인자는 리스트의 요소 */}
      <ul>
        {toDos.map((item,index)=> <li key={index}>{item}</li>)}
      </ul>
      
    </div>
  )
}

export default App