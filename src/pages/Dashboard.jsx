import { summary } from '../stats'
import StatusChart from '../components/StatusChart'
import CategoryChart from '../components/CategoryChart'
import PerformanceChart from '../components/PerformanceChart'

export default function Dashboard({ board }) {
  const { tasks, categories } = board
  const s = summary(tasks)

  const cards = [
    { label: 'Total Tasks', value: s.total },
    { label: 'TO DO', value: s.todo },
    { label: 'DOING', value: s.doing },
    { label: 'DONE', value: s.done },
    { label: 'Overdue', value: s.overdue },
  ]

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="cards">
        {cards.map((c) => (
          <div className="stat" key={c.label}>
            <div className="stat-value">{c.value}</div>
            <div className="stat-label">{c.label}</div>
          </div>
        ))}
      </div>

      <div className="panels">
        <StatusChart tasks={tasks} />
        <CategoryChart tasks={tasks} categories={categories} />
        <PerformanceChart tasks={tasks} />
      </div>
    </div>
  )
}
