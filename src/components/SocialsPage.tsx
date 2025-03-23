import React, { useEffect, useState } from 'react';
import { SocialLink } from './SocialLink';
import { Logo } from './Logo';
import { Instagram, Phone, Twitter, Globe } from 'lucide-react';
export function SocialsPage() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <div className="relative bg-black min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.05),transparent_50%)] animate-pulse" style={{
        animationDuration: '4s'
      }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.05),transparent_50%)] animate-pulse" style={{
        animationDuration: '6s'
      }}></div>
      </div>
      <div className={`relative max-w-md w-full transition-all duration-1000 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-16 text-center relative">
          <Logo />
          <p className="text-pink-300/80 mt-6 italic font-light tracking-wider">
            Connect with us
          </p>
        </div>
        <div className="relative space-y-4">
          {/* Enhanced decorative side line */}
          <div className="absolute -left-4 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-300/20 to-transparent animate-pulse"></div>
          </div>
          <SocialLink icon={<Instagram className="w-6 h-6" />} platform="Instagram" username="@dfootprint" link="https://instagram.com/dfootprint" delay={0.1} />
          <SocialLink icon={<div className="w-6 h-6" />} platform="TikTok" username="@dfootprint" link="https://tiktok.com/@dfootprint" delay={0.2} />
          <SocialLink icon={<Phone className="w-6 h-6" />} platform="WhatsApp" username="+1 (555) 123-4567" link="https://wa.me/15551234567" delay={0.3} />
          <SocialLink icon={<div className="w-6 h-6" />} platform="Snapchat" username="dfootprint" link="https://snapchat.com/add/dfootprint" delay={0.4} />
          <SocialLink icon={<Twitter className="w-6 h-6" />} platform="X" username="@dfootprint" link="https://x.com/dfootprint" delay={0.5} />
          <SocialLink icon={<Globe className="w-6 h-6" />} platform="Website" username="dfootprint.com" link="https://dfootprint.com" delay={0.6} />
        </div>
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative h-px w-32 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-300/20 to-transparent animate-pulse"></div>
          </div>
          <p className="text-pink-400/80 font-light text-sm">
            &copy; {new Date().getFullYear()} D'FOOTPRINT. All rights reserved.
          </p>
        </div>
      </div>
      {/* Enhanced floating particles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => <div key={i} className="absolute rounded-full bg-gradient-to-br from-pink-500/5 to-transparent" style={{
        width: `${Math.random() * 300 + 100}px`,
        height: `${Math.random() * 300 + 100}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 10 + 20}s infinite ease-in-out`,
        animationDelay: `${i * 2}s`,
        opacity: 0.2
      }}>
            <div className="absolute inset-0 rounded-full bg-pink-500/10 animate-pulse" style={{
          animationDuration: `${Math.random() * 2 + 2}s`
        }}></div>
          </div>)}
      </div>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          50% {
            transform: translate(
                ${Math.random() * 50 - 25}px,
                ${Math.random() * 50 - 25}px
              )
              scale(${Math.random() * 0.2 + 1.1})
              rotate(${Math.random() * 30}deg);
          }
        }
      `}</style>
    </div>;
}