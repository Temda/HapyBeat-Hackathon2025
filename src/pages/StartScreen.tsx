import React from 'react';
import logo from '../assets/logo.png';

interface StartScreenProps {
  setActiveTab: (tab: string) => void;
  setShowTranscriptTab: (value: boolean) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ setActiveTab, setShowTranscriptTab }) => {
  const handleGoHome = () => {
    setShowTranscriptTab(false);
    setActiveTab('home');
  };

  return (
    <div className="flex flex-col justify-between items-center min-h-screen p-8">
      {/* Logo Section */}
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <img src={logo} alt="homepage" className="w-60 mx-auto mb-6" />

        {/* Accessibility Description */}
        <p className="text-center text-sm text-gray-600 max-w-md">
          <strong>Note for hearing-impaired users:</strong><br />
          This learning app provides all content in text format with subtitles and transcripts
          for any audio or video materials. We are committed to making our platform accessible to everyone.
        </p>
      </div>

      {/* Button at Bottom */}
      <div className="w-full max-w-md">
        <button
          type="button"
          onClick={handleGoHome}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded transition-colors"
        >
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
