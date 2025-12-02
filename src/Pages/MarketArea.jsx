import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollingBanner from '../Components/ScrollingBanner';

const LocalScrollingBanner = () => {
  return null;
};

const LocationCard = ({ name, isHighlighted = false, onClick }) => {
  return (
    <div 
      className={`relative group cursor-pointer transition-all duration-300 ${isHighlighted ? 'transform scale-105' : 'hover:scale-105'}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 backdrop-blur-sm">
        {/* Circuit pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0">
            {/* Simplified circuit pattern using CSS */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-4 left-6 w-8 h-px bg-cyan-400"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute top-4 right-6 w-8 h-px bg-cyan-400"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute bottom-4 left-6 w-8 h-px bg-cyan-400"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute bottom-4 right-6 w-8 h-px bg-cyan-400"></div>
          </div>
        </div>

        {/* Glowing accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-6 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg tracking-wide">{name}</h3>
            <div className="flex items-center space-x-2">
              {/* Circuit node indicator */}
              <div className="relative">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
              </div>
              {/* Connection lines */}
              <div className="w-8 h-px bg-gradient-to-r from-cyan-400 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
      </div>
    </div>
  );
};

const LocalAreaCard = ({ name, onClick }) => {
  return (
    <div 
      className="relative group cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-teal-900 to-cyan-950 border border-cyan-700/50 backdrop-blur-sm">
        {/* Tech pattern background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* Circuit dots */}
          <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
        </div>

        {/* Glowing accent line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 px-4 py-3">
          <div className="flex items-center justify-between">
            <h4 className="text-white font-medium text-base">{name}</h4>
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-700 to-transparent"></div>
      </div>
    </div>
  );
};

const MarketAreaHeader = () => {
  const navigate = useNavigate();
  const [showLocalAreas, setShowLocalAreas] = useState('all'); // Show all local areas by default

  const locations = [
    { name: 'India', route: '/india' },
    { 
      name: 'Delhi', 
      highlighted: true, 
      route: '/delhi',
      subAreas: [
        { name: 'Rajouri Garden', route: '/delhi/rajouri-garden' },
        { name: 'Tilak Nagar', route: '/delhi/tilak-nagar' },
        { name: 'Pitampura', route: '/delhi/pitampura' },
        { name: 'Moti Nagar', route: '/delhi/moti-nagar' },
        { name: 'Laxmi Nagar', route: '/delhi/laxmi-nagar' },
        { name: 'Vikas Puri', route: '/delhi/vikas-puri' },
        { name: 'Okhla', route: '/delhi/okhla' },
        { name: 'Nehru Place', route: '/delhi/nehru-place' },
        { name: 'R K Puram', route: '/delhi/rk-puram' },
        { name: 'Paschim Vihar', route: '/delhi/paschim-vihar' }
      ]
    },
    { 
      name: 'Mumbai', 
      route: '/mumbai',
      subAreas: [
        { name: 'Andheri', route: '/mumbai/andheri' },
        { name: 'Bandra', route: '/mumbai/bandra' },
        { name: 'Borivali', route: '/mumbai/borivali' },
        { name: 'Dadar', route: '/mumbai/dadar' },
        { name: 'Goregaon', route: '/mumbai/goregaon' },
        { name: 'Jogeshwari', route: '/mumbai/jogeshwari' },
        { name: 'Kandivali', route: '/mumbai/kandivali' },
        { name: 'Malad', route: '/mumbai/malad' },
        { name: 'Powai', route: '/mumbai/powai' },
        { name: 'Thane', route: '/mumbai/thane' },
        { name: 'Vashi', route: '/mumbai/vashi' },
        { name: 'Worli', route: '/mumbai/worli' }
      ]
    },
    { 
      name: 'Gujarat', 
      route: '/gujarat',
      subAreas: [
        { name: 'Ahmedabad', route: '/gujarat/ahmedabad' },
        { name: 'Surat', route: '/gujarat/surat' },
        { name: 'Vadodara', route: '/gujarat/vadodara' },
        { name: 'Rajkot', route: '/gujarat/rajkot' },
        { name: 'Bhavnagar', route: '/gujarat/bhavnagar' },
        { name: 'Jamnagar', route: '/gujarat/jamnagar' },
        { name: 'Junagadh', route: '/gujarat/junagadh' },
        { name: 'Gandhinagar', route: '/gujarat/gandhinagar' },
        { name: 'Anand', route: '/gujarat/anand' },
        { name: 'Navsari', route: '/gujarat/navsari' },
        { name: 'Morbi', route: '/gujarat/morbi' },
        { name: 'Mehsana', route: '/gujarat/mehsana' }
      ]
    },
    { 
      name: 'Indore', 
      route: '/indore',
      subAreas: [
        { name: 'Vijay Nagar', route: '/indore/vijay-nagar' },
        { name: 'Palasia', route: '/indore/palasia' },
        { name: 'Rau', route: '/indore/rau' },
        { name: 'Bhanwarkuan', route: '/indore/bhanwarkuan' },
        { name: 'Rajendra Nagar', route: '/indore/rajendra-nagar' },
        { name: 'MG Road', route: '/indore/mg-road' },
        { name: 'Sapna Sangeeta', route: '/indore/sapna-sangeeta' },
        { name: 'Aerodrome', route: '/indore/aerodrome' },
        { name: 'Bhawrasla', route: '/indore/bhawrasla' },
        { name: 'Sukhliya', route: '/indore/sukhliya' },
        { name: 'Tilak Nagar', route: '/indore/tilak-nagar' },
        { name: 'Kanadiya', route: '/indore/kanadiya' }
      ]
    },
    { 
      name: 'Hyderabad', 
      route: '/hyderabad',
      subAreas: [
        { name: 'Banjara Hills', route: '/hyderabad/banjara-hills' },
        { name: 'Gachibowli', route: '/hyderabad/gachibowli' },
        { name: 'Hitech City', route: '/hyderabad/hitech-city' },
        { name: 'Jubilee Hills', route: '/hyderabad/jubilee-hills' },
        { name: 'Kondapur', route: '/hyderabad/kondapur' },
        { name: 'Kukatpally', route: '/hyderabad/kukatpally' },
        { name: 'Madhapur', route: '/hyderabad/madhapur' },
        { name: 'Miyapur', route: '/hyderabad/miyapur' },
        { name: 'Secunderabad', route: '/hyderabad/secunderabad' },
        { name: 'Uppal', route: '/hyderabad/uppal' },
        { name: 'LB Nagar', route: '/hyderabad/lb-nagar' },
        { name: 'Dilsukhnagar', route: '/hyderabad/dilsukhnagar' }
      ]
    }
  ];

  const handleLocationClick = (location) => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Navigate to the location page
    setTimeout(() => {
      navigate(location.route);
    }, 300);
  };

  const handleLocalAreaClick = (route) => {
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Navigate to local area page
    setTimeout(() => {
      navigate(route);
    }, 300);
  };

  return (
    <>
      <div className="relative w-full h-85 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.900),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.800),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.indigo.900),transparent_50%)]"></div>
        </div>

        {/* Floating geometric shapes with advanced animations */}
        <div className="absolute inset-0">
          {/* Large floating crystals */}
          <div className="absolute top-20 left-16 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0s' }}>
            <div className="relative group">
              <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-2xl shadow-cyan-500/25">
                <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Neon circles */}
          <div className="absolute top-32 right-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
                  <div className="absolute inset-4 rounded-full bg-slate-900/80 backdrop-blur-sm"></div>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 blur-2xl opacity-60 animate-pulse"></div>
            </div>
          </div>

          {/* Morphing hexagons */}
          <div className="absolute bottom-32 left-24 animate-pulse" style={{ animationDuration: '3s' }}>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 transform rotate-45 rounded-lg shadow-2xl shadow-emerald-500/40">
                <div className="absolute inset-2 bg-gradient-to-tl from-white/30 to-transparent rounded-md"></div>
              </div>
              <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-tr from-lime-400 to-emerald-500 rounded-lg opacity-80 animate-ping"></div>
            </div>
          </div>

          {/* Dynamic triangular prisms */}
          <div className="absolute top-1/2 right-32 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
            <div className="relative group">
              <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-gradient-to-r from-rose-500 to-pink-600 filter drop-shadow-2xl">
                <div className="absolute -top-6 -left-4 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent transform rotate-45"></div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-pink-600 blur-xl opacity-50 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Advanced particle system */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-bounce"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#60A5FA', '#A855F7', '#EC4899', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
                opacity: Math.random() * 0.8 + 0.2,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`
              }}
            />
          ))}
        </div>

        {/* Flowing light streams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Main content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 py-20">
          <div className="mb-8 relative">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            </div>
          </div>

          <div className="relative mb-8">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent tracking-tight leading-none text-center">
              Market Area
            </h1>
            <div className="absolute inset-0 text-5xl md:text-7xl font-black text-white/10 blur-2xl tracking-tight leading-none text-center">
              Market Area
            </div>
          </div>

          <div className="mb-12 text-center">
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
              Discover endless possibilities in our premium marketplace
            </p>
          </div>
        </div>

        {/* Glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* ScrollingBanner */}
      <ScrollingBanner />

      {/* Location Cards */}
      <div className="relative bg-slate-900 py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,theme(colors.slate.800),transparent_70%)] opacity-50"></div>
        
        <div className="relative z-10 max-w-8xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent mb-4">
              Select Your Location
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* India Card - Full Width Row */}
          <div className="mb-6">
            <LocationCard 
              name="India" 
              isHighlighted={false}
              onClick={() => handleLocationClick(locations[0])}
            />
          </div>

          {/* Other Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.slice(1).map((location, index) => (
              <React.Fragment key={index}>
                <LocationCard 
                  name={location.name} 
                  isHighlighted={location.highlighted}
                  onClick={() => handleLocationClick(location)}
                />
                
                {/* Show local areas directly below each location card that has subAreas */}
                {location.subAreas && showLocalAreas === 'all' && (
                  <div className="col-span-1 md:col-span-2 lg:grid-cols-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                      {location.subAreas.map((area, idx) => (
                        <LocalAreaCard 
                          key={idx}
                          name={area.name}
                          onClick={() => handleLocalAreaClick(area.route)}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketAreaHeader;