import EmailForm from "@/app/pages/home/components/contact-section/email-form";
import React from "react";
import { HelpingHand } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="email-form" className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center animate-in slide-in-from-top-4 duration-1000">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-blue-300 shadow-lg mb-6">
            <HelpingHand className="w-4 h-4 text-blue-400" />
            <span>Contact</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400  via-blue-100  bg-clip-text text-transparent ">
              Join the waitlist
            </span>
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
            Be the first to know when we launch. Get exclusive early access and
            special pricing for our API monitoring platform.
          </p>
        </div>
        <EmailForm />
      </div>
    </section>
  );
}
