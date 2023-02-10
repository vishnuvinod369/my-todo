import React, { useState } from "react";
import "./App.css";
import TaskForm from "./TaskForm";

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);

  const closeTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="text-4xl mb-10 font-medium text-gray-800">My Todo</h2>
        <TaskForm taskList={taskList} setTaskList={setTaskList} />
        <div className="flex flex-col items-start max-w-xl w-full space-y-2">
          {taskList.map((item, index) => {
            return (
              <div className="flex items-center py-2 px-3 border border-gray-200 bg-blue-400 w-full rounded-md space-x-3 justify-between">
                <span className="text-xl font-semibold text-gray-800">
                  {item}
                </span>
                <button
                  className="py-2 px-3 bg-slate-600 rounded-md"
                  onClick={() => closeTask(index)}
                >
                  Close
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
