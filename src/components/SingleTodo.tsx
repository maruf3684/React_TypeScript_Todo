import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../model/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import UseTodo from "./UseTodo";

type props = {
	todo: Todo;
	todos?: Todo[];
	setTodos?: React.Dispatch<React.SetStateAction<Todo[]>>;
	complitedtTodos: Todo[];
	setComplitedtTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({
	todo,
	todos,
	setTodos,
	complitedtTodos,
	setComplitedtTodos,
}: props) => {
	const {
		edit,
		setEdit,
		editText,
		setEditText,
		handleDone,
		handleDelete,
		handleEdit,
		inputRef,
	} = UseTodo(todo, todos, setTodos, complitedtTodos, setComplitedtTodos);

	return todos ? (
		<form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
			{edit ? (
				<input
					ref={inputRef}
					className="todos__single--text"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
				/>
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
	) : (
		<form className="todos__single">
			{todo.isDone ? (
				<s className="todos__single--text">{todo.todo}</s>
			) : (
				<span className="todos__single--text">{todo.todo}</span>
			)}
		</form>
	);
};

export default SingleTodo;
