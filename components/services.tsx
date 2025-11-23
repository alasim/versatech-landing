"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as Icons from "lucide-react"
import { motion } from "framer-motion"
import servicesData from "@/data/services.json"


export default function Services() {
  return (
    <section id="services" className="py-24 bg-background/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive suite of enterprise solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.categories.map((category, index) => {
            const IconComponent = (Icons as any)[category.icon as string] || Icons.Package

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/services/${(category.services && category.services?.length === 1) ? category.services?.[0].slug : category.slug}`}>
                  <div className="group relative overflow-hidden rounded-2xl glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full cursor-pointer">
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    {/* Content */}
                    <div className="relative p-8 flex flex-col h-full">
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-xl bg-linear-to-br ${category.color} p-3 mb-6 text-white shadow-lg`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{category.name}</h3>
                      <p className="text-muted-foreground mb-6 grow">{category.description}</p>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                        Explore Services
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform size-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
