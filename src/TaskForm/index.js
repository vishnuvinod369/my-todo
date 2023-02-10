import React, { useState } from "react";

const TaskForm = ({ taskList, setTaskList }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addTask(value);
    setValue("");
  };

  const addTask = (text) => setTaskList([...taskList, text]);

  return (
    <form
      className="flex justify-center items-center max-w-xl space-x-3 w-full mb-3"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="task"
        value={value}
        placeholder="Enter your task name"
        className="border border-gray-400 rounded px-3 py-2 w-10/12"
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 text-center rounded cursor-pointer w-2/12"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
