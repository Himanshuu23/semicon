import { useState, useEffect } from 'react';

const divisions = [
  {
    name: "Tech",
    description:
      "This division focuses on Artificial Intelligence, Machine Learning, and Software Development — driving innovation through technology.",
    image: "/tech.jpg",
  },
  {
    name: "Quantum Computing",
    description:
      "Exploring the frontier of Quantum Communication, Quantum Information, and Quantum Materials to shape the future of computation.",
    image: "/quantum.jpg",
  },
  {
    name: "Core",
    description:
      "Comprising Electronics and Electrical Engineering — the foundation that powers hardware innovation and real-world systems.",
    image: "/core.jpg",
  },
];

export default function Divisions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % divisions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = divisions[currentIndex];

  return (
    <section className="relative w-full h-[100vh] bg-black text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-semibold text-center mb-10">Divisions</h2>

      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </div>

        <div className="max-w-md text-center lg:text-left">
          <h3 className="text-2xl font-semibold mb-4">{current.name}</h3>
          <p className="text-gray-300">{current.description}</p>
        </div>
      </div>

      <div className="flex space-x-4 mt-10">
        {divisions.map((_, idx) => (
          <span
            key={idx}
            className={`transition-all duration-300 ${
              idx === currentIndex ? "w-4 h-4 bg-white" : "w-3 h-3 bg-gray-500"
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}
