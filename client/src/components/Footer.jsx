import { NavLink } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 mt-48">
      <div className="text-center space-y-6">
        <p className="text-sm">
          Need help? Email{' '}
          <a href="mailto:contact@semicondtu.com" className="text-gray-400 hover:text-white underline">
            contact@semicondtu.com
          </a>
        </p>
        <div className="flex justify-center space-x-6">
          <a target="_blank" href="https://www.linkedin.com/company/semicon-society/" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a target="_blank" href="https://www.instagram.com/semicondtu?igsh=dnB3azB1YXdzamky" className="text-gray-400 hover:text-white" aria-label="Instagram">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>
        <div>
          <p className="font-bold text-gray-400 text-sm">HELPFUL LINKS</p>
          <div className="flex justify-center space-x-4 mt-2">
            <NavLink to="#articles" className="text-gray-400 hover:text-white text-sm">Blogs</NavLink>
            <NavLink to="#projects" className="text-gray-400 hover:text-white text-sm">Projects</NavLink>
            <NavLink to="#about" className="text-gray-400 hover:text-white text-sm">About</NavLink>
            <NavLink to="#events" className="text-gray-400 hover:text-white text-sm">Events</NavLink>
          </div>
        </div>
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Semicon DTU. All rights reserved.</p>
      </div>
    </footer>
  );
}
