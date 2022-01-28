import React, {  useState } from "react";
import {Todo} from "./model/model"

const ManageTodo = () => {
	const [todo, setTodo] = useState<string>("");
	const[todos,setTodos]=useState<Todo[]>([])
    const handleAdd=(e:React.FormEvent)=>{
        e.preventDefault()
        if(todo){
            setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
            setTodo("")
        }
      }
   

  const dic={todo,setTodo,todos,setTodos,handleAdd}
  return dic;
};

export default ManageTodo;
