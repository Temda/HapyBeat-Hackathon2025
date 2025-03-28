import { ChevronLeft, Camera, PauseCircle, Bookmark } from 'lucide-react'
import { useState, useEffect, useRef, useMemo } from 'react'

interface TranscriptScreenProps {
  setShowTranscriptTab: (show: boolean) => void
  setShowDetailedWord: (show: boolean) => void
}

const TranscriptScreen = ({
  setShowTranscriptTab,
  setShowDetailedWord
}: TranscriptScreenProps) => {
  const [displayedText, setDisplayedText] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedWord, setSelectedWord] = useState<string | null>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)

  const fullTranscript = useMemo(() => [
    "Today we'll be learning about cell structure",
    "A cell is the basic unit of all living organisms",
    "Made up of organelles like nucleus and mitochondria",
    "The nucleus controls all cellular activities",
    "Mitochondria produce energy for the cell",
    "Ribosomes create proteins through synthesis",
    "Endoplasmic reticulum helps transport materials",
    "Cells divide through mitosis and meiosis",
    "Plant cells have walls and chloroplasts",
    "Animal cells have flexible membranes",
    "Stem cells can become any cell type",
    "Cancer occurs from uncontrolled division"
  ], []);

  const keywords = ['cell', 'organisms', 'organelles', 'nucleus', 'mitochondria',
    'ribosomes', 'endoplasmic reticulum', 'mitosis', 'meiosis',
    'chloroplasts', 'membrane', 'stem cells', 'cancer']

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    if (isPlaying && currentLineIndex < fullTranscript.length) {
      const currentLine = fullTranscript[currentLineIndex]

      if (currentCharIndex < currentLine.length) {
        interval = setInterval(() => {
          setDisplayedText(prev => {
            const newText = [...prev]
            if (!newText[currentLineIndex]) {
              newText[currentLineIndex] = ''
            }
            newText[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1)
            return newText
          })
          setCurrentCharIndex(prev => prev + 1)
        }, 50)
      } else {
        timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1)
          setCurrentCharIndex(0)
        }, 1000)
      }
    }

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [currentLineIndex, currentCharIndex, isPlaying, fullTranscript]);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight
    }
  }, [displayedText])

  const handleWordClick = (word: string) => {
    const cleanWord = word.toLowerCase().replace(/[.,]/g, '')
    if (keywords.includes(cleanWord)) {
      setSelectedWord(cleanWord)
      setShowDetailedWord(true)
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const formatLine = (line: string, lineIndex: number) => {
    if (lineIndex < currentLineIndex ||
      (lineIndex === currentLineIndex && currentCharIndex === fullTranscript[lineIndex]?.length)) {
      return line.split(' ').map((word, i) => {
        const cleanWord = word.toLowerCase().replace(/[.,]/g, '')
        const isKeyword = keywords.includes(cleanWord)
        const isSelected = selectedWord === cleanWord

        if (isKeyword) {
          return (
            <span
              key={i}
              className={`cursor-pointer font-bold ${isSelected
                  ? 'text-blue-500 bg-primary-600 px-1 py-0.5 rounded'
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
    }
    return <span>{line}</span>
  }

  return (
    <div className="pb-16 lg:pb-0">
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4">
        <div className="flex items-center max-w-6xl mx-auto">
          <button
            onClick={() => setShowTranscriptTab(false)}
            className="mr-3 hover:bg-white/10 p-1 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">Biology: Cell Structure</h1>
            <p className="text-sm opacity-90">Prof. Siriwan • Live Now</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="relative aspect-video bg-gray-900">
          <img
            src="https://i.ytimg.com/vi/VHMFAi11EPw/maxresdefault.jpg"
            alt="Biology lecture"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 right-4 flex space-x-3">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-3 transition-all">
              <Camera size={20} />
            </button>
            <button
              className={`rounded-full p-3 ${isPlaying ? 'bg-red-600' : 'bg-green-600'} text-white hover:scale-105 transition-transform`}
              onClick={togglePlayPause}
            >
              {isPlaying ? <PauseCircle size={20} /> : <PlayCircle size={20} />}
            </button>
          </div>
        </div>

        <section className="px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Live Transcript<br />
              <span className="text-base font-normal text-gray-500">(Realtime Speech to Text)</span>
              <span className="text-base font-normal text-gray-500">note: you can touch the word ex. cell</span>
            </h2>

            <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
              <Bookmark size={18} />
              <span>Save</span>
            </button>
          </div>

          <div
            ref={transcriptRef}
            className="bg-gray-50 rounded-xl p-6 h-[400px] overflow-y-auto scroll-smooth"
          >
            <div className="space-y-8 text-center">
              {displayedText.map((line, index) => (
                <div
                  key={index}
                  className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed"
                >
                  {formatLine(line, index)}
                  {index === currentLineIndex && currentCharIndex < fullTranscript[index]?.length && (
                    <span className="animate-pulse">|</span>
                  )}
                </div>
              ))}
              {isPlaying && currentLineIndex < fullTranscript.length && (
                <div className="text-2xl md:text-3xl text-gray-400">
                  {currentCharIndex === 0 && '• • •'}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const PlayCircle = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
)

export default TranscriptScreen