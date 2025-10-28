export default function Provide() {
  const labs = [
    {
      title: "High-End PC Lab – 32 GB RAM, Windows & Linux Stations",
      image: "/computing_lab.jpg",
    },
    {
      title: "Free Hardware Access Lab – FPGA, SoC Boards (ZCU104, PYNQ, RFSoC)",
      image: "/workshop_lab.jpg",
    },
  ];

  const hardware = [
    {
      title: "NVIDIA Jetson Nano Developer Kit – Edge AI and Vision Applications",
      image: "/jetson_nano.png",
    },
    {
      title: "Xilinx Zynq UltraScale+ ZCU104 Evaluation Board – SoC Development",
      image: "/xilinx_zynq.jpg",
    },
    {
      title: "PYNQ Python on Zynq Board – Python-Based FPGA Acceleration",
      image: "/pynq.jpg",
    },
    {
      title: "RFSoC Board – High-Speed Digitizer & FPGA Integration",
      image: "/zynq.jpg",
    },
    {
      title: "AMD Mixed SoC/FPGA Board – Accelerated Embedded Prototyping",
      image: "/amd_zynq.jpg",
    },
    {
      title: "Boolean Development Board – Compact, Open-Source Hardware Platform",
      image: "/boolean.jpg",
    },
  ];

  const handleLabClick = () => {
    window.open("https://www.google.com/maps?q=DTU+AB3+8th+Floor", "_blank");
  };

  return (
    <section className="w-full bg-black text-white py-16 px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-white">Labs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, idx) => (
<div
  key={idx}
  onClick={handleLabClick}
  className="flex flex-col items-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pin"
>
              <img
                src={lab.image}
                alt={lab.title}
                className="w-full h-72 object-cover rounded-lg mb-4 border-4 border-white/20"
              />
              <h3 className="text-2xl font-semibold text-center">{lab.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-8 text-white">Hardware Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {hardware.map((hw, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors w-full max-w-sm"
            >
              <img
                src={hw.image}
                alt={hw.title}
                className="w-full h-64 object-cover rounded-lg mb-4 border-2 border-white/10"
              />
              <h4 className="text-lg font-medium text-center">{hw.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
