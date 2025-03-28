import { Bell, Settings, Search } from 'lucide-react'
import InterpreterFullCard from '../components/community/InterpreterFullCard'

const CommunityScreen = () => {
  // Sample data - in a real app this would come from an API
  const featuredInterpreters = [
    {
      id: 1,
      name: "Thanawat",
      rating: 4.8,
      speciality: "Mathematics",
      lessons: 125,
      experience: "5 years",
      image: "https://plus.unsplash.com/premium_photo-1664301011255-57283e6432fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Sudarat",
      rating: 4.9,
      speciality: "Science",
      lessons: 98,
      experience: "7 years",
      image: "https://plus.unsplash.com/premium_photo-1661901004198-0771cc6d5a53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Pimchanok",
      rating: 4.7,
      speciality: "Literature",
      lessons: 112,
      experience: "4 years",
      image: "https://plus.unsplash.com/premium_photo-1683140697750-8c047293b20d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Nattawut",
      rating: 4.6,
      speciality: "History",
      lessons: 87,
      experience: "3 years",
      image: "https://plus.unsplash.com/premium_photo-1683121910205-adafd6b80e3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]

  const openProjects = [
    {
      id: 1,
      title: "Physics: Forces and Motion",
      department: "Science Department",
      duration: "45 min video",
      description: "Need sign language interpretation for Physics lecture on Newton's Laws.",
      reward: "฿750",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "Thai Literature: Folk Tales",
      department: "Humanities Department",
      duration: "35 min video",
      description: "Looking for interpretation of traditional Thai folk tales lecture.",
      reward: "฿650",
      posted: "1 day ago"
    }
  ]

  return (
    <div className="pb-16 lg:pb-0">
      {/* Header */}
      <header className="bg-primary-600 text-black p-4 lg:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold">Interpreter Community</h1>
            <div className="flex items-center space-x-4">
              <button className="p-1">
                <Bell size={24} className="md:w-6 md:h-6" />
              </button>
              <button className="p-1">
                <Settings size={24} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-4 md:mt-6 relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search interpreters..." 
              className="w-full bg-gray-200 text-gray-800 rounded-full py-2 md:py-3 pl-10 pr-4 text-sm md:text-base"
            />
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Featured Interpreters */}
        <section className="py-4 md:py-6">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Featured Interpreters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {featuredInterpreters.map(interpreter => (
              <InterpreterFullCard 
                key={interpreter.id}
                name={interpreter.name}
                rating={interpreter.rating}
                speciality={interpreter.speciality}
                lessons={interpreter.lessons}
                experience={interpreter.experience}
                image={interpreter.image}
              />
            ))}
          </div>
        </section>
        
        {/* Open Projects */}
        <section className="py-4 md:py-6">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Open Projects for Translation</h2>
          <div className="space-y-3 md:space-y-4">
            {openProjects.map(project => (
              <div key={project.id} className="bg-white rounded-xl shadow-md p-4 md:p-5 transition-transform hover:scale-[1.01]">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg md:text-xl">{project.title}</h3>
                  <div className="bg-green-100 text-green-800 text-xs md:text-sm px-2 py-1 rounded-md">
                    {project.reward} Reward
                  </div>
                </div>
                <p className="text-secondary-600 text-sm md:text-base mb-2">{project.department} • {project.duration}</p>
                <p className="text-gray-700 mb-3 md:mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-500 text-xs md:text-sm">{project.posted}</span>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white text-sm md:text-base py-1 md:py-2 px-3 md:px-4 rounded-full transition-colors">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Community Guidelines */}
        <section className="py-4 md:py-6 border-t border-gray-200">
          <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Community Guidelines</h2>
          <div className="bg-blue-50 rounded-xl p-4 md:p-5">
            <ul className="space-y-2 text-sm md:text-base text-gray-700 list-disc pl-5">
              <li>Be respectful to all community members</li>
              <li>Provide accurate and professional interpretations</li>
              <li>Respond to project requests in a timely manner</li>
              <li>Maintain confidentiality of all educational materials</li>
              <li>Report any inappropriate behavior to moderators</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}

export default CommunityScreen