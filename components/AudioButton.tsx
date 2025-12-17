
import React, { useCallback, useRef } from 'react';

interface AudioButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AudioButton: React.FC<AudioButtonProps> = ({ text, className = "", size = 'md' }) => {
  // Use a ref to store the utterance to prevent garbage collection issues
  // This is a known fix for SpeechSynthesis stopping unexpectedly in Chrome and Safari
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const playAudio = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!('speechSynthesis' in window)) {
      console.error("Speech synthesis not supported.");
      return;
    }

    // Cancel any current playback to avoid overlapping or queuing delays
    window.speechSynthesis.cancel();
    
    // Create new utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // STRICT CONFIGURATION: Rate 0.9
    utterance.lang = 'en-US';
    utterance.rate = 0.9; 
    utterance.pitch = 1;
    utterance.volume = 1;

    // Attempt to select a specific English voice for better stability
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang === 'en-US') || 
                   voices.find(v => v.lang.startsWith('en-')) ||
                   voices.find(v => v.lang.startsWith('en'));
    
    if (enVoice) {
      utterance.voice = enVoice;
    }

    // Reference management
    utteranceRef.current = utterance;

    utterance.onend = () => {
      utteranceRef.current = null;
    };
    
    utterance.onerror = (event) => {
      console.error("SpeechSynthesis Error:", event);
      utteranceRef.current = null;
    };

    // Trigger playback
    window.speechSynthesis.speak(utterance);
  }, [text]);

  const sizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-3"
  };

  const iconClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  };

  return (
    <button
      onClick={playAudio}
      className={`inline-flex items-center justify-center bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 active:bg-blue-300 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm ${sizeClasses[size]} ${className}`}
      title={`Ouvir em inglês (Velocidade 0.9): ${text}`}
      aria-label={`Ouvir: ${text}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className={iconClasses[size]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    </button>
  );
};

export default AudioButton;
