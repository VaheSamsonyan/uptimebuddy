import React from "react";

export default function Navigation() {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 cursor-pointer">
              <a
                href=""
                className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
              >
                Uptimebuddy
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
