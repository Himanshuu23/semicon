import { Link } from 'react-router-dom'
import Contact from '../features/contact/Contact'

export default function HomePage() {
  return (
    <div className="space-y-16 p-8 text-center">
      <section>
        <h1 className="text-4xl font-bold">Semicon DTU</h1>
        <p className="mt-3">Innovating the Future of Electronics</p>
        <div className="mt-6 space-x-4">
          <Link to="/contact" className="underline">Join Us</Link>
          <a href="#about" className="underline">Know More</a>
        </div>
      </section>

      <section id="about">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p>Our mission, vision, and purpose.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">What We Do</h2>
        <div className="space-x-4">
          <Link to="/projects" className="underline">Projects</Link>
          <Link to="/events" className="underline">Events</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Divisions</h2>
        <div className="space-x-4">
          <Link to="/division/quantum" className="underline">Quantum</Link>
          <Link to="/division/ai-ml" className="underline">AI/ML</Link>
          <Link to="/division/electrical" className="underline">Electrical</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Sponsors & Speakers</h2>
        <p>Details about sponsors.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <Link to="/team" className="underline">See Full Team</Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Articles</h2>
        <Link to="/articles/1" className="underline">Read More</Link>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Join Us</h2>
        <Contact />
      </section>
    </div>
  )
}
