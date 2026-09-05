// The three Kanban columns / task statuses.
export const STATUSES = ['TO DO', 'DOING', 'DONE']

// Responsible person data is provided by the assignment; we do not manage it.
export const PEOPLE = [
  { id: 'P01', name: 'Somchai Jaidee' },
  { id: 'P02', name: 'Napaporn Srisuk' },
  { id: 'P03', name: 'Kittipong Wong' },
  { id: 'P04', name: 'Arisa Chaiyo' },
  { id: 'P05', name: 'Peerapat Boonmee' },
]

export const DEFAULT_CATEGORIES = ['General', 'Design', 'Development', 'Testing']

export function personName(personId) {
  const person = PEOPLE.find((p) => p.id === personId)
  return person ? person.name : 'Unassigned'
}
