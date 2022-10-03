import React from "react";
import Task from "../components/Task";

function TaskList({tasks, onDeleteTask}) {

const allTasks = tasks.map ((eachTask) =>{
 return <Task key={eachTask.text} 
text={eachTask.text}
category={eachTask.category} 
onDeleteTask={onDeleteTask}> {eachTask}</Task> 
})
  return (
    <div className="tasks">
      {allTasks}
    </div>
  );
}

export default TaskList;
