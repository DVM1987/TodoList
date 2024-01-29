import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, addTask, finishEditingTask } from "../../redux/actions";

const Task = () => {
  const dispatch = useDispatch();
  const showTask = useSelector((state) => state.data.showTaskComponent);
  const taskToEdit = useSelector((state) => state.data.editingTask);
  const [taskName, setTaskName] = React.useState("");
  const [taskLevel, setTaskLevel] = React.useState(0);

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.name);
      setTaskLevel(taskToEdit.level);
    }
  }, [taskToEdit]);

  const handleCancel = () => {
    dispatch(toggleTask());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskToEdit) {
      dispatch(finishEditingTask({ ...taskToEdit, name: taskName, level: taskLevel }));
    } else {
      dispatch(addTask({ id: Date.now(), name: taskName, level: taskLevel }));
    }
    
    dispatch(toggleTask());
  };

  if (!showTask) {
    return null;
  }
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-end">
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Task name"
                style={{ width: 200 }}
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <select
                className="form-select"
                value={taskLevel}
                onChange={(e) => setTaskLevel(Number(e.target.value))}
              >
                <option value={0}>Low</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary me-2" type="submit">
                Submit
              </button>
              <button
                className="btn custom-border-button"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Task;
