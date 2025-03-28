import { Star } from 'lucide-react'

interface InterpreterCardProps {
  name: string
  rating: number
  speciality: string
  image?: string
  onClick?: () => void
  reviewCount?: number
}

const InterpreterCard = ({ 
  name, 
  rating, 
  speciality, 
  image,
  onClick,
  reviewCount
}: InterpreterCardProps) => {
  // Calculate the number of filled and empty stars
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div 
      className="flex-shrink-0 w-36 sm:w-40 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-200 mb-3 overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/default-profile.jpg'
            }}
          />
        </div>
        
        {/* Name */}
        <h3 className="font-medium text-center text-gray-800 text-sm sm:text-base mb-1">
          {name}
        </h3>
        
        {/* Enhanced Rating Display */}
        <div className="flex flex-col items-center mb-1">
          <div className="flex items-center">
            {/* Full stars */}
            {[...Array(fullStars)].map((_, i) => (
              <Star 
                key={`full-${i}`} 
                className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" 
              />
            ))}
            
            {/* Half star */}
            {hasHalfStar && (
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                {/* <Star className="absolute fill-gray-300 text-gray-300" /> */}
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
            )}
            
            {/* Empty stars */}
            {[...Array(emptyStars)].map((_, i) => (
              <Star 
                key={`empty-${i}`} 
                className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-300 text-gray-300" 
              />
            ))}
          </div>
          
          {/* Numeric rating and review count */}
          <div className="flex items-center mt-1">
            <span className="text-sm font-medium text-gray-800 mr-1">
              {rating.toFixed(1)}
            </span>
            {reviewCount && (
              <span className="text-xs text-gray-500">
                ({reviewCount} reviews)
              </span>
            )}
          </div>
        </div>
        
        {/* Speciality */}
        <p className="text-xs sm:text-sm text-center text-gray-500">
          {speciality} Specialist
        </p>
      </div>
    </div>
  )
}

export default InterpreterCard