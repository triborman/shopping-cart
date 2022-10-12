import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
import Data from "./Data";

function App() {
  const { products } = Data;
  return (
    <div>
      <Header />
      <div className="row">
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
}

export default App;
