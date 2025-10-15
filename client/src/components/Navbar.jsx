import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <NavLink to="/" className="font-bold text-xl">Semicon DTU</NavLink>
      <div className="space-x-4">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/team">Team</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  )
}
