import { STATUSES } from './constants'

const today = () => new Date().toISOString().slice(0, 10)

export function isOverdue(task) {
  return task.status !== 'DONE' && !!task.dueDate && task.dueDate < today()
}

export function summary(tasks) {
  return {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === 'TO DO').length,
    doing: tasks.filter((t) => t.status === 'DOING').length,
    done: tasks.filter((t) => t.status === 'DONE').length,
    overdue: tasks.filter(isOverdue).length,
  }
}

export function byStatus(tasks) {
  return STATUSES.map((status) => ({
    name: status,
    value: tasks.filter((t) => t.status === status).length,
  }))
}

export function byCategory(tasks, categories) {
  const names = [...new Set([...categories, ...tasks.map((t) => t.category)])].filter(Boolean)
  return names.map((name) => ({
    name,
    value: tasks.filter((t) => t.category === name).length,
  }))
}

// Compares complete date against due date for every DONE task that has both.
export function completionPerformance(tasks) {
  const result = { Early: 0, 'On Time': 0, Late: 0 }
  tasks
    .filter((t) => t.status === 'DONE' && t.completeDate && t.dueDate)
    .forEach((t) => {
      if (t.completeDate < t.dueDate) result.Early += 1
      else if (t.completeDate === t.dueDate) result['On Time'] += 1
      else result.Late += 1
    })
  return Object.entries(result).map(([name, value]) => ({ name, value }))
}
