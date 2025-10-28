import { Link } from 'react-router-dom';

export default function EventsPage() {
  return (
    <section id="events" className="bg-black text-white py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Events</h1>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">2025 Semicon Expo</h2>
          <p className="text-gray-400">
            A premier gathering of industry professionals and enthusiasts exploring the latest in electronics, embedded systems & FPGA technologies.
          </p>
          <Link
            to="/events/2025-semicon-expo"
            className="inline-block text-lg text-blue-400 hover:text-blue-300"
          >
            Know more →
          </Link>
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <img src="/events_1.jpg" alt="Event 1" className="w-full h-40 object-cover rounded-lg" />
          <img src="/events_2.jpg" alt="Event 2" classname="w-full h-40 object-cover rounded-lg" />
          <img src="/events_3.jpg" alt="Event 3" className="w-full h-40 object-cover rounded-lg" />
          <img src="/events_4.jpg" alt="Event 4" className="w-full h-40 object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
}
