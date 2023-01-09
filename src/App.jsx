import { useEffect, useState } from "react";
import useMediaQuery from './hooks/useMediaQuery';
import Navbar from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import Landing from './scenes/Landing';
import LineGradient from './components/LineGradient';
import MySkills from './scenes/MySkills';
import Projects from './scenes/Projects';
import Testimonials from './scenes/Testimonials';

function App() {
  const [ selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
   
  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(((window.scrollY === 0)))
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )} 
        <Landing setSelectedPage={setSelectedPage} /> 
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:min-h-full">
          <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:min-h-full">
          <Testimonials />
      </div>
    </div>
  );
}

export default App;
