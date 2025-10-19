export default function Provide() {
  const labs = [
    {
      title: "High-End PC Lab – 32 GB RAM, Windows & Linux Stations",
      image: "/images/lab_pc_high_end.jpg"
    },
    {
      title: "Free Hardware Access Lab – FPGA, SoC Boards (ZCU104, PYNQ, RFSoC)",
      image: "/images/lab_hardware_boards.jpg"
    }
  ];
  const hardware = [
    {
      title: "NVIDIA Jetson Nano Developer Kit",
      image: "/images/jetson_nano.jpg"
    },
    {
      title: "Xilinx Zynq UltraScale+ ZCU104 Evaluation Board",
      image: "/images/zcu104_board.jpg"
    },
    {
      title: "PYNQ Python on Zynq Board",
      image: "/images/pynq_board.jpg"
    },
    {
      title: "RFSoC Board – High-Speed Digitizer & FPGA Integration",
      image: "/images/rfsoc_board.jpg"
    },
    {
      title: "Mixed SoC/FPGA Board – Accelerated Embedded Prototyping",
      image: "/images/soc_fpga_board.jpg"
    }
  ];

  return (
    <section className="w-full bg-black text-white py-16 px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8">Labs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <img src={lab.image} alt={lab.title} className="w-60 h-60 object-cover rounded-full mb-4 border-4 border-white/20" />
              <h3 className="text-2xl font-semibold text-center">{lab.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-8">Hardware Access</h2>
        <div className="relative w-full max-w-5xl mx-auto mb-12">
          <div className="flex justify-center mb-8">
            <div className="w-56 h-56 object-cover rounded-full overflow-hidden border-4 border-white/20">
              <img src={hardware[0].image} alt={hardware[0].title} className="w-full h-full object-cover" />
            </div>
            <h4 className="absolute bottom-0 text-lg font-medium text-center w-full text-gray-300 mt-4">{hardware[0].title}</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {hardware.slice(1).map((hw, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                <img src={hw.image} alt={hw.title} className="w-36 h-36 object-cover rounded-full mb-2 border-2 border-white/10" />
                <h4 className="text-lg font-medium text-center">{hw.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
