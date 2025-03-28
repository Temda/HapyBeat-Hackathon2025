import { Video, Clock, Bookmark } from 'lucide-react'
import { useState } from 'react'

interface SavedLessonCardProps {
  title: string
  sec: string
  teacher: string
  date: string
  duration: string
  thumbnail?: string
  isBookmarked?: boolean
  onClick?: () => void
  onBookmark?: (bookmarked: boolean) => void
}

const SavedLessonCard = ({
  title,
  sec,
  teacher,
  date,
  duration,
  thumbnail = '/assets/images/default-lesson.jpg',
  isBookmarked = false,
  onClick,
  onBookmark
}: SavedLessonCardProps) => {
  const [bookmarked, setBookmarked] = useState(isBookmarked)

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newBookmarkedState = !bookmarked
    setBookmarked(newBookmarkedState)
    if (onBookmark) {
      onBookmark(newBookmarkedState)
    }
  }

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex">
        {/* Thumbnail */}
        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden mr-4">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/default-lesson.jpg'
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded-full p-2">
              <Video className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="space-y-0.5">
            <h3 className="font-semibold text-gray-900 text-base md:text-lg leading-snug line-clamp-2">
              {title} <span className="text-sm font-medium">{sec}</span>
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-2 truncate">
            {teacher}
          </p>

          {/* Meta Info */}
          <div className="flex items-center text-gray-500 text-xs mb-3">
            <Clock className="w-3 h-3 mr-1" />
            <span>{date} • {duration}</span>
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBookmarkClick}
              className="text-gray-400 hover:text-yellow-500 transition-colors"
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              <Bookmark
                className={`w-5 h-5 ${bookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`}
              />
            </button>
            <button
              className="bg-gray-200 hover:bg-gray-300 text-black text-xs py-1 px-3 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                if (onClick) onClick()
              }}
            >
              View
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default SavedLessonCard