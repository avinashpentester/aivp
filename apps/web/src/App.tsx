import { useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutLabsPage from './pages/AboutLabsPage';
import ExploreLabsPage from './pages/ExploreLabsPage';
import KnowMePage from './pages/KnowMePage';
import ContactPage from './pages/ContactPage';

import PI_01_Direct from './labs/PI_01_Direct';
import PI_02_Indirect from './labs/PI_02_Indirect';
import PI_03_Roleplay from './labs/PI_03_Roleplay';
import PI_04_Format from './labs/PI_04_Format';
import PI_05_Structured from './labs/PI_05_Structured';
import PI_06_FunctionParam from './labs/PI_06_FunctionParam';
import PI_07_Reflexive from './labs/PI_07_Reflexive';
import PI_08_TokenSmuggling from './labs/PI_08_TokenSmuggling';
import PI_09_FewShotBackdoor from './labs/PI_09_FewShotBackdoor';
import PI_10_Chain from './labs/PI_10_Chain';

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const labComponents: Record<string, (props: { onBack: () => void }) => JSX.Element> = {
    lab_PI_01: PI_01_Direct,
    lab_PI_02: PI_02_Indirect,
    lab_PI_03: PI_03_Roleplay,
    lab_PI_04: PI_04_Format,
    lab_PI_05: PI_05_Structured,
    lab_PI_06: PI_06_FunctionParam,
    lab_PI_07: PI_07_Reflexive,
    lab_PI_08: PI_08_TokenSmuggling,
    lab_PI_09: PI_09_FewShotBackdoor,
    lab_PI_10: PI_10_Chain,
  };

  if (currentView.startsWith('lab_')) {
    const LabComponent = labComponents[currentView];
    if (LabComponent) return <LabComponent onBack={() => setCurrentView('explore')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <AnimatedBackground />

      <div className="relative z-10">
        <Navigation currentView={currentView} setCurrentView={setCurrentView} />

        <main className="min-h-[calc(100vh-4rem)]">
          {currentView === 'home' && <HomePage />}
          {currentView === 'about' && <AboutLabsPage />}
          {currentView === 'explore' && <ExploreLabsPage setCurrentView={setCurrentView} />}
          {currentView === 'knowme' && <KnowMePage />}
          {currentView === 'contact' && <ContactPage />}
        </main>
      </div>
    </div>
  );
};

export default App;
