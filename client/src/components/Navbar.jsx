import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const [user, setUser] = useState(null);

  const handleLogin = () => {
    setUser({ name: 'John Doe', avatar: '/profile.jpg' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md text-white flex justify-between items-center px-8 py-4">
      {/* Left logo */}
      <div className="flex items-center space-x-4">
        <HashLink to="/" className="flex items-center">
          <img src="/nav_logo.png" alt="Nav Logo" className="h-14 w-auto" />
        </HashLink>
      </div>

      {/* Center navigation links */}
      <div className="flex-1 flex justify-center items-center space-x-16 text-sm font-medium">
        <HashLink smooth to="#projects" className="hover:text-gray-300">Projects</HashLink>
        <HashLink smooth to="#events" className="hover:text-gray-300">Events</HashLink>
        <HashLink to="/" className="flex items-end transform translate-y-10">
          <img src="/logo.png" alt="Semicon Logo" className="h-12 w-12" />
        </HashLink>
        <HashLink smooth to="#articles" className="hover:text-gray-300">Blogs</HashLink>
        <HashLink smooth to="#contact" className="hover:text-gray-300">Contact</HashLink>
      </div>

      {/* Right login/logout */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-2">
            <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full object-cover" />
            <button onClick={handleLogout} className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="px-4 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
