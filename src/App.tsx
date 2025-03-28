import { useState } from 'react'
import HomeScreen from './pages/HomeScreen'
import LessonsScreen from './pages/LessonsScreen'
import CommunityScreen from './pages/CommunityScreen'
import TranscriptScreen from './pages/TranscriptScreen'
import WordDetailScreen from './pages/WordDetailScreen'
import BottomNav from './components/BottomNav'

import StartScreen from './pages/StartScreen'
import PDFScreen from './pages/PDFScreen'


const App = () => {
  const [activeTab, setActiveTab] = useState('start')
  const [showDetailedWord, setShowDetailedWord] = useState(false)
  const [showTranscriptTab, setShowTranscriptTab] = useState(false)

  return (
    <div className="flex flex-col h-screen bg-gray-50">

      <div className="flex-1 overflow-y-auto">

      {activeTab === 'pdf' && !showDetailedWord && !showTranscriptTab && (
        <PDFScreen 
          setShowTranscriptTab={setShowTranscriptTab}
          setShowDetailedWord={setShowDetailedWord}
          setActiveTab={setActiveTab}
        />
      )}

        {activeTab === 'start' && !showDetailedWord && !showTranscriptTab && (
          <StartScreen 
            setActiveTab={setActiveTab} 
            setShowTranscriptTab={setShowTranscriptTab} 
          />
        )}

        {activeTab === 'home' && !showDetailedWord && !showTranscriptTab && (
          <HomeScreen 
            setActiveTab={setActiveTab} 
            setShowTranscriptTab={setShowTranscriptTab} 
          />
        )}
        
        {activeTab === 'lessons' && !showDetailedWord && !showTranscriptTab && (
         <LessonsScreen 
           setActiveTab={setActiveTab}
           setShowTranscriptTab={setShowTranscriptTab}
           setShowDetailedWord={setShowDetailedWord}
         />
        )}

        
        {activeTab === 'community' && !showDetailedWord && !showTranscriptTab && (
          <CommunityScreen />
        )}
        
        {showTranscriptTab && (
          <TranscriptScreen 
            setShowTranscriptTab={setShowTranscriptTab} 
            setShowDetailedWord={setShowDetailedWord} 
          />
        )}

        
        
        {showDetailedWord && (
          <WordDetailScreen setShowDetailedWord={setShowDetailedWord} />
        )}
      </div>
      
      <div className="lg:hidden">
        {activeTab != 'start' && !showDetailedWord && !showTranscriptTab && (

          <BottomNav 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            setShowDetailedWord={setShowDetailedWord}
            setShowTranscriptTab={setShowTranscriptTab}
          />
        )}
      </div>
    </div>
  )
}

export default App