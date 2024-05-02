import React from "react";
type Props = {
    todoText: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onClick:() => void
}
export const InputTodo = (props:Props) => {    
    const {todoText,onChange, onClick } = props;
    return (
        <div className="input-area"> 
        <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChange}/>
        <button onClick={onClick}>追加</button>
      </div>
    )
  }