import { STATUSES, personName } from '../constants'

export default function TaskCard({ task, onEdit, onDelete, onMove }) {
  const overdue =
    task.status !== 'DONE' && task.dueDate && task.dueDate < new Date().toISOString().slice(0, 10)

  return (
    <div className={`card ${overdue ? 'card-overdue' : ''}`}>
      <div className="card-title">{task.title}</div>
      {task.description && <p className="card-desc">{task.description}</p>}

      <ul className="card-meta">
        <li><b>Category:</b> {task.category || '-'}</li>
        <li><b>Responsible:</b> {personName(task.personId)}</li>
        <li><b>Start:</b> {task.startDate || '-'}</li>
        <li><b>Due:</b> {task.dueDate || '-'}{overdue && ' (overdue)'}</li>
        <li><b>Complete:</b> {task.completeDate || '-'}</li>
      </ul>

      <div className="card-actions">
        <select value={task.status} onChange={(e) => onMove(task.id, e.target.value)}>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  )
}
