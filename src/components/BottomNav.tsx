import { Home, BookOpen, MessageSquare, User } from 'lucide-react'

interface BottomNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  setShowDetailedWord: (show: boolean) => void
  setShowTranscriptTab: (show: boolean) => void
}

const BottomNav = ({ 
  activeTab, 
  setActiveTab,
  setShowDetailedWord,
  setShowTranscriptTab
}: BottomNavProps) => {
  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setShowDetailedWord(false)
    setShowTranscriptTab(false)
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center py-3 px-2 max-w-md mx-auto">
        <button 
          onClick={() => handleTabChange('home')}
          className={`flex flex-col items-center p-2 rounded-lg ${
            activeTab === 'home' ? 'text-blue-600 bg-blue-100' : 'text-gray-500'
          }`}
        >
          <Home size={24} className="mb-1" />
          <span className="text-xs">Home</span>
        </button>
        
        <button 
          onClick={() => handleTabChange('lessons')}
          className={`flex flex-col items-center p-2 rounded-lg ${
            activeTab === 'lessons' ? 'text-blue-600 bg-blue-100' : 'text-gray-500'
          }`}
        >
          <BookOpen size={24} className="mb-1" />
          <span className="text-xs">Lessons</span>
        </button>
        
        <button 
          onClick={() => handleTabChange('community')}
          className={`flex flex-col items-center p-2 rounded-lg ${
            activeTab === 'community' ? 'text-blue-600 bg-blue-100' : 'text-gray-500'
          }`}
        >
          <MessageSquare size={24} className="mb-1" />
          <span className="text-xs">Community</span>
        </button>
        
        <button className={`flex flex-col items-center p-2 rounded-lg ${
            activeTab === 'profile' ? 'text-blue-600 bg-blue-100' : 'text-gray-500'
          }`}
        >
          <User size={24} className="mb-1" />
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </nav>
  )
}

export default BottomNav
