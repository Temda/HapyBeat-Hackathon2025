import { Star, BookOpen, Clock, MessageCircle } from 'lucide-react'

interface InterpreterFullCardProps {
  name: string
  rating: number
  speciality: string
  lessons: number
  experience: string
  languages?: string[]
  image?: string
  onContact?: () => void
  onViewProfile?: () => void
}

const InterpreterFullCard = ({ 
  name,
  rating,
  speciality,
  lessons,
  experience,
  languages = ['Thai', 'ASL', 'English'],
  image = '/assets/images/default-profile.jpg',
  onContact,
  onViewProfile
}: InterpreterFullCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-4 md:p-5">
        {/* Header Section */}
        <div className="flex items-start mb-4">
          {/* Profile Image */}
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 overflow-hidden mr-4">
            <img 
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/images/default-profile.jpg'
              }}
            />
          </div>
          
          {/* Name and Rating */}
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg md:text-xl text-gray-800">
                {name}
              </h3>
              <div className="flex items-center bg-blue-50 text-blue-800 px-2 py-1 rounded-md">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm font-medium">
                  {rating.toFixed(1)}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm md:text-base mb-2">
              {speciality} Specialist
            </p>
            
            {/* Languages */}
            <div className="flex flex-wrap gap-2">
              {languages.map((language, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <BookOpen className="w-5 h-5 text-gray-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Lessons</p>
              <p className="font-medium text-gray-800">{lessons}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-gray-500 mr-2" />
            <div>
              <p className="text-xs text-gray-500">Experience</p>
              <p className="font-medium text-gray-800">{experience}</p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button 
            onClick={onContact}
            className="flex-1 bg-white border border-primary-600 text-primary-600 hover:bg-primary-50 py-2 px-4 rounded-lg text-sm md:text-base transition-colors flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Contact
          </button>
          
          <button 
            onClick={onViewProfile}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-black py-2 px-4 rounded-lg text-sm md:text-base transition-colors"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default InterpreterFullCard