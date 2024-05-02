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

    // 未完了リストの更新
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index:number) => {
    // 未完了リストの更新
    const newTodos = [...incompleteTodos]
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index:number) => {
    // 未完了リストの更新
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index,1);
    setIncompleteTodos(newIncompleteTodos);

    // 完了リストの更新
    const newCmpleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCmpleteTodos);
  }

  const onClickBack = (index:number) => {
    // 未完了リストの更新
    const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);

    //　完了リストの更新
    const newCmpleteTodos = [...completeTodos];
    newCmpleteTodos.splice(index,1);
    setCompleteTodos(newCmpleteTodos);
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
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
            ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => (
            <li key={todo} className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
            ))} 
        </ul>
      </div>
    </>)
}
