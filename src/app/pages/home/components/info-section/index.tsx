import React from "react";
import { Shield } from "lucide-react";
import { features } from "@/app/pages/home/components/info-section/constants";

export default function InfoSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-20 animate-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-blue-300 shadow-lg mb-6">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Powerful Features</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400  via-blue-100  bg-clip-text text-transparent ">
              Everything you need
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400  via-blue-100  bg-clip-text text-transparent ">
              to monitor your APIs
            </span>
          </h2>

          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Our comprehensive monitoring platform gives you complete visibility
            into your API performance with industry-leading features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative animate-in slide-in-from-bottom-8 duration-1000 "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 blur-xl rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500"></div>
              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 h-full shadow-2xl shadow-blue-500/5 hover:shadow-blue-500/10 transform hover:scale-[1.02] transition-all duration-500 group">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-r ${feature.gradient} p-[1px] transition-opacity duration-500 -z-10`}
                >
                  <div className="h-full w-full bg-gray-900/80 rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
