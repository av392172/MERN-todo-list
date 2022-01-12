import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <div className="app-container">
        <Header />
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
