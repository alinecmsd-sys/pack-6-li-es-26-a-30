
import React, { useState, useEffect } from 'react';
import { LESSONS } from './data';
import LessonView from './components/LessonView';

const App: React.FC = () => {
  const [activeLessonId, setActiveLessonId] = useState<number>(LESSONS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Warm up speech synthesis on mount
  useEffect(() => {
    if ('speechSynthesis' in window) {
      // Some browsers need this to "wake up" the voices list
      window.speechSynthesis.getVoices();
      
      // Keep voices updated when they change
      const handleVoicesChanged = () => {
        window.speechSynthesis.getVoices();
      };
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
      
      // Clean up on unmount
      return () => {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      };
    }
  }, []);

  const activeLesson = LESSONS.find(l => l.id === activeLessonId) || LESSONS[0];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-72' : 'w-0'
        } transition-all duration-300 bg-indigo-900 text-white flex flex-col flex-shrink-0 z-20`}
      >
        <div className="p-6 border-b border-indigo-800 flex items-center justify-between overflow-hidden">
          <span className="text-xl font-bold whitespace-nowrap">English Mastery</span>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 hover:bg-indigo-800 rounded lg:hidden"
          >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            Current Lessons
          </div>
          {LESSONS.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => setActiveLessonId(lesson.id)}
              className={`w-full text-left px-6 py-4 flex items-center transition-colors hover:bg-indigo-800 ${
                activeLessonId === lesson.id ? 'bg-indigo-800 border-l-4 border-white' : ''
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs text-indigo-300">Lesson {lesson.id}</span>
                <span className="font-medium truncate">{lesson.title}</span>
              </div>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-indigo-800 text-xs text-indigo-300 text-center">
          &copy; 2024 Interactive Learning
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Mobile Header */}
        {!isSidebarOpen && (
          <header className="bg-indigo-900 text-white p-4 lg:hidden flex items-center gap-4">
             <button onClick={() => setIsSidebarOpen(true)} className="p-1">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             </button>
             <span className="font-bold">English Mastery</span>
          </header>
        )}
        
        <LessonView lesson={activeLesson} />
      </main>
    </div>
  );
};

export default App;
