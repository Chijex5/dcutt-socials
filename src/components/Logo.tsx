import React from 'react';
export function Logo() {
  return <div className="flex flex-col items-center">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-all duration-700 animate-pulse"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-pink-300 to-pink-600 rounded-full opacity-50 group-hover:opacity-70 blur-sm transition-opacity duration-500">
          <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"></div>
        </div>
        <div className="relative w-36 h-36 rounded-full bg-black/90 backdrop-blur-sm border border-pink-500/20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-pink-400/5 to-transparent"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite] bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
          </div>
          <svg viewBox="0 0 100 100" className="w-20 h-20 transform -rotate-12 text-pink-500 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0" fill="currentColor">
            <path d="M65.8,26.4c-1.2-2.8-3.8-4.6-6.8-4.6c-2.9,0-5.6,1.8-6.8,4.6c-1.2,2.8-0.8,6,1.1,8.4c1.9,2.4,4.9,3.4,7.8,2.6 c2.9-0.8,5-3.2,5.5-6.1C66.9,29.4,66.6,27.8,65.8,26.4z">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
            </path>
            <path d="M48.5,41.1c-1.7-3.9-5.5-6.5-9.8-6.5c-4.2,0-8,2.6-9.8,6.5c-1.7,3.9-1.1,8.4,1.6,11.8c2.7,3.4,7.1,4.8,11.2,3.7 c4.1-1.1,7.2-4.5,7.9-8.7C50.1,45.5,49.6,43.2,48.5,41.1z">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.2s" />
            </path>
            <path d="M77.6,45.7c-0.9-2.2-2.9-3.6-5.3-3.6c-2.3,0-4.3,1.4-5.3,3.6c-0.9,2.2-0.6,4.7,0.9,6.5c1.5,1.9,3.8,2.7,6,2 c2.2-0.6,3.9-2.5,4.3-4.8C78.4,48,78.2,46.8,77.6,45.7z">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.4s" />
            </path>
            <path d="M60.9,59.2c-0.7-1.7-2.3-2.8-4.1-2.8c-1.8,0-3.4,1.1-4.1,2.8c-0.7,1.7-0.5,3.6,0.7,5.1c1.1,1.4,2.9,2.1,4.7,1.6 c1.7-0.5,3-1.9,3.3-3.7C61.5,61,61.3,60,60.9,59.2z">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.6s" />
            </path>
            <path d="M41.7,62.9c-0.6-1.3-1.8-2.2-3.2-2.2c-1.4,0-2.6,0.8-3.2,2.2c-0.6,1.3-0.4,2.8,0.5,3.9c0.9,1.1,2.3,1.6,3.6,1.2 c1.3-0.4,2.3-1.5,2.6-2.9C42.2,64.3,42,63.6,41.7,62.9z">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" begin="0.8s" />
            </path>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 transform translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-700">
              D'
            </span>
          </div>
        </div>
        <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="w-full h-full rounded-full border border-pink-500/20 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute inset-0 rounded-full border border-pink-500/10 animate-[spin_15s_linear_infinite]" style={{
          transform: 'rotate(45deg)'
        }}></div>
        </div>
      </div>
      <div className="mt-10 space-y-3 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          <span className="relative inline-block">
            D'
            <span className="absolute -inset-1 bg-pink-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
          </span>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-300 to-pink-400">
            FOOTPRINT
          </span>
        </h1>
        <div className="relative h-px w-48 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/50 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>;
}