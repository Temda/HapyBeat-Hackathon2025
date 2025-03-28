// import { Play } from 'lucide-react'

interface LiveClassCardProps {
  title: string
  teacher: string
  department: string
  setShowTranscriptTab: (show: boolean) => void
}

const LiveClassCard = ({
  title,
  teacher,
  department,
  setShowTranscriptTab
}: LiveClassCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.01] duration-200">
      {/* Video Thumbnail Section */}
      <div className="relative aspect-video">
        <img
          src="https://i.ytimg.com/vi/VHMFAi11EPw/maxresdefault.jpg"
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* LIVE Badge */}
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow">
          LIVE
        </div>

     
      </div>

      {/* Class Info Section */}
      <div className="p-4 md:p-5">
        <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm md:text-base mb-4">
          {teacher} • {department}
        </p>
        <button
          onClick={() => setShowTranscriptTab(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base py-2 md:py-3 px-4 rounded-full transition-colors font-medium"
        >
          Join Class & View Transcript
        </button>
      </div>
    </div>
  )
}

export default LiveClassCard
