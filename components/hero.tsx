"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // useEffect(() => {
  //   const canvas = canvasRef.current
  //   if (!canvas) return

  //   const ctx = canvas.getContext("2d")
  //   if (!ctx) return

  //   canvas.width = canvas.offsetWidth
  //   canvas.height = canvas.offsetHeight

  //   // Simple animated grid background
  //   const animate = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height)
  //     ctx.strokeStyle = "rgba(100, 150, 255, 0.1)"
  //     ctx.lineWidth = 1

  //     const gridSize = 50
  //     for (let i = 0; i < canvas.width; i += gridSize) {
  //       ctx.beginPath()
  //       ctx.moveTo(i, 0)
  //       ctx.lineTo(i, canvas.height)
  //       ctx.stroke()
  //     }
  //     for (let i = 0; i < canvas.height; i += gridSize) {
  //       ctx.beginPath()
  //       ctx.moveTo(0, i)
  //       ctx.lineTo(canvas.width, i)
  //       ctx.stroke()
  //     }

  //     requestAnimationFrame(animate)
  //   }
  //   animate()

  //   const handleResize = () => {
  //     canvas.width = canvas.offsetWidth
  //     canvas.height = canvas.offsetHeight
  //   }
  //   window.addEventListener("resize", handleResize)
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  return (
    <section id="hero" className="relative bg-transparent min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div> */}

      {/* Animated Grid */}
      {/* <canvas ref={canvasRef} className="absolute inset-0 opacity-50" style={{ mixBlendMode: "screen" }} /> */}

      {/* Glow Effects */}
      {/* <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 inline-block">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-sm">
            🚀 Next-Gen Business Solutions
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Empower Your Business with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Enterprise Solutions
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          IP-Telephony, CRM, Servers, Hosting & Networking solutions designed to transform your operations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold hover:shadow-lg hover:shadow-primary/50 transition-all">
            Explore Solutions
            <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="px-8 py-4 rounded-full border-2 border-primary/30 text-foreground hover:bg-primary/5 font-bold transition-all">
            Schedule Demo
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/10">
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
        </div>
      </div>
    </section>
  )
}
