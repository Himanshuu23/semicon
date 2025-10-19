import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section className="flex h-[80vh]">
      <div className="w-1/2 bg-black flex flex-col justify-center items-center px-12">
        <h2 className="text-white text-5xl font-bold mb-8">Join Us</h2>
        <Link to="/register" className="px-8 py-4 text-xl text-black bg-white rounded-full hover:bg-gray-200">
          Register
        </Link>
      </div>
      <div className="w-1/2 bg-black flex flex-col justify-center items-center px-12">
        <form className="w-full max-w-lg space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent text-white text-lg border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent text-white text-lg border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow-md"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            rows="6"
            className="w-full bg-transparent text-white text-lg border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow-md"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 text-black text-lg bg-white rounded-full hover:bg-blue-500 transition-colors duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
