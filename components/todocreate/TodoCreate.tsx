import React, { useState,useCallback,useEffect } from "react";
import Todoitemtile from "./Todotile";
import axios from "axios";

interface data{
  title:string
  _id:string
}

const TodoCreate: React.FC = () => {
  const [todoinputfield, settodoinputfield] = useState<string>("");
  const [arrayoftodo, setarrayoftodo] = useState<data[]>([]);

  const gettodolist =async()=>{
    const fetchlist = await axios.get("http://localhost:4200/todo");
    setarrayoftodo(fetchlist.data.allTodos)
  }
  useEffect(() => {
    gettodolist()  
  }, [])

  const storeintoarray = async()=> {
      if(todoinputfield === "")
      {
          alert("field cannot be empty")
          return
    }
    const createtodo = await axios.post("http://localhost:4200/todo",{title :todoinputfield});
    const listoftodos = arrayoftodo
    listoftodos.push(createtodo.data)
    setarrayoftodo(listoftodos)
    settodoinputfield("")
  };
  const removeelement =useCallback(
      (arrayoftodos) => {
          setarrayoftodo(arrayoftodos)
      },
      [arrayoftodo],
  )
  return (
    <div className="todo">
      <div className="todocreate">
        <h3>Create your task here</h3>
        <input
          type="text"
          value={todoinputfield}
          onChange={(e) => settodoinputfield(e.target.value)}
          placeholder="create your task"
        />
        <button onClick={storeintoarray}>Create</button>
      </div>
      {arrayoftodo?.length > 0 && (
        <div className="listoftodos">
          {arrayoftodo?.map((todoitem,index) => (
            <Todoitemtile
              title={todoitem}
              key={index}
              arrayoftodo={arrayoftodo}
              removeelement={removeelement}
            />
          ))}
        </div>
      )}
      {/* <div className="listoftodos">
        
      </div> */}
    </div>
  );
};

export default TodoCreate;
