import { useState } from "react"
import "./Todo.css"

export const Todo = () => {
  const [todoText, setTodoText] = useState("")
  const [incompleteTodos, setIncompleteTodos] = useState(["todo1","todo2"]);
  const [completeTodos, setCompleteTodos] = useState(["todo1でした","todo2でした"]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
    // 実際はreact-hook-formとかを使うことが多いが一旦今回はこのまま
  }

  const onClickAdd = () => {
    if(todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index:number) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }

  return (
    <>
      <div className="input-area"> 
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo} className="list-row">
              <p className="todo-item">{todo}</p>
              <button>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
            ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo} className="list-row">
              <p className="todo-item">{todo}</p>
              <button>戻す</button>
            </li>
            ))} 
        </ul>
      </div>
    </>)
}
