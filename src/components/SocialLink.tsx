import React, { useEffect, useState } from 'react';
interface SocialLinkProps {
  icon: React.ReactNode;
  platform: string;
  username: string;
  link: string;
  delay?: number;
}
export function SocialLink({
  icon,
  platform,
  username,
  link,
  delay = 0
}: SocialLinkProps) {
  const [loaded, setLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <a href={link} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`group relative flex items-center p-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl transition-all duration-500 transform hover:bg-zinc-800/80 hover:border-pink-500/30 hover:translate-x-2 hover:shadow-lg hover:shadow-pink-500/10 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
    transitionDelay: `${delay}s`
  }}>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex-shrink-0 w-12 h-12">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-md transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
        <div className="relative w-full h-full flex items-center justify-center bg-black rounded-full border border-zinc-800 group-hover:border-pink-500/50 transition-all duration-500 group-hover:scale-110">
          <div className="text-pink-400 group-hover:text-pink-300 transition-colors duration-500 transform group-hover:scale-110">
            {icon}
          </div>
        </div>
      </div>
      <div className="ml-4 flex-1">
        <p className="text-gray-300 font-medium transform transition-all duration-500 group-hover:translate-x-1">
          {platform}
        </p>
        <p className="text-pink-400/80 text-sm transform transition-all duration-500 delay-75 group-hover:translate-x-1">
          {username}
        </p>
      </div>
      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
        <div className="w-5 h-5 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-all duration-500 group-hover:scale-125">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400 transition-transform duration-500 transform group-hover:translate-x-0.5">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 rounded-xl border border-pink-500/20 animate-[spin_4s_linear_infinite]"></div>
      </div>
    </a>;
}