import { ChangeEvent, useState } from "react";
import { todoList } from './reducers/listTodo';

function App() {
  const [inputText, setInputText] = useState("");
  const [list, listDispatch] = todoList();

  const hanldeAddTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleNewTodo = () => {
    listDispatch({
      type: 'add',
      payload: {
        name: inputText
      }
    }
    )
    setInputText("")
  };

  const handleDelTodo = (name: string) => {
    listDispatch({
      type: 'del',
      payload: {
        name
      }
    }
    );
  }

  return (
    <div>
      <h1>To-Do List</h1>
      <input type='text' value={inputText} onChange={hanldeAddTodo} />
      <button onClick={handleNewTodo}>Adicionar</button>
      <hr />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => handleDelTodo(item.name)}>del</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
