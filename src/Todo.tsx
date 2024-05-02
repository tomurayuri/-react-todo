import React, { useState } from "react"
import "./Todo.css"
import { InputTodo } from "./components/InputTodo";
import { InCompleteTodos } from "./components/InCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
  const [todoText, setTodoText] = useState("")
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <InputTodo
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
      />
      <InCompleteTodos 
        todos = {incompleteTodos}
        onClickComplete={onClickComplete} 
        onClickDelete={onClickDelete} 
      />
      <CompleteTodos 
        todos = {completeTodos}
        onClickBack={onClickBack}
      />
    </>)
}
