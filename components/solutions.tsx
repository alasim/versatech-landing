"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const solutions = [
  {
    id: 1,
    category: "IP-PBX On-Premises",
    description: "On-site PBX with full control, IVR, call routing, and recording capabilities.",
    features: ["SIP/IAX", "IVR", "Call Recording", "CRM Integration"],
    benefit: "Full control and data privacy",
    slug: "ip-pbx-on-premises",
    gradient: "from-blue-500 to-cyan-500",
    icon: "📞",
  },
  {
    id: 2,
    category: "Shared Hosted PBX",
    description: "Cloud-based PBX with zero hardware requirements and instant scalability.",
    features: ["Zero Setup", "Auto Scaling", "Cloud Based", "Instant Deployment"],
    benefit: "Scalability without hardware investment",
    slug: "shared-hosted-ocs",
    gradient: "from-cyan-500 to-teal-500",
    icon: "☁️",
  },
  {
    id: 3,
    category: "Sales CRM Solution",
    description: "Manage your sales pipeline with deal stages, tasks, and revenue forecasts.",
    features: ["Lead Management", "Pipeline Tracking", "Analytics", "Integrations"],
    benefit: "Accelerate sales cycles and close deals faster",
    slug: "sales-crm",
    gradient: "from-emerald-500 to-green-500",
    icon: "📊",
  },
  {
    id: 4,
    category: "Virtualization (Proxmox)",
    description: "Enterprise-grade virtualization with HA, replication, and real-time backup.",
    features: ["KVM & LXC", "HA Clusters", "Live Migration", "Snapshots"],
    benefit: "Maximize server utilization and reduce costs",
    slug: "virtualization-proxmox",
    gradient: "from-purple-500 to-pink-500",
    icon: "⚙️",
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
            <Sparkles className="size-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Featured Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Enterprise-Grade Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven solutions delivering measurable value to businesses across industries. Click any solution to learn
            more.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/services/${solution.slug}`}>
                <div className="group h-full bg-background/50 rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Title and Number */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {solution.category}
                      </h3>
                      <span className="text-3xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                        0{solution.id}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-5 line-clamp-2">{solution.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-3">
                        Key Features
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-secondary/10 text-forground text-sm font-medium group-hover:bg-secondary/20 transition-colors"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-primary/10 pt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold text-foreground">Benefit:</span> {solution.benefit}
                        </p>
                        <ArrowRight className="size-5 text-primary opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Our team can help you find the perfect fit for your business.
          </p>
          <Link href="/services" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
