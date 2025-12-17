
import React, { useState } from 'react';
import { Lesson, TabType } from '../types';
import AudioButton from './AudioButton';
import ExerciseCard from './ExerciseCard';

interface LessonViewProps {
  lesson: Lesson;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.Vocabulary);

  const tabs = [TabType.Vocabulary, TabType.Phrases, TabType.Exercises];

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {/* Lesson Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900">Lesson {lesson.id}: {lesson.title}</h1>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 px-8 sticky top-0 z-10">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
        {activeTab === TabType.Vocabulary && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.vocabulary.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-800">{item.english}</span>
                    <AudioButton text={item.english} size="sm" />
                  </div>
                  <div className="text-sm text-gray-500 mt-0.5">{item.portuguese}</div>
                  
                  {item.extra && (
                    <div className="mt-3 pt-3 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-medium text-indigo-600">{item.extra}</span>
                        <AudioButton text={item.extra} size="sm" />
                      </div>
                      <div className="text-xs text-gray-400">{item.extraPortuguese}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === TabType.Phrases && (
          <div className="space-y-4">
            {lesson.phrases.map((phrase) => (
              <div key={phrase.id} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                <AudioButton text={phrase.english} size="md" />
                <div>
                  <div className="text-lg font-medium text-gray-800">{phrase.english}</div>
                  <div className="text-gray-500">{phrase.portuguese}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === TabType.Exercises && (
          <div className="space-y-8 pb-10">
            {/* Listening Section */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
                Listening Dialogue
              </h3>
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 italic text-gray-700 space-y-4">
                {lesson.exercises.dialogue.map((line, idx) => (
                  <div key={idx} className="flex gap-4">
                    <span className="font-bold text-blue-700 min-w-[60px]">{line.speaker}:</span>
                    <div className="flex-1 flex items-start gap-2">
                      <p>{line.text}</p>
                      <AudioButton text={line.text} size="sm" className="mt-0.5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Sentence Ordering Section */}
            <section>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                Put the sentence in order
              </h3>
              {lesson.exercises.sentenceOrdering.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise} />
              ))}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonView;
