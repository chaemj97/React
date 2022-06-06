// HashRouter는 주소에 /#을 붙임.. 그러니 BrowserRouter 쓰자
// Link : 브라우저 새로고침 업이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./routes/Home"
import Detail from "./routes/Detail"

function App(){
  return (
    <Router>
      {/* Switch : Route(URL)를 찾는 것 */}
      <Switch>
        {/* Detail */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        {/* Home */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;