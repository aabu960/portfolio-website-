import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState({
    'to-do': [
      { id: 'task-1', content: 'Design the logo' },
      { id: 'task-2', content: 'Create wireframes' },
    ],
    'in-progress': [
      { id: 'task-3', content: 'Develop API' },
    ],
    'completed': [
      { id: 'task-4', content: 'Write documentation' },
    ],
  });

  const [newTaskContent, setNewTaskContent] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const newTasks = reorder(tasks[source.droppableId], source.index, destination.index);
      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: newTasks,
      }));
    } else {
      const startColumn = tasks[source.droppableId];
      const endColumn = tasks[destination.droppableId];
      const [removed] = startColumn.splice(source.index, 1);

      endColumn.splice(destination.index, 0, removed);

      setTasks((prev) => ({
        ...prev,
        [source.droppableId]: [...startColumn],
        [destination.droppableId]: [...endColumn],
      }));
    }
  };

  const addTask = (column) => {
    if (!newTaskContent.trim()) return;
    const newTask = {
      id: `task-${Date.now()}`,
      content: newTaskContent,
    };

    setTasks((prev) => ({
      ...prev,
      [column]: [...prev[column], newTask],
    }));
    setNewTaskContent('');
  };

  const editTask = (column, taskId) => {
    const task = tasks[column].find((t) => t.id === taskId);
    setTaskToEdit(task);
  };

  const updateTask = () => {
    if (!taskToEdit || !taskToEdit.content.trim()) return;
    setTasks((prev) => {
      const updatedTasks = { ...prev };
      const column = Object.keys(prev).find((key) =>
        prev[key].some((task) => task.id === taskToEdit.id)
      );
      updatedTasks[column] = updatedTasks[column].map((task) =>
        task.id === taskToEdit.id ? { ...task, content: taskToEdit.content } : task
      );
      return updatedTasks;
    });
    setTaskToEdit(null);
  };

  const deleteTask = (column, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column].filter((task) => task.id !== taskId),
    }));
  };

  return (
    <div className="flex justify-center my-8">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex space-x-8 w-full max-w-screen-xl">
          {['to-do', 'in-progress', 'completed'].map((column) => (
            <div key={column} className="bg-gray-100 rounded-lg shadow-xl w-full p-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-6 capitalize">{column.replace('-', ' ')}</h2>

              <Droppable droppableId={column}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="space-y-4"
                  >
                    {tasks[column].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white rounded-lg shadow-md p-4 text-gray-800 hover:bg-gray-50 cursor-pointer"
                          >
                            <div className="flex justify-between">
                              <p>{task.content}</p>
                              <div className="space-x-2">
                                <button
                                  className="bg-blue-500 text-white px-3 py-1 rounded"
                                  onClick={() => editTask(column, task.id)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="bg-red-500 text-white px-3 py-1 rounded"
                                  onClick={() => deleteTask(column, task.id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="mt-4">
                <input
                  type="text"
                  value={newTaskContent}
                  onChange={(e) => setNewTaskContent(e.target.value)}
                  className="w-full p-2 rounded bg-gray-200"
                  placeholder={`Add task to ${column.replace('-', ' ')}`}
                />
                <button
                  onClick={() => addTask(column)}
                  className="bg-green-500 text-white px-4 py-2 mt-2 rounded w-full"
                >
                  Add Task
                </button>
              </div>
            </div>
          ))}
        </div>
      </DragDropContext>

      {taskToEdit && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold">Edit Task</h3>
            <textarea
              className="w-full p-2 mt-4 rounded"
              value={taskToEdit.content}
              onChange={(e) => setTaskToEdit({ ...taskToEdit, content: e.target.value })}
            />
            <button
              onClick={updateTask}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setTaskToEdit(null)}
              className="bg-gray-500 text-white px-4 py-2 mt-4 rounded ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
