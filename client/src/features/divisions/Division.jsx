import { useState, useEffect } from 'react';

const roles = [
  'Electronics',
  'Software',
  'AI/ML',
  'Embedded',
  'Robotics',
  'Data Science',
  'Security',
  'IoT',
  'Blockchain',
];

const roleDescriptions = {
  'Electronics': 'Design and development of electronic circuits and systems.',
  'Software': 'Programming and software development practices.',
  'AI/ML': 'Artificial Intelligence and Machine Learning technologies.',
  'Embedded': 'Embedded systems and firmware development.',
  'Robotics': 'Design and programming of robotic systems.',
  'Data Science': 'Data analysis and machine learning techniques.',
  'Security': 'Cybersecurity and information protection.',
  'IoT': 'Internet of Things devices and applications.',
  'Blockchain': 'Blockchain technology and decentralized applications.',
};

export default function Divisions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="relative w-full h-[100vh] bg-black text-white">
      <h2 className="text-4xl font-semibold text-center py-8">Divisions</h2>
      <div className="flex justify-center items-center space-x-8">
        {/* Carousel */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
            {roles.map((role, index) => (
              <div
                key={index}
                className={`carousel-item w-full h-full flex justify-center items-center transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-50'
                }`}
              >
                <div className="flex items-center justify-center w-24 h-24 bg-gray-700 rounded-full text-4xl">
                  {/* Placeholder for images */}
                  <span>{role[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role Description */}
        <div className="w-1/2 p-8">
          <h3 className="text-2xl font-semibold mb-4">{roles[currentIndex]}</h3>
          <p>{roleDescriptions[roles[currentIndex]]}</p>
        </div>
      </div>
    </section>
  );
}
