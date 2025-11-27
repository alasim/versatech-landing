"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Server, Shield, Sliders, TrendingUp, Zap } from "lucide-react"

const features = [
    {
        icon: CheckCircle2,
        title: "End-to-End Partner",
        description: "Comprehensive technology solutions from infrastructure to software.",
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Enterprise-grade security with 99.9% uptime SLA guarantee.",
    },
    {
        icon: Sliders,
        title: "Flexible Deployment",
        description: "Choose between on-premises or cloud solutions to fit your needs.",
    },
    {
        icon: TrendingUp,
        title: "Cost Effective",
        description: "Enterprise features at predictable costs with VoIP savings.",
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Scalable infrastructure designed for speed and efficiency.",
    },
    {
        icon: Server,
        title: "Disaster Recovery",
        description: "Robust backup and recovery options for business continuity.",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                            Why Choose Versatech Solutions?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We combine technical expertise with business understanding to deliver solutions that truly make a difference.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Lower communication costs with VoIP technology",
                                "Enhanced data privacy and security",
                                "Seamless CRM integration for productivity",
                                "Customizable solutions tailored to business needs"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-background border border-secondary/10 hover:shadow-lg transition-all duration-300"
                            >
                                <feature.icon className="w-10 h-10 mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
