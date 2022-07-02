// import "./App.css";
import MyHeader from "./MyHeader";
import Counter from "./Counter";
import Container from "./Container";

function App() {
  const countProps = {
    a: 1,
    b: 2,
    // initialValue: 5,
  };
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...countProps} />
      </div>
    </Container>
    
  );
}

export default App;
