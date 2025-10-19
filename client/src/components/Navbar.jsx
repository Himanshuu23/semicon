import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md text-white flex justify-center items-center px-8 py-4">
        <div className="flex items-center space-x-16 text-sm font-medium">
          <NavLink to="/projects" className="hover:text-gray-300">Projects</NavLink>
          <NavLink to="/events" className="hover:text-gray-300">Events</NavLink>
          <NavLink to="/" className="flex items-end transform translate-y-10">
            <img src="/logo.svg" alt="Semicon Logo" className="h-12 w-12" />
          </NavLink>
          <NavLink to="/blogs" className="hover:text-gray-300">Blogs</NavLink>
          <NavLink to="/contact" className="hover:text-gray-300">Contact</NavLink>
        </div>
      </nav>
    </>
  );
}
