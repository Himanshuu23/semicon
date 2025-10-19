import Marquee from 'react-fast-marquee';

export default function PremiumSoftwareTicker() {
  const items = [
    { name: "Cadence", img: "/logos/cadence.png" },
    { name: "Vivado HLx Edition", img: "/logos/vivado-hlx.png" },
    { name: "Altium Designer", img: "/logos/altium.png" },
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-black py-4 overflow-none">
      <h2 className="text-white text-2xl font-bold text-center mb-2">
        Subscription of Premium Software
      </h2>
      <Marquee
        speed={40}
        pauseOnHover={true}
        gradient={false}
        direction="left"
        className="flex items-center space-x-8"
      >
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 object-contain"
            />
            <span className="text-white text-lg font-medium ml-2">
              {item.name}
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
