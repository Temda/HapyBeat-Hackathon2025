import { BookOpen, Bookmark, Clock } from 'lucide-react'
import { useState } from 'react'

interface LessonsScreenProps {
  setActiveTab: (tab: string) => void
  setShowTranscriptTab: (show: boolean) => void
  setShowDetailedWord: (show: boolean) => void
}

const LessonsScreen = ({
  setActiveTab,
  setShowTranscriptTab,
  setShowDetailedWord
}: LessonsScreenProps) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lessonTab, setLessonTab] = useState('saved')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'science', name: 'Science' },
    { id: 'math', name: 'Math' },
    { id: 'language', name: 'Language' },
    { id: 'history', name: 'History' }
  ]

  const tabs = [
    { id: 'saved', name: 'Saved' },
    { id: 'completed', name: 'Completed' },
    { id: 'progress', name: 'In Progress' }
  ]

  const lessons = [
    {
      id: 1,
      title: 'Chemistry: Periodic Table',
      teacher: 'Ajarn Supachai',
      grade: 'Grade 10',
      category: 'science',
      status: 'saved',
      date: 'March 15',
      duration: '55 min'
    },
    {
      id: 2,
      title: 'Algebra Fundamentals',
      teacher: 'Ajarn Preecha',
      grade: 'Grade 9',
      category: 'math',
      status: 'completed',
      date: 'March 10',
      duration: '45 min'
    },
    {
      id: 3,
      title: 'Thai Literature: Classic Poems',
      teacher: 'Ajarn Malee',
      grade: 'Grade 11',
      category: 'language',
      status: 'progress',
      date: 'March 5',
      duration: '50 min'
    },
    {
      id: 4,
      title: 'World History: Ancient Civilizations',
      teacher: 'Ajarn Somsak',
      grade: 'Grade 8',
      category: 'history',
      status: 'saved',
      date: 'February 28',
      duration: '60 min'
    },
    {
      id: 5,
      title: 'Biology: Cell Structure',
      teacher: 'Prof. Siriwan',
      grade: 'Grade 10',
      category: 'science',
      status: 'completed',
      date: 'February 25',
      duration: '40 min'
    }
  ]

  const filteredLessons = lessons.filter(lesson => {
    const matchesTab = lessonTab === 'all' || lesson.status === lessonTab
    const matchesCategory = activeCategory === 'all' || lesson.category === activeCategory
    return matchesTab && matchesCategory
  })

  const handleOpenPDF = () => {
    setShowTranscriptTab(false)
    setShowDetailedWord(false)
    setActiveTab('pdf')
  }

  return (
    <div className="pb-16 lg:pb-0">
      <div className="p-4 lg:p-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">My Lessons</h1>
      </div>

      <main className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Categories */}
        <section className="mb-4 md:mb-6">
          <div className="flex overflow-x-auto pb-2 space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm md:text-base transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </section>

        {/* Tabs */}
        <section className="mb-4 md:mb-6">
          <div className="flex border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setLessonTab(tab.id)}
                className={`px-4 py-2 text-sm md:text-base font-medium transition-colors ${
                  lessonTab === tab.id
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </section>

        {/* Lesson Cards */}
        <section>
          {filteredLessons.length > 0 ? (
            <div className="grid gap-3 md:gap-4">
              {filteredLessons.map(lesson => (
                <div
                  key={lesson.id}
                  className="bg-white rounded-xl shadow-sm p-4 md:p-5 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={handleOpenPDF}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="mb-3 md:mb-0">
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-800 p-2 rounded-lg mr-3">
                          <BookOpen size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 text-lg md:text-xl mb-1">
                            {lesson.title}
                          </h3>
                          <p className="text-gray-600 text-sm md:text-base">
                            {lesson.teacher} • {lesson.grade}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 text-blue-800 text-xs md:text-sm px-2 py-1 rounded-md mr-2">
                        {lesson.category.charAt(0).toUpperCase() + lesson.category.slice(1)}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 md:mt-4">
                    <div className="flex items-center text-gray-500 text-sm md:text-base">
                      <Clock size={16} className="mr-1" />
                      <span>{lesson.date} • {lesson.duration}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Bookmark size={18} />
                      </button>
                      <button
                        className="bg-gray-300 hover:bg-gray-700 text-white text-sm md:text-base py-1 md:py-2 px-3 md:px-4 rounded-full transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleOpenPDF()
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <BookOpen size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-2">No lessons found</h3>
              <p className="text-gray-500">
                {lessonTab === 'saved'
                  ? "You haven't saved any lessons yet"
                  : lessonTab === 'completed'
                  ? "You haven't completed any lessons yet"
                  : "You don't have any lessons in progress"}
              </p>
            </div>
          )}
        </section>

        {/* Stats */}
        <section className="mt-6 md:mt-8 pt-6 border-t border-gray-200">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Your Learning Stats
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="bg-white rounded-xl shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-1">
                {lessons.filter(l => l.status === 'completed').length}
              </div>
              <div className="text-gray-600 text-sm md:text-base">Completed</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1">
                {lessons.filter(l => l.status === 'progress').length}
              </div>
              <div className="text-gray-600 text-sm md:text-base">In Progress</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-500 mb-1">
                {lessons.filter(l => l.status === 'saved').length}
              </div>
              <div className="text-gray-600 text-sm md:text-base">Saved</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-1">
                {new Set(lessons.map(l => l.teacher)).size}
              </div>
              <div className="text-gray-600 text-sm md:text-base">Teachers</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LessonsScreen
