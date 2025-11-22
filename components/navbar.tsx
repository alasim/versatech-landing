"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import servicesData from "@/data/services.json"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-border/50 ${isScrolled ? "bg-background/95 border-none backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              VS
            </div>
            <span className="text-xl font-bold text-foreground">Versatech</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[900px] gap-4 p-6 md:grid-cols-3">
                      {/* IP-Telephony Column */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">IP-Telephony</h4>
                        {servicesData.categories
                          .find((cat) => cat.id === "ip-telephony")
                          ?.subcategories?.map((subcat) => (
                            <div key={subcat.id} className="space-y-2">
                              <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                                {subcat.name}
                              </p>
                              {subcat.services.map((service) => (
                                <NavigationMenuLink key={service.id} asChild>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    className="block text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                                  >
                                    {service.name}
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          ))}
                      </div>

                      {/* CRM Column */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">CRM</h4>
                        {servicesData.categories
                          .find((cat) => cat.id === "crm")
                          ?.services?.map((service) => (
                            <NavigationMenuLink key={service.id} asChild>
                              <Link
                                href={`/services/${service.slug}`}
                                className="block text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                              >
                                {service.name}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                      </div>

                      {/* Server, Hosting & Networking Column */}
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Server, Hosting & Networking</h4>

                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                            Server Solutions
                          </p>
                          {servicesData.categories
                            .find((cat) => cat.id === "server-solutions")
                            ?.services?.map((service) => (
                              <NavigationMenuLink key={service.id} asChild>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="block text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Hosting</p>
                          {servicesData.categories
                            .find((cat) => cat.id === "hosting")
                            ?.services?.map((service) => (
                              <NavigationMenuLink key={service.id} asChild>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="block text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                        </div>

                        <div className="space-y-2">
                          <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                            Networking
                          </p>
                          {servicesData.categories
                            .find((cat) => cat.id === "networking")
                            ?.services?.map((service) => (
                              <NavigationMenuLink key={service.id} asChild>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="block text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                                >
                                  {service.name}
                                </Link>
                              </NavigationMenuLink>
                            ))}
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#solutions" className="text-sm font-medium px-3 py-2 hover:text-primary transition">
                      Solutions
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-sm font-medium px-3 py-2 hover:text-primary transition">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <button className="hidden sm:inline-flex px-6 py-2 rounded-full bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all">
            <Link href="/contact">Contact Sales</Link>
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-foreground">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 max-h-96 overflow-y-auto">
            <a href="#services" className="block text-muted-foreground hover:text-foreground py-2">
              Services
            </a>
            <a href="#solutions" className="block text-muted-foreground hover:text-foreground py-2">
              Solutions
            </a>
            <a href="/about" className="block text-muted-foreground hover:text-foreground py-2">
              About
            </a>
            <button className="w-full px-4 py-2 rounded-full bg-primary text-white font-semibold">Contact Sales</button>
          </div>
        )}
      </div>
    </nav>
  )
}
