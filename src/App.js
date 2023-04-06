import MainBlock from "./components/MainBlock";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-screen-lg m-0-auto app">
      <header className="drop-shadow-md">
        <Header />
      </header>
      <MainBlock />
    </div>
  );
}

export default App;
