import "./App.css";
import Menu from "./components/Menu/Menu";
import MenuProvider from "./context/Menu.context";

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <Menu />
      </div>
    </MenuProvider>
  );
}

export default App;
