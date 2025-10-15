import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import ProjectsPage from '../features/projects/Projects'
import EventsPage from '../features/events/Events'
import TeamPage from '../features/team/Team'
import ContactPage from '../features/contact/Contact'
import DivisionPage from '../features/divisions/Division'
import ArticlePage from '../features/articles/Article'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/division/:name" element={<DivisionPage />} />
      <Route path="/articles/:id" element={<ArticlePage />} />
    </Routes>
  )
}
