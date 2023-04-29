import MainBlock from "./components/MainBlock";
import Header from "./components/header/Header";
import ListBlock from "./components/ListBlock";
import WhyWeBlock from "./components/WhyWeBlock";
import Join from "./components/JoinBlock";
function App() {
  return (
    <div className="max-w-screen-lg m-auto app">
      <header
        className="drop-shadow-md fixed top-0 left-0 w-full z-10"
        style={{ backgroundColor: "#202020" }}
      >
        <Header />
      </header>
      <MainBlock />
      <ListBlock />
      <WhyWeBlock />
      <Join />
    </div>
  );
}

export default App;
