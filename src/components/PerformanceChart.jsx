import {
  Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { completionPerformance } from '../stats'

const COLORS = ['#16a34a', '#3b82f6', '#dc2626']

export default function PerformanceChart({ tasks }) {
  const data = completionPerformance(tasks)

  return (
    <div className="panel">
      <h2>Completion Performance</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="value" name="Done tasks" isAnimationActive={false}>
            {data.map((entry, i) => (
              <Cell key={entry.name} fill={COLORS[i % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="hint">Compares each finished task's complete date with its due date.</p>
    </div>
  )
}
