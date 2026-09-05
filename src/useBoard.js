import { useEffect, useState } from 'react'
import { DEFAULT_CATEGORIES } from './constants'
import { loadFromStorage, saveToStorage } from './storage'
import { SAMPLE_TASKS } from './sampleTasks'

const TASKS_KEY = 'kanban.tasks'
const CATEGORIES_KEY = 'kanban.categories'

// Holds every task and category, and keeps both in sync with Local Storage.
export function useBoard() {
  const [tasks, setTasks] = useState(() => loadFromStorage(TASKS_KEY, SAMPLE_TASKS))
  const [categories, setCategories] = useState(() =>
    loadFromStorage(CATEGORIES_KEY, DEFAULT_CATEGORIES)
  )

  useEffect(() => saveToStorage(TASKS_KEY, tasks), [tasks])
  useEffect(() => saveToStorage(CATEGORIES_KEY, categories), [categories])

  function addTask(task) {
    setTasks((prev) => [...prev, { ...task, id: crypto.randomUUID() }])
  }

  function updateTask(id, changes) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...changes } : t)))
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  // Moving to DONE stamps today's date; moving back out clears it.
  function moveTask(id, status) {
    const today = new Date().toISOString().slice(0, 10)
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t
        return {
          ...t,
          status,
          completeDate: status === 'DONE' ? t.completeDate || today : '',
        }
      })
    )
  }

  function addCategory(name) {
    const clean = name.trim()
    if (!clean || categories.includes(clean)) return
    setCategories((prev) => [...prev, clean])
  }

  return { tasks, categories, addTask, updateTask, deleteTask, moveTask, addCategory }
}
