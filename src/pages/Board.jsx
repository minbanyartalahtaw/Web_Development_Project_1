import { useState } from 'react'
import { STATUSES } from '../constants'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

export default function Board({ board }) {
  const { tasks, categories, addTask, updateTask, deleteTask, moveTask, addCategory } = board
  const [editing, setEditing] = useState(null) // null = closed, {} = new task

  function handleSave(data) {
    if (editing && editing.id) updateTask(editing.id, data)
    else addTask(data)
    setEditing(null)
  }

  function handleDelete(id) {
    if (confirm('Delete this task?')) deleteTask(id)
  }

  return (
    <div>
      <div className="page-head">
        <h1>Kanban Board</h1>
        <button onClick={() => setEditing({})}>+ New Task</button>
      </div>

      <div className="columns">
        {STATUSES.map((status) => {
          const list = tasks.filter((t) => t.status === status)
          return (
            <section className="column" key={status}>
              <h2>{status} <span className="count">{list.length}</span></h2>
              {list.length === 0 && <p className="empty">No tasks</p>}
              {list.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={setEditing}
                  onDelete={handleDelete}
                  onMove={moveTask}
                />
              ))}
            </section>
          )
        })}
      </div>

      {editing && (
        <TaskForm
          task={editing.id ? editing : null}
          categories={categories}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
          onAddCategory={addCategory}
        />
      )}
    </div>
  )
}
