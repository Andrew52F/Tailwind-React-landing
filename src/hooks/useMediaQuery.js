import { useState, useEffect } from 'react';

const useMediaQuery = (query) => {
  const [ isMatches, setIsMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== isMatches) {
      setIsMatches(media.matches);
    }
    const listener = (e) => setIsMatches(media.matches);
    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [isMatches, query])

  return isMatches;
}

export default useMediaQuery;