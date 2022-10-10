import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
import Img from "./components/Img";

function App() {
  return (
    <div>
      <Header />
      <div className="row">
        <img />
        <Main />
        <Basket />
      </div>
      <Img />
    </div>
  );
}

export default App;
