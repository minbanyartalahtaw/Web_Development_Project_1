import { HashRouter, Link, Route, Routes, NavLink } from 'react-router-dom'
import { useBoard } from './useBoard'
import Board from './pages/Board'
import Dashboard from './pages/Dashboard'

export default function App() {
  const board = useBoard()

  return (
    // HashRouter avoids 404s on GitHub Pages, which serves static files only.
    <HashRouter>
      <nav className="nav">
        <Link className="brand" to="/">Kanban</Link>
        <NavLink to="/">Board</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <main className="main">
        <Routes>
          <Route path="/" element={<Board board={board} />} />
          <Route path="/dashboard" element={<Dashboard board={board} />} />
        </Routes>
      </main>
    </HashRouter>
  )
}
