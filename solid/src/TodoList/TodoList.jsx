import { createSignal } from "solid-js";

export const TodoList = () => {
  let input;
  const [todos, addTodos] = createSignal([]);

  const addTodo = value => {
    return addTodos([...todos(), value]);
  };

  return (
    <section>
      <h1>To do list:</h1>
      <input ref={input} />
      <button onClick={() => addTodo(input.value)}>Add item</button>
      <ul>
        {todos().map(item => (
          <div onClick={() => console.log('click!')}>{item}</div>
        ))}
      </ul>
    </section>
  );
};