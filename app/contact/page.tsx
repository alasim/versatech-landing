"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // we need to fetch method="POST" action="/submit_contact.php"
    // server will handle rest
    const response = await fetch("/submit_contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json()
    }).then((data) => {
      console.log(data)
      setIsSubmitting(false)
      setSubmitMessage("Thank you! We'll get back within 1 business day.")
      setFormData({ name: "", email: "", phone: "", topic: "", message: "" })
      setTimeout(() => setSubmitMessage(""), 5000)
    }).catch((error) => {
      setIsSubmitting(false)
      setSubmitMessage("Something went wrong. Please try again later.")
    });


  }

  return (
    <div className="w-full relative">

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="py-16 flex items-center justify-center flex-col glass-card">
          <h1 className="text-5xl font-bold tracking-tight mb-4 text-balance">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Have a question or a project in mind? Let's talk.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 glass-card border border-primary/10">
            <Card className="border-0 glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+880 1234567890"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Topic</label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="ip-telephony">IP-Telephony</option>
                        <option value="crm">CRM Solutions</option>
                        <option value="server-hosting">Server, Hosting & Networking</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      required
                    />
                  </div>

                  {submitMessage && (
                    <div className={cn("p-4 rounded-lg text-sm", {
                      "bg-green-50 text-green-800": submitMessage.startsWith("Thank"),
                      "bg-red-50 text-red-800": submitMessage.startsWith("Something"),
                    })}>{submitMessage}</div>
                  )}

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">We'll get back within 1 business day.</p>
                    <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Reach Us */}
          <Card className="glass-card">
            <CardHeader className="p-6">
              <h2 className="text-2xl font-bold">Reach Us</h2>
            </CardHeader>
            <CardContent className="p-6 gap-6 flex flex-col">
              <div className="flex items-start gap-4">
                <Mail className="size-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:hello@versatechsol.com" className="text-primary hover:underline">
                    hello@versatechsol.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="size-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call</h3>
                  <a href="tel:09613147147" className="hover:underline text-primary">
                    09613147147
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="size-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Offices</h3>
                  <p className="text-sm text-muted-foreground">
                    443/A, Nobonir, Shapla Sharani, West Shewrapara, Mirpur, Dhaka-1216
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="size-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-sm text-muted-foreground">Sun - Thu, 9:00 - 18:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
