"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="relative bg-transparent min-h-screen flex items-center justify-center pt-28 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm">
            🚀 Next-Gen Business Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
        >
          Empower Your Business with{" "}
          <span className="bg-linear-to-r from-primary via-primary/70 to-primary bg-clip-text text-transparent">
            Enterprise Solutions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          IP-Telephony, CRM, Servers, Hosting & Networking solutions designed to transform your operations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/services" className="group px-8 py-4 rounded-full bg-linear-to-r from-primary to-accent text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all">
            Explore Solutions
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link href="/contact" className="px-8 py-4 rounded-full border-2 border-primary/30 text-foreground hover:bg-primary/5 font-bold transition-all">
            Schedule Demo
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
