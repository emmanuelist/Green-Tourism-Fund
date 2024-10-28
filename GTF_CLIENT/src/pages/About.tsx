import React, { useEffect, useRef } from 'react';
import
{
  TreePine,
  Globe2,
  Users,
  Target,
  ArrowUpRight,
  Sparkles,
  Leaf,
  Mountain,
  HandHeart,
  RefreshCw
} from 'lucide-react';
import { useState } from 'react';

interface TeamMember
{
  name: string;
  role: string;
  image: string;
  bio: string;
  links: {
    twitter: string;
    linkedin: string;
  };
}

interface Partner
{
  name: string;
  logo: string;
}

interface CountState
{
  projects: number;
  countries: number;
  impact: number;
  community: number;
}

interface VisibilityState
{
  [key: string]: boolean;
}

type TabType = 'vision' | 'mission' | 'values';

const About: React.FC = () =>
{
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [activeTab, setActiveTab] = useState<TabType>('vision');

  const [count, setCount] = useState<CountState>({
    projects: 0,
    countries: 0,
    impact: 0,
    community: 0
  });

  const statsRef = useRef<HTMLElement | null>(null);
  const targetStats: CountState = {
    projects: 150,
    countries: 45,
    impact: 25,
    community: 20
  };

  useEffect(() =>
  {
    const observer = new IntersectionObserver(
      (entries) =>
      {
        entries.forEach((entry) =>
        {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));

          if (entry.target.id === 'stats' && entry.isIntersecting)
          {
            Object.keys(targetStats).forEach((stat) =>
            {
              const increment = targetStats[stat as keyof CountState] / 50;
              let current = 0;
              const timer = setInterval(() =>
              {
                current += increment;
                if (current >= targetStats[stat as keyof CountState])
                {
                  current = targetStats[stat as keyof CountState];
                  clearInterval(timer);
                }
                setCount(prev => ({
                  ...prev,
                  [stat]: Math.floor(current)
                }));
              }, 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) =>
    {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/api/placeholder/300/300",
      bio: "20+ years in sustainable tourism",
      links: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Michael Chang",
      role: "Head of Sustainability",
      image: "/api/placeholder/300/300",
      bio: "Environmental scientist & consultant",
      links: { twitter: "#", linkedin: "#" }
    },
    {
      name: "Elena Rodriguez",
      role: "Community Director",
      image: "/api/placeholder/300/300",
      bio: "Expert in community-driven initiatives",
      links: { twitter: "#", linkedin: "#" }
    }
  ];

  const partners: Partner[] = [
    { name: "UN Environment Programme", logo: "/api/placeholder/200/80" },
    { name: "World Wildlife Fund", logo: "/api/placeholder/200/80" },
    { name: "Global Sustainable Tourism Council", logo: "/api/placeholder/200/80" },
    { name: "International Ecotourism Society", logo: "/api/placeholder/200/80" }
  ];

  const features = [
    { icon: TreePine, text: "Sustainable Practices" },
    { icon: Globe2, text: "Global Impact" },
    { icon: Users, text: "Community Focus" },
    { icon: Target, text: "Goal-Oriented" },
    { icon: Mountain, text: "Environmental Protection" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className={`relative h-[70vh] flex items-center justify-center overflow-hidden ${isVisible.hero ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800" />
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Transforming Tourism
            <span className="block text-green-300">for a Greener Future</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r font-bold from-gray-100 to-gray-300 bg-clip-text text-transparent">G</span>
            <span className="relative text-black font-bold">T</span>
            <span className="relative text-black mr-3 font-bold">F</span>
            <span>is pioneering sustainable tourism through innovative blockchain technology and community-driven initiatives.</span>
          </p>
          {/* Added Feature Icons */}
          <div className="grid grid-cols-5 gap-4 mt-12 max-w-4xl mx-auto">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex flex-col items-center space-y-2">
                <Icon className="h-8 w-8 text-green-300" />
                <span className="text-sm font-medium text-green-100">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section id="mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
              {(['vision', 'mission', 'values'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === tab
                    ? 'bg-green-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-500 ${isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}>
              {activeTab === 'vision' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <Target className="h-8 w-8 text-green-500" />
                    Our Vision
                  </h2>
                  <p className="text-lg text-gray-600">
                    We envision a world where tourism becomes a powerful force for environmental conservation and community development.
                  </p>
                </div>
              )}
              {activeTab === 'mission' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <Globe2 className="h-8 w-8 text-green-500" />
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600">
                    To revolutionize tourism funding by connecting eco-conscious travelers with sustainable projects worldwide.
                  </p>
                </div>
              )}
              {activeTab === 'values' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <TreePine className="h-8 w-8 text-green-500" />
                    Our Values
                  </h2>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Leaf className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-600">Sustainability First</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <HandHeart className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-600">Community Impact</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <RefreshCw className="h-6 w-6 text-green-500" />
                      <span className="text-lg text-gray-600">Innovation</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={`relative transform transition-all duration-500 ${isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}>
              <img
                src="/api/placeholder/600/400"
                alt="GTF Mission"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <Sparkles className="h-8 w-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <TreePine className="h-8 w-8 mx-auto mb-4 text-green-500" />
              <div className="text-4xl font-bold text-green-600 mb-2">{count.projects}+</div>
              <div className="text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <Globe2 className="h-8 w-8 mx-auto mb-4 text-green-500" />
              <div className="text-4xl font-bold text-green-600 mb-2">{count.countries}+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-4 text-green-500" />
              <div className="text-4xl font-bold text-green-600 mb-2">${count.impact}M+</div>
              <div className="text-gray-600">Impact Generated</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-4 text-green-500" />
              <div className="text-4xl font-bold text-green-600 mb-2">{count.community}K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-green-500" />
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`transform transition-all duration-500 delay-${index * 200} ${isVisible.team
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
                  }`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex gap-4">
                      <a href={member.links.twitter} className="text-gray-400 hover:text-green-600 transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <HandHeart className="h-8 w-8 text-green-500" />
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className={`transform transition-all duration-500 delay-${index * 100} ${isVisible.partners
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                  }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Mountain className="h-8 w-8 text-green-100" />
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community of change-makers and help shape the future of sustainable tourism.
          </p>
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200 transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
            <RefreshCw className="h-5 w-5" />
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;