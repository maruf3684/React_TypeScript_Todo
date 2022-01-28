import React from "react";
import "./styles.css";
import { Todo } from "../model/model";
import SingleTodo from "./SingleTodo";

interface props {
	todos: Todo[];
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
	complitedtTodos: Todo[];
	setComplitedtTodos:  React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos ,complitedtTodos,setComplitedtTodos}: props) => {
	return (
		<div className="container">
			<div className="todos">
				<span className="todos__heading">Active Tasks</span>
				{todos.map((todo, index) => (
					<SingleTodo
					    key={todo.id}
						todo={todo}
						todos={todos}
						setTodos={setTodos}
						complitedtTodos={complitedtTodos}
						setComplitedtTodos={setComplitedtTodos}
					/>
				))}
			</div>
			<div className="todos remove">
				<span className="todos__heading">Complited Tasks</span>
				{complitedtTodos.map((todo, index) => (
					<SingleTodo
						key={todo.id}
						todo={todo}
						complitedtTodos={complitedtTodos}
						setComplitedtTodos={setComplitedtTodos}
					/>
				))}
			</div>
		</div>
	);
};

export default TodoList;
