"use client"

import Industries from "@/components/industries"
import { Card, CardContent } from "@/components/ui/card"
import WhyChooseUs from "@/components/why-choose-us"
import { CheckCircle, Users, Lightbulb, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full relative pt-20">
      {/* Grid background */}
      {/* <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
        }}
      /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 mb-20 flex items-center justify-center flex-col glass-card"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">About Versatech Solutions</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">We're a leading provider of enterprise communication and business solutions, helping organizations
            streamline operations, enhance customer engagement, and drive growth.</p>
        </motion.div>



        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              To empower businesses of all sizes with cutting-edge communication and technology solutions that enable
              them to operate more efficiently, connect with customers meaningfully, and achieve their strategic goals.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe that the right technology should be accessible, scalable, and tailored to your unique business
              needs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg p-12 flex items-center justify-center"
          >
            <Award className="size-32 text-primary/20" />
          </motion.div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Our Approach
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Customer-Centric",
                description:
                  "We put your business needs first, designing solutions that deliver real value and measurable results.",
                icon: Users,
              },
              {
                title: "Innovation-Driven",
                description:
                  "We stay ahead of the curve, continuously evolving our offerings with the latest technologies and best practices.",
                icon: Lightbulb,
              },
              {
                title: "Quality-Focused",
                description:
                  "We maintain the highest standards in service delivery, reliability, and support to ensure your success.",
                icon: CheckCircle,
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow glass-card border border-primary/10 h-full">
                    <CardContent className="p-8">
                      <Icon className="size-12 text-primary mb-4" />
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Our Culture */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-linear-to-br from-accent/10 to-primary/10 rounded-lg p-12 flex items-center justify-center"
          >
            <Users className="size-32 text-accent/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
            <div className="space-y-4">
              {[
                "Collaboration: We believe in working together, both internally and with our clients, to achieve shared success.",
                "Integrity: We operate with transparency and honesty in all our dealings.",
                "Excellence: We're committed to continuous improvement and delivering our best work every day.",
                "Adaptability: We embrace change and quickly respond to market dynamics and client needs.",
                "Growth: We invest in our team's development and foster an environment of learning and innovation.",
              ].map((value, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <Industries />
        <WhyChooseUs />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-12 rounded-lg bg-linear-to-r mt-10 from-primary/5 to-accent/5 border border-primary/20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how Versatech Solutions can help transform your business.
          </p>
          <button className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </div>
  )
}
