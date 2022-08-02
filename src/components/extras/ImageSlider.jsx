import { useState } from "react";

const left = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
const right = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className="h-full relative">
            <div className="absolute left-8 top-1/2 -translate-y-1/2 text-slate-100 dark:text-slate-800">{left}</div>
            <img src={slides[currentIndex].url} alt={`Image${currentIndex}`} className="w-full h-full rounded-md bg-center bg-cover"/>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-100 dark:text-slate-800">{right}</div>
        </div>
    )
}
export default ImageSlider;