import React from "react";
import TaskManagementThird from "./_components/TaskManagementThird";
import TaskManagementFirst from "./_components/TaskManagementFirst";
import TaskManagementSecond from "./_components/TaskManagementSecond";

const TaskManagementHome = () => {
  return (
    <div className="flex flex-col gap-5">
      <TaskManagementFirst />
      <TaskManagementSecond />
      <TaskManagementThird />
    </div>
  );
};

export default TaskManagementHome;
