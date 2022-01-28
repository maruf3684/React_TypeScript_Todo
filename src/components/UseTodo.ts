import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../model/model";



const UseTodo = (
	todo: Todo,
	todos:Todo[]|undefined=undefined,
	setTodos:React.Dispatch<React.SetStateAction<Todo[]>>|undefined=undefined,
	complitedtTodos: Todo[],
	setComplitedtTodos: React.Dispatch<React.SetStateAction<Todo[]>>
) => {

	const [edit, setEdit] = useState<boolean>(false);
	const [editText, setEditText] = useState<string>(todo.todo);
	const inputRef = useRef<HTMLInputElement>(null);

		const todosProp = todos;
	    const SettodosProp = setTodos;

	const handleDone = (id: number) => {
		if(todosProp && SettodosProp){
			let filter_item = todos.filter((todo, index) => todo.id === id);
			filter_item[0]["isDone"] = true;
			setComplitedtTodos([...complitedtTodos, ...filter_item]);
			handleDelete(id);
        }
	};

	const handleDelete = (id: number) => {
		if(todosProp && SettodosProp){
			setTodos(todos.filter((todo, index) => todo.id !== id));
        }
	};

	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();
        if(todosProp && SettodosProp){
			setTodos(
				todos.map((todo, index) =>
					todo.id === id ? { ...todo, todo: editText } : todo
				)
			);
			setEdit(!edit);
            }
	};

	useEffect(() => {
		inputRef.current?.focus();
	}, [edit]);

	return {
		edit,
		setEdit,
		editText,
		setEditText,
		handleDone,
		handleDelete,
		handleEdit,
        inputRef
	};
};

export default UseTodo;
