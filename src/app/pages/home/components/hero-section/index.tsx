import React from "react";
import { Button } from "@/components/ui/button";
import { HeroSectionProps } from "@/app/pages/home/components/hero-section/types";
import { ArrowRight, Shield, Zap, Bell } from "lucide-react";

export default function HeroSection({
  description = "A simple tool that monitors your APIs and alerts you instantly — so you can fix issues before your customers notice.",
  button = {
    text: "Get Early Access",
    url: "#email-form",
  },
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full px-4 py-2 text-sm font-medium text-blue-300 shadow-lg mb-8 animate-in slide-in-from-top-4 duration-1000">
          <Zap className="w-4 h-4 text-blue-400" />
          <span>Real-time API monitoring made simple</span>
        </div>
        <div className="mx-auto flex max-w-5xl flex-col gap-8 animate-in slide-in-from-bottom-6 duration-1000 delay-200">
          <h1 className="text-4xl font-bold leading-tight lg:text-7xl xl:text-8xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400  via-blue-100  bg-clip-text text-transparent">
              Never get caught
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              off guard
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400  via-blue-100  bg-clip-text text-transparent">
              by API downtime.
            </span>
          </h1>
          <p className="text-gray-300 text-balance text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-12 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button
            asChild
            size="lg"
            className="group h-14 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/30 transform hover:scale-105 transition-all duration-300"
          >
            <a href={button.url} className="flex items-center gap-3">
              <span>{button.text}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-400" />
              <span>Instant Alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>
        <div className="mt-20 relative">
          <div className="absolute -left-20 bottom-0 hidden lg:block animate-float">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-700/20 transform rotate-3">
              <div className="w-12 h-12 bg-green-900/50 rounded-xl flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <p className="text-xs text-gray-300 mt-2 font-medium">
                API Status: Online
              </p>
            </div>
          </div>
          <div className="absolute -right-20 bottom-8 hidden lg:block animate-float delay-1000">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-700/20 transform -rotate-2">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center">
                <Bell className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-xs text-gray-300 mt-2 font-medium">
                Alert sent!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-gray-400">Uptime monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">&lt;30s</div>
              <div className="text-gray-400">Alert response time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-gray-400">Continuous monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
