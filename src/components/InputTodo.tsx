import React from "react";
type Props = {
    todoText: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onClick:() => void
}
const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}
export const InputTodo = (props:Props) => {    
    const {todoText,onChange, onClick } = props;
    return (
        <div style={style}> 
            <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChange}/>
            <button onClick={onClick}>追加</button>
        </div>
    )
}

