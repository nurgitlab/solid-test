import {useState} from "react";
import {Item} from "./Item/Item";
import { v4 as uuidv4 } from "uuid";


function App() {
  const [todos, addTodos] = useState([]);
  const [text, setText] = useState('')

  const todoHandler = (value) => {
    setText(value)
  }

  const addHandler = () => {
    addTodos([...todos, text])
    setText('')
  }

  return (
    <div className="App">
      Hello!
      <div>
        Todo: <input value={text} onChange={(e) => todoHandler(e.target.value)}/>
        <button onClick={addHandler}>Add</button>{text}

        {JSON.stringify(todos)}
      </div>
      {todos.map((todo, i) =>
        <div>
          <Item key={uuidv4()} value={todo[i]} onChange={todoHandler}/>
        </div>
      )}
    </div>
  );
}

export default App;
