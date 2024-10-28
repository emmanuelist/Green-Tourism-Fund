import
  {
    Calendar,
    MessageSquare,
    Heart,
    Share2,
    BookmarkPlus,
    Trophy,
    Globe,
    Search
  } from 'lucide-react';
import { useState } from 'react';

// Mock data for demonstration
const communityProjects = [
  {
    id: 1,
    title: "Sustainable Forest Restoration",
    location: "Amazon Rainforest, Brazil",
    image: "/api/placeholder/800/400",
    author: "Maria Silva",
    authorAvatar: "/api/placeholder/40/40",
    likes: 1234,
    comments: 89,
    shares: 45,
    impact: "15,000 trees planted",
    fundingProgress: 85,
    fundingGoal: 50000,
    category: "Reforestation"
  },
  {
    id: 2,
    title: "Eco-Tourism Development",
    location: "Bali, Indonesia",
    image: "/api/placeholder/800/400",
    author: "John Doe",
    authorAvatar: "/api/placeholder/40/40",
    likes: 892,
    comments: 56,
    shares: 34,
    impact: "300 local jobs created",
    fundingProgress: 65,
    fundingGoal: 75000,
    category: "Local Development"
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Global Green Tourism Summit",
    date: "2024-11-15",
    location: "Virtual",
    participants: 1500
  },
  {
    id: 2,
    title: "Community Tree Planting Day",
    date: "2024-12-01",
    location: "Multiple Locations",
    participants: 2500
  }
];

const topContributors = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/api/placeholder/48/48",
    contribution: "250,000 GTF",
    projects: 12
  },
  {
    id: 2,
    name: "Michael Chang",
    avatar: "/api/placeholder/48/48",
    contribution: "180,000 GTF",
    projects: 8
  }
];

const CommunityPage = () =>
{
  // const [activeTab, setActiveTab] = useState('trending');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Join the Green Tourism Revolution</h1>
            <p className="text-xl text-green-50 mb-8">Connect with eco-conscious travelers, support sustainable projects, and make a real impact on global tourism.</p>
            <div className="flex gap-4">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition-colors duration-200">
                Start a Project
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-200">
                Explore Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Members</span>
                  <span className="font-semibold">25,439</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Projects</span>
                  <span className="font-semibold">142</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Impact</span>
                  <span className="font-semibold">$2.5M</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-green-500" />
                Top Contributors
              </h3>
              <div className="space-y-4">
                {topContributors.map((contributor) => (
                  <div key={contributor.id} className="flex items-center gap-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{contributor.name}</h4>
                      <p className="text-sm text-gray-500">
                        {contributor.contribution} • {contributor.projects} projects
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-2 border-green-500 pl-4">
                    <h4 className="font-medium">{event.title}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()} • {event.location}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {event.participants.toLocaleString()} participants
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Search and Filters */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects, members, or events..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2 mt-4">
                {['All', 'Reforestation', 'Conservation', 'Local Development', 'Education'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Feed */}
            <div className="space-y-6">
              {communityProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={project.authorAvatar}
                        alt={project.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{project.author}</h4>
                        <p className="text-sm text-gray-500">{project.location}</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Funding Progress</span>
                        <span className="font-medium">{project.fundingProgress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${project.fundingProgress}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-gray-500">
                          ${(project.fundingGoal * project.fundingProgress / 100).toLocaleString()} raised
                        </span>
                        <span className="text-gray-500">
                          Goal: ${project.fundingGoal.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
                          <Heart className="h-5 w-5" />
                          <span>{project.likes}</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
                          <MessageSquare className="h-5 w-5" />
                          <span>{project.comments}</span>
                        </button>
                        <button className="flex items-center gap-1 text-gray-600 hover:text-green-600">
                          <Share2 className="h-5 w-5" />
                          <span>{project.shares}</span>
                        </button>
                      </div>
                      <button className="flex items-center gap-1 text-green-600 hover:text-green-700">
                        <BookmarkPlus className="h-5 w-5" />
                        <span>Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;