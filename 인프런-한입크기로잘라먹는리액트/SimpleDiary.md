- useState 여러개 동시에

  ```
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1
  });
  
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  
  return
  ...
  <div>
    <input
      value={state.author}
      onChange={handleChangeState}
      name="author"
      placeholder="작성자"
      type="text"
    />
  </div>
  ...
  ```

  

- useRef : 특정 부분에 포커스를 두고 싶음

  ```
  const authorInput = useRef();
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    ...
  }
  ...
  return
  ...
  <div>
    <input
    	ref={authorInput}
      value={state.author}
  	...
  ```




- 현재시간

  ```
  // 넘겨줄 때 : ms 숫자로 넘겨줌
  created_date: new Date().getTime()
  
  // 받아서 읽을 때 : 
  new Date(created_date).toLocaleString()
  ```

  

- 확인/취소 창 띄우기

  ```
  onClick = {()=> {
    if(window.confirm(`ddd`)){
      // 확인 누를 시 하고싶은거
      ...
    }
  }}
  ```



- useEffect

  ```
  useEffect(콜백함수, [d])
  // d가 변할 때마다 콜백함수가 실행
  
  //mount
  useEffect(()=>{
  	console.log("Mount!");
  	//unmount
  	return ()=>{
  	  console.log('Unmount!')
  	};
  },[]);
  ```
  



- Memoization

  - 이미 계산 해 본 연산 결과를 기억 해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억 해 두었던 데이터를 반환 시키게 하는 방법

  - useMemo

    ```
    useMemo(콜백함수, [d])
    // d가 변할 때마다 콜백함수가 실행
    
    useMeomo를 return 받으면 함수가 아니고 값임
    ```



- React.memo : 함수형 컴포넌트에게 업데이트 조건을 걸자



- useCallback : 메모이제이션된 콜백을 반환

  - 렌더링 제한

  ```
  // 데이터 변화가 있을 때
  setData([newItem, ...data]); // No
  setData((data) => [newItem, ...data]);
  ```

  

- useReducer : 컴포넌트에서 상태변화 로직을 분리하자

  ```
  const reducer = (state,action)=>{
    switch (action.type){
      case 1:
        return state + 1;
      case 10:
        return state + 10;
      default:
        return state;
    }
  }
  
  const [count,dispatch] = useReducer(reducer,1);
  // count : 값
  // distpatch : 상태 변화
  // reduser : dispatch를 받아서 실행할 함수 이름
  // 1 : count 초기값
  
  // 꼭 type를 넘겨줘야함
  <buootn onClick={()=>dispatch({type:1})}>add1</button>
  ```



- `<Provider/> `:최상위 컴포넌트로 부터 바로 데이터 받기

  ```
  // context 생성
  const MyContext = React.createContext(defaultValue);
  
  // Context Provider를 통한 데이터 공급
  <MyContext.Provider value={전역으로 전달하고자 하는 값}>
    {/*이 Context안에 위치할 자식 컴포넌트들*/}
  </MyContext.Provider>
  
  // 받을 때
  import {DiaryStateContext} from "./App";
  const diaryList = useContext(DiaryStateContext);
  ```

  