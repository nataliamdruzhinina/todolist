import image from "./image.png";
import './App.css';
import { TodoList } from "./TodoList";

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } alt="rules" width={ 400 }/>
      </div>
      <div className="container">
        <h1>TO DO LIST</h1>
      </div>
        <TodoList/>
    </div>
  );
}

export default App;
