import Marquee from 'react-fast-marquee';

export default function PremiumSoftwareTicker() {
  const items = [
    { name: "Cadence", img: "/cadence.jpg" },
    { name: "Vivado HLx Edition", img: "/vivado.jpg" },
    { name: "Altium Designer", img: "/altium.jpg" },
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-black py-6 overflow-none">
      <h2 className="text-white text-2xl font-bold text-center mb-4">
        Subscription of Premium Software
      </h2>
      <Marquee
        speed={40}
        gradient={false}
        direction="left"
        className="flex items-center space-x-16"
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center mx-12">
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
