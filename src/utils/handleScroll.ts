import { Dispatch, SetStateAction, useEffect } from 'react'

export default function HandleScroll(setScrolled: Dispatch<SetStateAction<boolean>>) {
  return (
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [])
  )
}
