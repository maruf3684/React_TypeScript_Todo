import React from "react";
import "./styles.css";
import  { useEffect, useState ,useRef} from "react";

interface props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e:React.FormEvent) => void,
}

const InputField:React.FC<props>= ({ todo, setTodo ,handleAdd}) => {

    const inputRef=useRef<HTMLInputElement>(null)

	return (
		<form className="input" onSubmit={(e)=>{
			handleAdd(e)
			inputRef.current?.blur()
		}}>
			<input ref={inputRef}  type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} className="input__box" placeholder="Enter a task" />
			<button type="submit" className="input_submit">
				GO
			</button>
		</form>
	);
};

export default InputField;
