import React from "react";

interface GlobalBackgroundWrapperProps {
  children: React.ReactNode;
}

export default function GlobalBackgroundWrapper({
  children,
}: GlobalBackgroundWrapperProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black from-gray-900  to-gray-900"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
