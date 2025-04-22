import React from "react";
import TaskManagement from "./_components/TaskManagementFirst";
import TaskManagementThird from "./_components/TaskManagementThird";

const TaskManagementHome = () => {
  return (
    <div className="flex flex-col gap-5">
      <TaskManagement />
      <TaskManagement />
      <TaskManagementThird />
    </div>
  );
};

export default TaskManagementHome;
