import { useState } from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiPytorch, SiTensorflow, SiZig } from 'react-icons/si';

const teamMembers = [
  {
    name: 'Dr. Alice Johnson',
    role: 'Faculty Advisor',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    linkedin: 'https://www.linkedin.com/in/alice-johnson',
    email: 'alice.johnson@example.com',
    speciality: 'Embedded Systems',
    techStack: [<SiPython />, <SiCplusplus />, <SiPytorch />],
  },
  {
    name: 'Prof. Bob Smith',
    role: 'Faculty Advisor',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    linkedin: 'https://www.linkedin.com/in/bob-smith',
    email: 'bob.smith@example.com',
    speciality: 'Digital Design',
    techStack: [],
  },
  // Add more team members here...
];

function Profile({ member, setHoveredMember }) {
  return (
    <div
      className="relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setHoveredMember(member)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-52 h-52 object-cover rounded-full hover:scale-110 transition-transform"
      />
      <h4 className="mt-4 text-2xl font-semibold text-white">{member.name}</h4>
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

  return (
    <section className="bg-black text-white py-16 min-h-screen relative">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold">Our Team</h2>
      </div>

      <div className="mb-12 text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-blue-400">Faculty Advisors</h3>
        <div className="flex justify-center gap-16 flex-wrap">
          {teamMembers.map((member, index) => (
            <Profile key={index} member={member} setHoveredMember={setHoveredMember} />
          ))}
        </div>
      </div>

      {hoveredMember && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black bg-opacity-80 text-white rounded-lg p-6 max-w-xs w-full pointer-events-auto shadow-xl">
            <p className="font-semibold mb-2 text-lg">Speciality:</p>
            <p className="font-bold text-xl mb-4">{hoveredMember.speciality}</p>
            <p className="font-semibold mb-2 text-lg">Tech Stack:</p>
            <div className="flex gap-2 mb-4">
              {hoveredMember.techStack.map((Icon, idx) => (
                <div key={idx} className="text-2xl">{Icon}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
