import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Projects</h1>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <video
            src="/ZYNQ_Video_Streaming.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-white">Video Processing on ZYNQ</h2>

          <Link
            to="/projects/video-processing-on-zynq"
            className="inline-block text-lg text-blue-400 hover:text-blue-300"
          >
            Know more →
          </Link>

          <p className="text-sm text-gray-400">
            Made by{' '}
            <a
              href="https://www.linkedin.com/in/harshbir-singh06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              Harshbir Singh
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
