import React, { useRef, useState,useEffect } from "react";
import { Todo } from "../model/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type props = {
	todo: Todo;
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: props) => {
	const [edit, setEdit] = useState<boolean>(false);
	const [editText, setEditText] = useState<string>(todo.todo);
    const inputRef = useRef <HTMLInputElement>(null)

	const handleDone = (id: number) => {
		setTodos(
			todos.map((todo, index) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			)
		);
	};

	const handleDelete = (id: number) => {
		setTodos(todos.filter((todo, index) => todo.id !== id));
	};

    const handleEdit = (e:React.FormEvent,id: number) => {
		e.preventDefault()
        setTodos(
			todos.map((todo, index) =>
				todo.id === id ? { ...todo, todo: editText } : todo
			)
		);
        setEdit(!edit)
	};

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit])

	return (
		<form className="todos__single" onSubmit={(e)=>handleEdit(e,todo.id)}>
			{edit ? (
				<input ref={inputRef} className="todos__single--text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
			) : todo.isDone ? (
				<s className="todos__single--text">{todo.todo}</s>
			) : (
				<span className="todos__single--text">{todo.todo}</span>
			)}

			<div>
				<span
					onClick={() => {
						if (!todo.isDone && !edit) {
							setEdit(!edit);
						}
					}}
					className="icon"
				>
					<AiFillEdit />
				</span>
				<span className="icon">
					<AiFillDelete onClick={() => handleDelete(todo.id)} />
				</span>
				<span className="icon" onClick={() => handleDone(todo.id)}>
					<MdDone />
				</span>
			</div>
		</form>
	);
};

export default SingleTodo;
