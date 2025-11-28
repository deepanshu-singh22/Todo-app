import { useState } from "react";
import "./Todo.css";
import { TodoForm  } from "./TodoForm.jsx";
import { TodoList } from "./TodoList.jsx";
import { TodoDate } from "./TodoDate.jsx";

const todoKey="reactTodo";

export const Todo=()=> {
 
  const [task,setTask] = useState(()=> {
    const savedTasks = localStorage.getItem(todoKey);
    if(!savedTasks) return [];
      return JSON.parse(savedTasks);
    
  });

  const handleFormSubmit = (inputValue)=> {
   const {id,content,checked} = inputValue;

  //  to check if the field is empty or not.
    if(!content) {
      alert("Please enter a task");
      return;
    }
// to check if the data is already existing or not.
const ifTodoContentMatched= task.find((curTask)=> curTask.content === content);
    if(ifTodoContentMatched) {
      alert("Task already exists");
      return;
    }

    setTask((prev)=> [...prev, {id,content,checked}]);
    
  };

  // to add data to local storage.

localStorage.setItem(todoKey, JSON.stringify(task));


// Todo Delete Function
  const handleDeleteTodo = (value)=> {
    const updatedTasks = task.filter((curTask)=> curTask.content !== value);
    setTask(updatedTasks);
  };

// Todo Clear All Function
  const handleClearTodoData = ()=> {
    setTask([]);
  };

// Todo Checked Function
  const handleCheckedTodo = (content)=> {
    const updatedTask=task.map((curTask)=> {
      if(curTask.content === content) {
        return {...curTask, checked: !curTask.checked};
      }
      return curTask;
    });
    setTask(updatedTask);
  };




  return (
    <section className="todo-container">
      <header>
      <h1>Todo List</h1>
      <TodoDate />
     
      </header>

    <TodoForm onAddTodo={handleFormSubmit}/>

      <section className="myUnOrdList">
      <ul>
        {
        task.map((curTask)=> {
          return (
          <TodoList key={curTask.id} data={curTask.content} checked={curTask.checked} onHandleDeleteTodo={handleDeleteTodo} onHandleCheckedTodo={handleCheckedTodo} />
          );
        })}
      </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
      </section>
    </section>
  );
    
};