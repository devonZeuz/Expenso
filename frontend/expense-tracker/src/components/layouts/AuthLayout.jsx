import React from 'react'
import LOGO from "../../assets/Logo.svg"
import ICON from "../../assets/icon.svg"
import { LuGithub, LuExternalLink } from "react-icons/lu"

const AuthLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Background gradient with subtle image overlay */}
      <div className="absolute inset-0 auth-gradient-bg" />
      <div className="absolute inset-0 auth-bg-image" />

      {/* Content: Left-aligned column with logo and form below */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Top-left logo */}
        <header className="w-full px-6 md:px-12 py-6 flex items-center">
          <img src={LOGO} alt="eXpenso" className="h-8 w-auto md:h-9" />
        </header>

        {/* Main content area */}
        <main className="flex-1 px-6 md:px-12 pb-10 flex items-start md:items-center">
          <div className="w-full max-w-[720px]">
            {children}
          </div>
        </main>
      </div>

      {/* Right side reference block */}
      <div className="absolute right-16 md:right-20 top-1/2 -translate-y-1/2 hidden lg:block z-20">
        <div className="glass-panel p-6 max-w-sm pointer-events-auto">
          <h3 className="text-lg font-semibold text-black mb-4">Project References</h3>
          
          {/* GitHub Link */}
          <div className="mb-4">
            <a 
              href="https://github.com/devonZeuz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black hover:text-[#FF3200] transition-colors group cursor-pointer"
            >
              <LuGithub className="text-xl" />
              <span className="text-sm font-medium">GitHub Profile</span>
              <LuExternalLink className="text-xs opacity-60 group-hover:opacity-100" />
            </a>
          </div>

          {/* YouTube Tutorials */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-black/80 mb-2">Tutorial References:</h4>
            
            <a 
              href="https://www.youtube.com/watch?v=PQnbtnsYUho&t=14853s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black/70 hover:text-[#FF3200] transition-colors group text-xs cursor-pointer"
            >
              <div className="w-2 h-2 bg-[#FF3200] rounded-full flex-shrink-0"></div>
              <span className="flex-1">Main Project Tutorial</span>
              <LuExternalLink className="text-xs opacity-60 group-hover:opacity-100" />
            </a>

            <a 
              href="https://www.youtube.com/watch?v=dsZ7RN9ItR4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black/70 hover:text-[#FF3200] transition-colors group text-xs cursor-pointer"
            >
              <div className="w-2 h-2 bg-[#FF3200] rounded-full flex-shrink-0"></div>
              <span className="flex-1">Blurry Gradient Effect</span>
              <LuExternalLink className="text-xs opacity-60 group-hover:opacity-100" />
            </a>

            <a 
              href="https://www.youtube.com/watch?v=cn3BbO8z8Fk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black/70 hover:text-[#FF3200] transition-colors group text-xs cursor-pointer"
            >
              <div className="w-2 h-2 bg-[#FF3200] rounded-full flex-shrink-0"></div>
              <span className="flex-1">Glassmorphism Login Page</span>
              <LuExternalLink className="text-xs opacity-60 group-hover:opacity-100" />
            </a>

            <a 
              href="https://www.youtube.com/watch?v=FVpEDSlGG5k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-black/70 hover:text-[#FF3200] transition-colors group text-xs cursor-pointer"
            >
              <div className="w-2 h-2 bg-[#FF3200] rounded-full flex-shrink-0"></div>
              <span className="flex-1">How to host using Render</span>
              <LuExternalLink className="text-xs opacity-60 group-hover:opacity-100" />
            </a>

          
          </div>
        </div>
      </div>

      {/* Bottom-right floating icon */}
      <img src={ICON} alt="icon" className="absolute right-5 bottom-5 w-9 h-9 md:w-10 md:h-10 opacity-95" />
    </div>
  )
}

export default AuthLayout;