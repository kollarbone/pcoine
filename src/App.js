import MainBlock from "./components/MainBlock";
import Header from "./components/header/Header";
import ListBlock from "./components/ListBlock";
function App() {
  return (
    <div className="max-w-screen-lg m-auto app">
      <header className="drop-shadow-md">
        <Header />
      </header>
      <MainBlock />
      <ListBlock />
    </div>
  );
}

export default App;
