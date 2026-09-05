import { useState } from 'react'
import { PEOPLE, STATUSES } from '../constants'

const EMPTY = {
  title: '',
  description: '',
  category: '',
  startDate: '',
  dueDate: '',
  completeDate: '',
  personId: '',
  status: 'TO DO',
}

export default function TaskForm({ task, categories, onSave, onCancel, onAddCategory }) {
  const [form, setForm] = useState(task ? { ...EMPTY, ...task } : { ...EMPTY })
  const [newCategory, setNewCategory] = useState('')

  function set(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleAddCategory() {
    const clean = newCategory.trim()
    if (!clean) return
    onAddCategory(clean)
    set('category', clean)
    setNewCategory('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) return
    // A task only carries a complete date while it sits in DONE.
    onSave({ ...form, completeDate: form.status === 'DONE' ? form.completeDate : '' })
  }

  return (
    <div className="modal-backdrop">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>{task ? 'Edit Task' : 'New Task'}</h2>

        <label>Title
          <input value={form.title} onChange={(e) => set('title', e.target.value)} required />
        </label>

        <label>Description
          <textarea value={form.description} onChange={(e) => set('description', e.target.value)} />
        </label>

        <label>Category
          <select value={form.category} onChange={(e) => set('category', e.target.value)}>
            <option value="">-- select --</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>

        <div className="row">
          <input
            placeholder="New category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="button" onClick={handleAddCategory}>Add category</button>
        </div>

        <label>Responsible person
          <select value={form.personId} onChange={(e) => set('personId', e.target.value)}>
            <option value="">-- select --</option>
            {PEOPLE.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>

        <label>Start date
          <input type="date" value={form.startDate} onChange={(e) => set('startDate', e.target.value)} />
        </label>

        <label>Due date
          <input type="date" value={form.dueDate} onChange={(e) => set('dueDate', e.target.value)} />
        </label>

        <label>Status
          <select value={form.status} onChange={(e) => set('status', e.target.value)}>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>

        {form.status === 'DONE' && (
          <label>Complete date
            <input
              type="date"
              value={form.completeDate}
              onChange={(e) => set('completeDate', e.target.value)}
            />
          </label>
        )}

        <div className="row">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
