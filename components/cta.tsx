"use client"

import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 -z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Connect with our experts to discover how Versatech Solutions can drive your digital transformation
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all">
            Start Your Journey
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-primary/30 text-foreground hover:bg-primary/5 font-bold transition-all">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  )
}
