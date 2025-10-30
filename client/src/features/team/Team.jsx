import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Profile({ member, setHoveredMember }) {
  return (
    <div
      className="relative flex flex-col items-center cursor-pointer mx-6"
      onMouseEnter={() => setHoveredMember(member)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-56 h-56 object-cover rounded-full hover:scale-110 transition-transform"
      />
      <h4 className="mt-4 text-2xl font-semibold text-white">{member.name}</h4>
      <p className="text-gray-300 text-sm text-center mt-1 max-w-xs">{member.role}</p>
      <div className="flex gap-4 mt-2 text-white text-2xl">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}

export default function Team() {
  const [hoveredMember, setHoveredMember] = useState(null);

  const facultyAdvisors = [
    {
      name: 'Dr. Mukhtiyaar Singh',
      role: 'Assistant Professor at Department of Applied Physics, DTU',
      image: '/mukhtiyaar_singh.jpg',
      linkedin: 'https://www.linkedin.com/in/mukhtiyaar-singh',
      email: 'mukhtiyaar.singh@dtu.ac.in',
      speciality: 'Physics & Electronics',
      techStack: ['FPGA', 'Zynq', 'Embedded C'],
    },
    {
      name: 'Dr. Akshay Mann',
      role: 'Assistant Professor at Department of Electronics, DTU',
      image: '/akshay_mann.jpg',
      linkedin: 'https://www.linkedin.com/in/akshay-mann',
      email: 'akshay.mann@dtu.ac.in',
      speciality: 'Microelectronics',
      techStack: ['VLSI', 'Mixed-Signal', 'Semiconductors'],
    },
  ];

  const councilMembers = [
    {
      name: 'Shivary',
      role: 'President',
      image: '/shivay.jpg',
      linkedin: '',
      email: '',
      speciality: 'Leadership & Strategy',
      techStack: ['Management', 'IoT', 'AI/ML'],
    },
    {
      name: 'Shashwat',
      role: 'Treasurer',
      image: '/shashwat.jpg',
      linkedin: '',
      email: '',
      speciality: 'Finance & Operations',
      techStack: ['Team-Building', 'Budgeting'],
    },
    {
      name: 'Shone',
      role: 'Vice President',
      image: '/shone.jpg',
      linkedin: '',
      email: '',
      speciality: 'Public Relations',
      techStack: ['Communication', 'Events'],
    },
    {
      name: 'Keshav',
      role: 'Joint Secretary',
      image: '/keshav.jpg',
      linkedin: '',
      email: '',
      speciality: 'Logistics & Support',
      techStack: ['Coordination', 'Automation'],
    },
    {
      name: 'Abdul',
      role: 'Secretary',
      image: '/abdul.jpg',
      linkedin: '',
      email: '',
      speciality: 'Documentation & Outreach',
      techStack: ['Reporting', 'Community'],
    },
  ];

  const divisionalDirectors = [
    {
      name: 'Rakshit',
      role: 'AI/ML Director',
      image: '/rakshit.jpg',
      linkedin: '',
      email: '',
      speciality: 'Artificial Intelligence',
      techStack: ['Deep Learning', 'TensorFlow'],
    },
    {
      name: 'Harshbir',
      role: 'Electronics Director',
      image: '/harshbir.jpg',
      linkedin: '',
      email: '',
      speciality: 'Electronics & Hardware',
      techStack: ['PCB Design', 'Microcontrollers'],
    },
    {
      name: 'Tanishq',
      role: 'AI/ML Director',
      image: '/tanishq.jpg',
      linkedin: '',
      email: '',
      speciality: 'Machine Learning',
      techStack: ['Python', 'Scikit-Learn'],
    },
    {
      name: 'Prince',
      role: 'Software Director',
      image: '/prince.jpg',
      linkedin: '',
      email: '',
      speciality: 'Software Development',
      techStack: ['React', 'Node.js'],
    },
    {
      name: 'Prashant',
      role: 'Electronics Director',
      image: '/prashant.jpg',
      linkedin: '',
      email: '',
      speciality: 'Embedded Systems',
      techStack: ['C', 'RTOS'],
    },
    {
      name: 'Abhideep',
      role: 'Quantum Computing Director',
      image: '/abhideep.jpg',
      linkedin: '',
      email: '',
      speciality: 'Quantum Computing',
      techStack: ['Qiskit', 'Quantum Algorithms'],
    },
  ];

  const departmentalDirectors = [
    {
      name: 'Piyush',
      role: 'Project Director',
      image: '/piyush.jpg',
      linkedin: '',
      email: '',
      speciality: 'Project Management',
      techStack: ['Agile', 'Scrum'],
    },
    {
      name: 'Rajat',
      role: 'Corporate Director',
      image: '/rajat.jpg',
      linkedin: '',
      email: '',
      speciality: 'Business Strategy',
      techStack: ['Partnerships', 'Marketing'],
    },
    {
      name: 'Khush',
      role: 'Event Director',
      image: '/khush.jpg',
      linkedin: '',
      email: '',
      speciality: 'Event Planning',
      techStack: ['Logistics', 'Design'],
    },
    {
      name: 'Azhar',
      role: 'Design Director',
      image: '/azhar.jpg',
      linkedin: '',
      email: '',
      speciality: 'UX/UI & Graphics',
      techStack: ['Figma', 'Illustrator'],
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">Our Team</h2>
      </div>

      <div className="mb-12 text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-white">Faculty Advisors</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {facultyAdvisors.map((member, idx) => (
            <Profile key={idx} member={member} setHoveredMember={setHoveredMember} />
          ))}
        </div>
      </div>

      <div className="mb-12 text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-white">Council Members</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {councilMembers.map((member, idx) => (
            <Profile key={idx} member={member} setHoveredMember={setHoveredMember} />
          ))}
        </div>
      </div>

      <div className="mb-12 text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-white">Divisional Directors</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {divisionalDirectors.map((member, idx) => (
            <Profile key={idx} member={member} setHoveredMember={setHoveredMember} />
          ))}
        </div>
      </div>

      <div className="mb-12 text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-white">Departmental Directors</h3>
        <div className="flex justify-center gap-12 flex-wrap">
          {departmentalDirectors.map((member, idx) => (
            <Profile key={idx} member={member} setHoveredMember={setHoveredMember} />
          ))}
        </div>
      </div>

      {hoveredMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black bg-opacity-80 text-white rounded-lg p-6 max-w-sm w-full pointer-events-auto shadow-xl">
            <p className="font-semibold mb-2 text-lg">Speciality:</p>
            <p className="font-bold text-xl mb-4">{hoveredMember.speciality}</p>
            <p className="font-semibold mb-2 text-lg">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {hoveredMember.techStack.map((tech, idx) => (
                <span key={idx} className="text-gray-300">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
