import HeroSection from '../components/Hero'
import AboutUs from '../components/AboutUs'
import { Link } from 'react-router-dom'
import Contact from '../features/contact/Contact'
import Articles from '../features/articles/Article'
import Provide from '../features/provide/Provide'
import Divisions from '../features/divisions/Division'
import Team from '../features/team/Team'
import PremiumSoftwareTicker from '../components/Software'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutUs />
      <Divisions />
      <Provide />
      <PremiumSoftwareTicker />
      <Articles />
      <Team />
      <Contact />
    </div>
  )
}
// projects, events, team }
