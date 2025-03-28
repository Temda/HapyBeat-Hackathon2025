import { ChevronLeft, Bookmark } from 'lucide-react'
import { useState, useRef, useMemo, useCallback } from 'react'

interface PDFScreenProps {
  setShowTranscriptTab: (show: boolean) => void
  setShowDetailedWord: (show: boolean) => void
  setActiveTab: (tab: string) => void
}

const PDFScreen = ({
  setShowTranscriptTab,
  setShowDetailedWord,
  setActiveTab,
}: PDFScreenProps) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const transcriptRef = useRef<HTMLDivElement>(null)

  const fullTranscript = useMemo(() => [
    "Today we'll be learning about cell structure and its vital components.",
    "A cell is the basic unit of all living organisms, forming the foundation of life.",
    "Cells can be broadly categorized into prokaryotic and eukaryotic types.",
    "Prokaryotic cells, like bacteria, do not have a nucleus, while eukaryotic cells do.",
    "Eukaryotic cells include both plant and animal cells, each with unique structures and functions.",
    "Inside a eukaryotic cell, we find various organelles that perform specific tasks necessary for survival.",
    "The nucleus is often referred to as the control center, containing the DNA that directs all cellular activities.",
    "Mitochondria are the powerhouses of the cell, producing energy in the form of ATP through cellular respiration.",
    "Ribosomes, found floating freely or attached to the endoplasmic reticulum, are responsible for protein synthesis.",
    "The endoplasmic reticulum comes in two forms: rough (with ribosomes) and smooth (without). It helps transport and produce proteins and lipids.",
    "The Golgi apparatus acts like a post office, modifying, packaging, and shipping proteins to their destination.",
    "Lysosomes contain digestive enzymes that break down waste materials and cellular debris.",
    "In plant cells, the presence of chloroplasts allows for photosynthesis — converting sunlight into energy.",
    "Plant cells also have a rigid cell wall made of cellulose, providing structure and support.",
    "In contrast, animal cells have more flexible membranes and often contain more lysosomes.",
    "Vacuoles are storage bubbles in cells. Plant cells usually have one large central vacuole, while animal cells have many smaller ones.",
    "Cells reproduce through processes like mitosis (for growth and repair) and meiosis (for sexual reproduction).",
    "Stem cells are unique because they can differentiate into various types of cells depending on the body’s needs.",
    "Cancer occurs when cells divide uncontrollably, forming tumors and potentially spreading through the body.",
    "Understanding cell structure helps us grasp more complex biological processes and how life sustains itself at the microscopic level."
  ], [])

  const keywords = useMemo(() => [
    'cell', 'organisms', 'organelles', 'nucleus', 'mitochondria',
    'ribosomes', 'endoplasmic reticulum', 'mitosis', 'meiosis',
    'chloroplasts', 'membrane', 'stem cells', 'cancer'
  ], [])

  const handleWordClick = useCallback((word: string) => {
    const cleanWord = word.toLowerCase().replace(/[.,]/g, '')
    if (keywords.includes(cleanWord)) {
      setSelectedWord(prev => (prev === cleanWord ? null : cleanWord))
      setShowDetailedWord(true)
    }
  }, [keywords, setShowDetailedWord])

  const handleSave = useCallback(() => {
    setIsSaved(prev => !prev)
  }, [])

  const handleBack = useCallback(() => {
    setShowTranscriptTab(false)
    setShowDetailedWord(false)
    setActiveTab('lessons')
  }, [setShowTranscriptTab, setShowDetailedWord, setActiveTab])

  const formatLine = useCallback((line: string) => {
    return line.split(' ').map((word, i) => {
      const cleanWord = word.toLowerCase().replace(/[.,]/g, '')
      const isKeyword = keywords.includes(cleanWord)
      const isSelected = selectedWord === cleanWord

      if (isKeyword) {
        return (
          <span
            key={i}
            className={`cursor-pointer font-bold transition-all ${
              isSelected
                ? 'text-blue-500 bg-blue-100 px-1 py-0.5 rounded'
                : 'text-primary-500 hover:text-primary-700'
            }`}
            onClick={() => handleWordClick(word)}
          >
            {word}{' '}
          </span>
        )
      }

      return <span key={i}>{word}{' '}</span>
    })
  }, [keywords, selectedWord, handleWordClick])

  return (
    <div className="pb-16 lg:pb-0 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4">
        <div className="flex items-center max-w-6xl mx-auto">
          <button
            onClick={handleBack}
            className="mr-3 hover:bg-white/10 p-1 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Biology: Cell Structure</h1>
            <p className="text-sm opacity-90">Prof. Siriwan • Lecture Preview</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto">
        {/* 🎥 Video Section */}
        <div className="relative aspect-video bg-gray-900">
          <img
            src="https://i.ytimg.com/vi/6tKGqrY3vK4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgYChyMA8=&rs=AOn4CLDg02cLsJGoZrkm6LEOAm_MwqWvwg"
            alt="Lecture Thumbnail"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 right-4 text-white text-sm bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
            Lecture Preview
          </div>
        </div>

        {/* 📝 Transcript Section */}
        <section className="px-4 py-6">
          <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
  Full Transcript after class<br />
  <span className="text-base font-normal text-gray-500">(Transcript translate by Interpreter)</span>
</h2>

            
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                isSaved
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
              onClick={handleSave}
            >
              <Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
          </div>

          <div
            ref={transcriptRef}
            className="bg-white rounded-xl p-6 h-[400px] overflow-y-auto scroll-smooth border border-gray-200 shadow-sm"
          >
            <div className="space-y-8 text-center">
              {fullTranscript.map((line, index) => (
                <div
                  key={index}
                  className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed"
                >
                  {formatLine(line)}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PDFScreen;