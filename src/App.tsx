import React, { useEffect, useState ,useRef} from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import ManageTodo from "./ManageTodo";
import { Todo } from "./model/model";

const App: React.FC = () => {
	//const {todo,setTodo,todos,setTodos,handleAdd}=ManageTodo()

	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);
	

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		if (todo) {
			setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
			setTodo("");
		}
	};


	return (
		<div className="App">
			<span className="heading">Taskify</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

			{/* todolist */}
			<TodoList todos={todos} setTodos={setTodos} />

		</div>
	);
};

export default App;
