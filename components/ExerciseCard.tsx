
import React, { useState, useEffect, useCallback } from 'react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise }) => {
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [userWords, setUserWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);

  // Initialize and shuffle words
  useEffect(() => {
    const words = exercise.sentence.split(' ');
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
    setUserWords([]);
    setFeedback(null);
  }, [exercise]);

  const toggleWord = useCallback((word: string, index: number, isFromPool: boolean) => {
    if (feedback === 'correct') return;
    setFeedback(null);
    
    if (isFromPool) {
      // Move from pool to user sentence
      const newPool = [...shuffledWords];
      newPool.splice(index, 1);
      setShuffledWords(newPool);
      setUserWords([...userWords, word]);
    } else {
      // Move back from user sentence to pool
      const newUserWords = [...userWords];
      newUserWords.splice(index, 1);
      setUserWords(newUserWords);
      setShuffledWords([...shuffledWords, word]);
    }
  }, [shuffledWords, userWords, feedback]);

  const checkAnswer = () => {
    const userSentence = userWords.join(' ');
    if (userSentence.toLowerCase() === exercise.sentence.toLowerCase()) {
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
  };

  const reset = () => {
    const words = exercise.sentence.split(' ');
    setShuffledWords([...words].sort(() => Math.random() - 0.5));
    setUserWords([]);
    setFeedback(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
      <div className="mb-4">
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">Exercise</span>
        <p className="mt-3 text-lg font-semibold text-gray-800">{exercise.translation}</p>
        <p className="text-sm text-gray-500 italic">"Put the sentence in order"</p>
      </div>

      {/* User Construction Area */}
      <div className="min-h-[60px] p-3 border-2 border-dashed border-gray-200 rounded-lg flex flex-wrap gap-2 items-center mb-6">
        {userWords.length === 0 && <span className="text-gray-400 text-sm">Tap words to build the sentence...</span>}
        {userWords.map((word, idx) => (
          <button
            key={`user-${idx}`}
            onClick={() => toggleWord(word, idx, false)}
            className="bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Word Pool */}
      <div className="flex flex-wrap gap-2 mb-8">
        {shuffledWords.map((word, idx) => (
          <button
            key={`pool-${idx}`}
            onClick={() => toggleWord(word, idx, true)}
            className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-200 transition-colors"
          >
            {word}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={checkAnswer}
          disabled={userWords.length === 0}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Check Answer
        </button>
        <button
          onClick={reset}
          className="text-gray-500 hover:text-gray-700 text-sm font-medium underline"
        >
          Reset
        </button>

        {feedback === 'correct' && (
          <span className="text-green-600 font-bold flex items-center animate-bounce">
            Correct ✅
          </span>
        )}
        {feedback === 'incorrect' && (
          <span className="text-red-600 font-bold flex items-center">
            Incorrect ❌
          </span>
        )}
      </div>
    </div>
  );
};

export default ExerciseCard;
