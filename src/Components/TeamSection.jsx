import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/content/team";

// Default team data (fallback)
const defaultTeamData = {
  sectionSubtitle: "Our Team",
  sectionTitle: "Meet our expert Team",
  members: [
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      name: "Hariom",
      designation: "IT Team Head",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      name: "Rahul Kumar Yadav",
      designation: "Senior Developer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      name: "Chandeep Singh",
      designation: "Senior Sales Manager",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      name: "Ashmeet",
      designation: "Social Media Manager",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      name: "Zoya",
      designation: "HR",
    },
  ],
};

export default function TeamSection() {
  const [teamData, setTeamData] = useState(defaultTeamData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTeamData() {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (json.success && json.data) {
          setTeamData({
            sectionSubtitle:
              json.data.sectionSubtitle || defaultTeamData.sectionSubtitle,
            sectionTitle:
              json.data.sectionTitle || defaultTeamData.sectionTitle,
            members:
              Array.isArray(json.data.members) &&
              json.data.members.length > 0
                ? json.data.members
                : defaultTeamData.members,
          });
        } else {
          setTeamData(defaultTeamData);
        }
      } catch (e) {
        setTeamData(defaultTeamData);
      }

      setLoading(false);
    }

    loadTeamData();
  }, []);

  if (loading) {
    return (
      <div className="py-10 bg-orange-50 text-center">
        <p className="text-gray-500">Loading Team...</p>
      </div>
    );
  }

  return (
    <div className="py-7 bg-orange-50">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 px-4">
        <h5 className="text-blue-600 text-xl font-semibold mb-4">
          {teamData.sectionSubtitle}
        </h5>
        <h1 className="text-4xl font-bold text-gray-900">
          {teamData.sectionTitle}
        </h1>
      </div>

      {/* Scrolling Slider */}
      <div className="relative w-full overflow-hidden py-6">
        <div
          className="flex gap-8 pl-4"
          style={{
            animation: "scrollX 40s linear infinite",
            width: "fit-content",
            minWidth: "200%",
          }}
        >
          {[...teamData.members, ...teamData.members].map((m, i) => (
            <div key={i} className="group flex-shrink-0" style={{ width: 300 }}>
              {/* Card Container */}
              <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-t-full pt-8 relative">
                {/* Diamond */}
                <div className="w-full h-48 flex items-center justify-center">
                  <div className="w-32 h-32 bg-yellow-500 transform rotate-45 relative">
                    <div className="absolute inset-4 bg-yellow-600 transform -rotate-45"></div>
                  </div>
                </div>

                {/* Member */}
                <div className="relative -mt-40 px-8 pb-8">
                  <div className="relative mx-auto w-32 h-32 mb-6">
                    <div className="w-full h-full rounded-full border-8 border-white overflow-hidden">
                      <img
                        src={m.image}
                        alt={m.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-yellow-500"></div>
                  </div>

                  <div className="text-center text-white">
                    <h4 className="text-xl font-bold mb-2">{m.name}</h4>
                    <p className="text-gray-100">{m.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-66.666%); }
          }
        `}</style>
      </div>
    </div>
  );
}
