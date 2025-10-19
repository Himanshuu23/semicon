import { useState, useEffect, useRef } from 'react';

export default function AboutUsCarousel() {
  const slides = [
    {
      type: 'intro',
      image: '/images/team-circle.png',
      heading: 'Welcome to Our Mission',
      text: 'We are pioneers in cutting-edge electronics, software and AI/ML development.'
    },
    {
      type: 'whatWeDo',
      heading: 'What We Do',
      points: [
        'Electronics Design & Fabrication',
        'Embedded Systems & IoT Solutions',
        'AI/ML Model Development',
        'Robotics & Automation',
        'Security & Blockchain Integration'
      ]
    },
    {
      type: 'vision',
      image: '/images/vision-circle.png',
      heading: 'Join Our Vision',
      text: 'Innovate with us in the realms of semiconductors, software and intelligent systems.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const slideCount = slides.length;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount),
      5000
    );
    return () => {
      resetTimeout();
    };
  }, [currentIndex, slideCount]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideCount - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button onClick={prevSlide} className="p-4 text-white bg-white/10 hover:bg-white/20 rounded-full ml-4">
          {'<'}
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button onClick={nextSlide} className="p-4 text-white bg-white/10 hover:bg-white/20 rounded-full mr-4">
          {'>'}
        </button>
      </div>
      <div
        className="whitespace-nowrap transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="inline-block w-full h-full align-top">
            {slide.type === 'whatWeDo' ? (
              <div className="flex h-full items-center justify-center px-12">
                <div className="max-w-2xl text-center">
                  <h2 className="text-4xl font-bold mb-8">{slide.heading}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                    {slide.points.map((point, i) => (
                      <div key={i} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center px-12">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {slide.image && (
                    <div className="flex-shrink-0">
                      <img src={slide.image} alt="" className="w-40 h-40 rounded-full object-cover border-4 border-white/30" />
                    </div>
                  )}
                  <div className="text-center md:text-left max-w-lg">
                    <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
                    <p className="text-lg text-gray-300">{slide.text}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
