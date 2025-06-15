import { useEffect, useState } from 'react'
import MatrixBackground from './components/MatrixBackground'
import InfoHeader from './info-header/info-header';
import InfoPanel from './info-panel/info-panel';
import SkillsPanel from './skills-panel/skills-panel';
import LinkPanel from './link-panel/link-panel';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-matrix-dark relative overflow-x-hidden md:p-2">
      <MatrixBackground />
      <div
        className={`bg-matrix-panel border border-matrix-primary rounded backdrop-blur-sm shadow-matrix p-8 sm:max-w-[66vw] max-w-[90vw] mx-auto relative z-[100] transition-all duration-1000 ease-out md:p-6 sm:p-4 text-green-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <InfoHeader />
        <div className='flex flex-col sm:flex-row gap-8'>
          <div className="flex flex-4 flex-col">
            <InfoPanel />
            <SkillsPanel />
          </div>
          <LinkPanel />
        </div>
      </div>
    </div>
  )
}

export default App
