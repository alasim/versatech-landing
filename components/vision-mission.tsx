"use client"

import { Target, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function VisionMission() {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <Target className="w-4 h-4" />
                            <span>Our Mission</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Empowering Business Growth Through Technology
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Deliver reliable, secure, and customizable IT solutions that streamline communication, strengthen
                            infrastructure, and drive business growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-background p-8 rounded-2xl shadow-lg border border-border/50 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lightbulb className="w-32 h-32 text-primary" />
                        </div>
                        <div className="relative z-10 space-y-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                To be a trusted partner in digital transformation, enabling organizations to achieve efficiency,
                                scalability, and innovation through advanced technology solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
