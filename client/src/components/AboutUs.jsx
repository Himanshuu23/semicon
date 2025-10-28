import { useState, useEffect, useRef } from 'react';

export default function AboutUsCarousel() {
  const slides = [
    {
      type: 'intro',
      image: '/vinod_dham.jpg',
      heading: 'Semicon DTU & VDSemix',
      name: 'Shri Vinod Dham',
      subtitle: 'Father of the Pentium Chips',
      textLines: [
        'Semicon DTU was co-founded alongside the Vinod Dham Centre of Excellence (VDSemix).',
        'Promoting research and innovation in semiconductors and microelectronics.',
      ],
    },
    {
      type: 'whatWeDo',
      image: '/dtu.jpg',
      heading: 'What We Do',
      textLines: [
        'Hands-on access to advanced hardware & systems.',
        'Mentorship from industry experts and peer collaboration.',
        'Driven practical experience in electronics, embedded systems & AI/ML.',
      ],
    },
    {
      type: 'advantages',
      heading: 'Advantages You Get',
      points: [
        {
          title: 'Hands-on Technical Learning',
          desc: 'Live labs, guided workshops, real hardware exposure.',
        },
        {
          title: 'Industry Connect',
          desc: 'Direct mentorship and sessions with semiconductor professionals.',
        },
        {
          title: 'Research & Projects',
          desc: 'Design challenges, paper publications, real-world impact.',
        },
        {
          title: 'Events & Competitions',
          desc: 'Hackathons, national contests, innovation showcases.',
        },
        {
          title: 'Community & Growth',
          desc: 'Member-driven club, shared goals, hardware ecosystem.',
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const slideCount = slides.length;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prev) => (prev + 1) % slideCount),
      6000
    );
    return () => resetTimeout();
  }, [currentIndex, slideCount]);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slideCount);

  const slide = slides[currentIndex];

  return (
    <section
      id="about"
      className="relative w-full h-screen overflow-hidden bg-black text-white flex flex-col justify-center items-center"
    >
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        {'<'}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full"
      >
        {'>'}
      </button>

      <div className="w-full max-w-5xl px-8">
        {slide.type === 'advantages' ? (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-10">{slide.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.points.map((point, i) => (
                <div
                  key={i}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 border border-white/20 max-h-20 hover:max-h-64 flex flex-col justify-start p-4"
                >
                  <div className="text-xl font-semibold mb-2">
                    {point.title}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-300">
                    {point.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : slide.type === 'whatWeDo' ? (
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg text-gray-300 space-y-2">
                {slide.textLines.map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-72 h-72 object-cover rounded-full"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="text-left md:text-left md:w-2/3">
              <h2 className="text-4xl font-bold mb-4">{slide.heading}</h2>
              <p className="text-lg text-gray-300 space-y-2">
                {slide.textLines.map((line, idx) => (
                  <span key={idx} className="block">{line}</span>
                ))}
              </p>
            </div>
            <div className="flex-shrink-0 text-center md:w-1/3">
              <img
                src={slide.image}
                alt={slide.name}
                style={{ transform: 'translateX(50px)' }}
                className="w-52 h-52 rounded-full object-cover border-4 border-white/40 shadow-lg"
              />
              <h3 className="text-2xl font-semibold mt-4">{slide.name}</h3>
              <p className="text-gray-400">{slide.subtitle}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
