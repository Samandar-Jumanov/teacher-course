import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Courses } from './components/Courses';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { LevelTest } from './components/LevelTest';
import { CourseRegistration } from './components/CourseRegistration';
import { AnimatedBackground } from './components/AnimatedBackground';
import { useLocation } from './hooks/useLocation';

function App() {
  const { hash } = useLocation();

  const renderContent = () => {
    switch (hash) {
      case '#register':
        return <CourseRegistration />;
      case '#level-test':
        return <LevelTest />;
      default:
        return (
          <>
            <Hero />
            <Courses />
            <Testimonials />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Navigation />
      <main>
        {renderContent()}
      </main>
    </div>
  );
}

export default App;