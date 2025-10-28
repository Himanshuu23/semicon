import { Link } from 'react-router-dom';

export default function Articles() {
const cards = [
  { title: "Getting Started with Zynq SoCs", id: "getting-started-zynq-socs", tags: ["FPGA", "Semiconductor"], author: "Harshbir Singh" },
  { title: "AI & ML Trends in Embedded Systems", id: "ai-ml-embedded-systems", tags: ["AI/ML", "Embedded"], author: "Tanishq" },
  { title: "Designing Custom FPGAs for IoT Applications", id: "custom-fpga-iot", tags: ["FPGA", "IoT"], author: "Prince" },
  { title: "Introduction to PYNQ Python on Zynq", id: "introduction-pynq", tags: ["PYNQ", "Python"], author: "Abhideep" },
  { title: "Semiconductor Fabrication: What You Should Know", id: "semiconductor-fabrication-basics", tags: ["Semiconductor", "Manufacturing"], author: "Prashant" },
  { title: "Embedded Electronics for Autonomous Vehicles", id: "embedded-electronics-autonomous", tags: ["Embedded", "Electronics"], author: "Rakshit" },
];

  return (
    <div id="articles" className="p-8 bg-black min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map(card => (
          <Link to={`/articles/${card.id}`} key={card.id} className="block transform transition-transform hover:scale-105 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-500 mb-4">by {card.author}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-400">
              {card.tags.map(tag => (
                <span key={tag} className="bg-gray-800 px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/articles" className="inline-block px-8 py-4 bg-white rounded-full text-lg text-black font-medium hover:bg-gray-200 transition-colors">
          View All
        </Link>
      </div>
    </div>
  );
}
