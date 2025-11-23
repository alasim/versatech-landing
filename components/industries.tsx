"use client"

import { Building2, Headset, ShoppingBag, GraduationCap, Plane } from "lucide-react"
import { motion } from "framer-motion"

const industries = [
    {
        icon: Building2,
        name: "Corporate Enterprises",
        description: "Scalable infrastructure and secure communication for large organizations.",
    },
    {
        icon: Headset,
        name: "Customer Support Centers",
        description: "Advanced call center solutions to enhance customer experience.",
    },
    {
        icon: ShoppingBag,
        name: "E-Commerce Businesses",
        description: "CRM and automation tools to drive sales and customer retention.",
    },
    {
        icon: GraduationCap,
        name: "Educational Institutions",
        description: "Reliable connectivity and management systems for schools and universities.",
    },
    {
        icon: Plane,
        name: "Travel & Tourism Agencies",
        description: "Specialized CRM and booking management solutions.",
    },
]

export default function Industries() {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
                    <p className="text-lg text-muted-foreground">
                        Tailored technology solutions for diverse business sectors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-primary/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                <industry.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-2">{industry.name}</h3>
                            <p className="text-muted-foreground">{industry.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
