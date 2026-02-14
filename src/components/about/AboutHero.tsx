"use client";

import { useState, useRef, useEffect } from "react";

export function AboutHero() {
  const [isMuted, setIsMuted] = useState(false);
  const [showText, setShowText] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTextTimer = () => {
    setShowText(true);
    
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    
    hideTimerRef.current = setTimeout(() => {
      setShowText(false);
    }, 5000);
  };

  useEffect(() => {
    resetTextTimer();

    const handleScroll = () => {
      resetTextTimer();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={false}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ minWidth: '100%', minHeight: '100%' }}
      >
        <source src="/videos/about/village.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/30 z-[1]"></div>
      
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-20 bg-surface/20 backdrop-blur-sm hover:bg-surface/30 text-surface p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-surface/50"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>

      <div 
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-opacity duration-1000 ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-surface mb-6 leading-tight drop-shadow-2xl">
          About Wadi Fuqin
        </h1>
        <p className="text-xl lg:text-2xl text-surface/95 leading-relaxed drop-shadow-lg max-w-3xl mx-auto">
          A small Palestinian village where olive trees aren't just a crop—they're a living record of family, season, and home.
        </p>
      </div>
    </section>
  );
}
