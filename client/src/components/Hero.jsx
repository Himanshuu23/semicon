export default function HeroSection() {
  const roles = ["Electronics", "Software", "AI/ML", "Embedded"];

  return (
    <section className="relative w-full h-screen z-100 bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        src="/hero.mp4"
        autoPlay
        loop
        muted
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">Semicon DTU</h1>
        <p className="max-w-lg text-gray-200">
          Welcome to Semicon DTU — the next-gen innovation society driving the future of electronics, AI, and research at DTU.
        </p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">Explore</button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold">Join Us</button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {roles.map((role, index) => (
            <div key={index} className="px-6 py-3 bg-black/50 rounded-full text-white font-medium">
              {role}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
