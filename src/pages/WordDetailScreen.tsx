import { Play, X } from 'lucide-react'

interface WordDetailScreenProps {
  setShowDetailedWord: (show: boolean) => void
}

const WordDetailScreen = ({ setShowDetailedWord }: WordDetailScreenProps) => {
  const wordData = {
    word: 'cell (Example)',
    type: 'Biology Term',
    definition: 'The smallest part of a living thing. Like a small building block that makes your body.',
    examples: [
      "The cell is the basic unit of life.",
      "Plant cells have a cell wall, while animal cells do not.",
      "There are trillions of cells in the human body."
    ]
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="sticky top-0 bg-primary-600 text-white bg-blue-500 p-4 flex justify-between items-center z-10">
          {/* <button 
            onClick={() => setShowDetailedWord(false)}
            className="hover:bg-white/10 p-1 rounded-full"
          >
            <ChevronLeft size={24} />
          </button> */}
          <h1 className="text-xl md:text-2xl font-bold">Word Definition</h1>
          <button 
            onClick={() => setShowDetailedWord(false)}
            className="hover:bg-white/10 p-1 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 md:p-6">
          {/* Word Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-600 capitalize">
              {wordData.word}
            </h2>
            <p className="text-gray-500">{wordData.type}</p>
          </div>
          
          {/* Visual Representation */}
          <div className="bg-gray-100 rounded-xl p-4 mb-6">
            <div className="aspect-square bg-white rounded-lg overflow-hidden mb-2 flex items-center justify-center">
              <img 
                src="https://pallasclinic.eu/_SiteFiles/CMS/d88eb139-c6bb-4428-9fb8-39db43317d2d-iStock-1335033345.jpg" 
                alt={`${wordData.word} diagram`}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-center text-gray-500 text-sm">
              A diagram showing the structure of a {wordData.word}
            </p>
          </div>
          
          {/* Definition */}
          <section className="mb-6">
            <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">Definition:</h3>
            <p className="text-gray-700">
              {wordData.definition}
            </p>
          </section>
          
          {/* Sign Language Video */}
          <section className="mb-6">
            <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">Thai Sign Language:</h3>
            <div className="bg-gray-800 rounded-xl overflow-hidden aspect-video relative">
              <img 
                src="https://i.ytimg.com/vi/P8z6MFgmSS4/sddefault.jpg" 
                alt="Sign language video"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 rounded-full p-3 text-black hover:scale-105 transition-transform">
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
            </div>
          </section>
          
          {/* Usage in Context */}
          <section>
            <h3 className="font-semibold text-lg md:text-xl text-gray-800 mb-2">Usage in Context:</h3>
            <ul className="space-y-3">
              {wordData.examples.map((example, index) => (
                <li key={index} className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-gray-700">"{example}"</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default WordDetailScreen