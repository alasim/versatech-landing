"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import servicesData from "@/data/services.json"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null)

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section)
  }

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
          <Link href="/" className="flex items-center gap-2 relative hover:opacity-80 transition">
            <Image src="/logo.png" alt="Logo" width={200} height={80} className="" />
            {/* <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              VS
            </div>
            <span className="text-xl font-bold text-foreground">Versatech</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenuDemo />

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
          <div className="md:hidden pb-6 px-4 space-y-2 max-h-[80vh] overflow-y-auto bg-background border-t border-border/50 shadow-xl">
            {/* Company */}
            <div className="border-b border-border/50 py-2">
              <button
                onClick={() => toggleMobileSection('company')}
                className="flex items-center justify-between w-full py-2 text-foreground font-medium"
              >
                Company
                <ChevronDown size={16} className={`transition-transform duration-200 ${expandedMobileSection === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileSection === 'company' && (
                <div className="pl-4 space-y-2 mt-2 mb-2 border-l-2 border-primary/10">
                  <Link href="/about" className="block text-sm text-muted-foreground hover:text-primary py-1.5" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                  <Link href="/#services" className="block text-sm text-muted-foreground hover:text-primary py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                  <Link href="/#solutions" className="block text-sm text-muted-foreground hover:text-primary py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
                  <Link href="/#products" className="block text-sm text-muted-foreground hover:text-primary py-1.5" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                </div>
              )}
            </div>

            {/* IP-Telephony */}
            <div className="border-b border-border/50 py-2">
              <button
                onClick={() => toggleMobileSection('ip-telephony')}
                className="flex items-center justify-between w-full py-2 text-foreground font-medium"
              >
                IP-Telephony
                <ChevronDown size={16} className={`transition-transform duration-200 ${expandedMobileSection === 'ip-telephony' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileSection === 'ip-telephony' && (
                <div className="pl-4 space-y-4 mt-2 mb-2 border-l-2 border-primary/10">
                  {servicesData.categories.find(c => c.id === 'ip-telephony')?.subcategories?.map(subcat => (
                    <div key={subcat.id}>
                      <p className="text-xs font-semibold text-primary uppercase mb-2 tracking-wide">{subcat.name}</p>
                      <div className="space-y-1">
                        {subcat.services.map(service => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block text-sm text-muted-foreground hover:text-primary py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* CRM */}
            <div className="border-b border-border/50 py-2">
              <button
                onClick={() => toggleMobileSection('crm')}
                className="flex items-center justify-between w-full py-2 text-foreground font-medium"
              >
                CRM
                <ChevronDown size={16} className={`transition-transform duration-200 ${expandedMobileSection === 'crm' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileSection === 'crm' && (
                <div className="pl-4 space-y-2 mt-2 mb-2 border-l-2 border-primary/10">
                  {servicesData.categories.find(c => c.id === 'crm')?.services?.map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="block text-sm text-muted-foreground hover:text-primary py-1.5"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Server & Hosting */}
            <div className="border-b border-border/50 py-2">
              <button
                onClick={() => toggleMobileSection('server-hosting')}
                className="flex items-center justify-between w-full py-2 text-foreground font-medium"
              >
                Server & Hosting
                <ChevronDown size={16} className={`transition-transform duration-200 ${expandedMobileSection === 'server-hosting' ? 'rotate-180' : ''}`} />
              </button>
              {expandedMobileSection === 'server-hosting' && (
                <div className="pl-4 space-y-4 mt-2 mb-2 border-l-2 border-primary/10">
                  {/* Server Solutions */}
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase mb-2 tracking-wide">Server Solutions</p>
                    <div className="space-y-1">
                      {servicesData.categories.find(c => c.id === 'server-solutions')?.services?.map(service => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Hosting */}
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase mb-2 tracking-wide">Hosting</p>
                    <div className="space-y-1">
                      {servicesData.categories.find(c => c.id === 'hosting')?.services?.map(service => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Networking */}
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase mb-2 tracking-wide">Networking</p>
                    <div className="space-y-1">
                      {servicesData.categories.find(c => c.id === 'networking')?.services?.map(service => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-muted-foreground hover:text-primary py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 pb-2">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 rounded-full bg-primary text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


// import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/navigation-menu"
/* 

IP-Telephony Systems	Office and customer care communication systems with hosted and on-premises options.
CRM Modules	Custom CRM solutions for sales, leads, travel, education, and e-commerce.
Server Infrastructure	Virtualization, clustering, and monitoring for enterprise-grade server management.
Hosting & Networking	Secure web hosting, corporate networking, and firewall protection.
Auto OBD Dialer	Automated outbound dialing for campaigns, alerts, and reminders.
Firewall & Security	Protect your data and infrastructure with advanced firewall solutions.
*/
const solutions: { title: string; href: string; description: string }[] = [
  {
    title: "IP-Telephony Systems",
    href: "/docs/primitives/alert-dialog",
    description:
      "Office and customer care communication systems with hosted and on-premises options.",
  },
  {
    title: "CRM Modules",
    href: "/docs/primitives/hover-card",
    description:
      "Custom CRM solutions for sales, leads, travel, education, and e-commerce.",
  },
  {
    title: "Server Infrastructure",
    href: "/docs/primitives/progress",
    description:
      "Virtualization, clustering, and monitoring for enterprise-grade server management.",
  },
  {
    title: "Hosting & Networking",
    href: "/docs/primitives/scroll-area",
    description: "Secure web hosting, corporate networking, and firewall protection.",
  },
  {
    title: "Auto OBD Dialer",
    href: "/docs/primitives/tabs",
    description:
      "Automated outbound dialing for campaigns, alerts, and reminders.",
  },
  {
    title: "Firewall & Security",
    href: "/docs/primitives/tooltip",
    description:
      "Protect your data and infrastructure with advanced firewall solutions.",
  },
]
/* 
🧮 Products
Title	Description
CRM Features	Explore modules for lead tracking, order management, and customer engagement.
Telephony Features	Discover IP-PBX, CCS, and OBD features for seamless communication.
Server Capabilities	Learn about Proxmox virtualization, Ceph clustering, and monitoring tools.
Hosting Plans	Compare hosting options tailored for businesses of all sizes.
Monitoring Tools	Real-time server and network health analytics for proactive management.
*/
const products = [
  {
    title: "CRM Features",
    href: "/docs/primitives/alert-dialog",
    description:
      "Explore modules for lead tracking, order management, and customer engagement.",
  },
  {
    title: "Telephony Features",
    href: "/docs/primitives/hover-card",
    description:
      "Discover IP-PBX, CCS, and OBD features for seamless communication.",
  },
  {
    title: "Server Capabilities",
    href: "/docs/primitives/progress",
    description:
      "Learn about Proxmox virtualization, Ceph clustering, and monitoring tools.",
  },
  {
    title: "Hosting Plans",
    href: "/docs/primitives/scroll-area",
    description: "Compare hosting options tailored for businesses of all sizes.",
  },
  {
    title: "Monitoring Tools",
    href: "/docs/primitives/tabs",
    description:
      "Real-time server and network health analytics for proactive management.",
  },
]
export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile} >
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-primary/10 to-primary/20 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/about"
                  >
                    <Image src="/logo.png" alt="Logo" width={200} height={80} className="" />
                    <div className="mb-2 text-lg font-medium sm:mt-4">
                      About Us
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Enterprise solutions for modern businesses
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services" title="Services">
                Discover our goals and the values that shape our technology solutions.
              </ListItem>
              <ListItem href="/#solutions" title="Solutions">
                See how we support businesses across corporate, education, travel, and more.
              </ListItem>
              <ListItem href="/#products" title="Products">
                Understand what makes us a trusted partner in digital transformation.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((solution) => (
                <ListItem
                  key={solution.title}
                  title={solution.title}
                  href={solution.href}
                >
                  {solution.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium bg-transparent">IP-Telephony</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-2 space-y-4">
              <h4 className="font-semibold text-foreground">IP-Telephony</h4>
              {servicesData.categories
                .find((cat) => cat.id === "ip-telephony")
                ?.subcategories?.map((subcat) => (
                  <div key={subcat.id} className="space-y-2">
                    <p className="text-xs border-l-4 bg-primary/10 p-1 border-primary pl-2 text-muted-foreground uppercase tracking-wide font-semibold">
                      {subcat.name}
                    </p>
                    {subcat.services.map((service) => (
                      <NavigationMenuLink key={service.id} asChild>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block text-sm ml-2 leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          {service.name}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium bg-transparent">CRM</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[300px] p-2 space-y-4">
              <h4 className="font-semibold text-foreground">CRM</h4>
              <div className="space-y-2">
                {servicesData.categories
                  .find((cat) => cat.id === "crm")
                  ?.services?.map((service) => (
                    <NavigationMenuLink key={service.id} asChild>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block text-sm ml-2 leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {service.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Server & Hosting</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] gap-4 p-2 md:grid-cols-2">

              <div className="space-y-2">
                <p className="text-xs border-l-4 bg-primary/10 p-1 border-primary pl-2 text-muted-foreground uppercase tracking-wide font-semibold">Server Solutions</p>
                {servicesData.categories
                  .find((cat) => cat.id === "server-solutions")
                  ?.services?.map((service) => (
                    <NavigationMenuLink key={service.id} asChild>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block text-sm ml-2 leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {service.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
              </div>


              <div className="space-y-2">
                <p className="text-xs border-l-4 bg-primary/10 p-1 border-primary pl-2 text-muted-foreground uppercase tracking-wide font-semibold">Hosting</p>
                {servicesData.categories
                  .find((cat) => cat.id === "hosting")
                  ?.services?.map((service) => (
                    <NavigationMenuLink key={service.id} asChild>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block text-sm ml-2 leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {service.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
              </div>


              <div className="space-y-2">
                <p className="text-xs border-l-4 bg-primary/10 p-1 border-primary pl-2 text-muted-foreground uppercase tracking-wide font-semibold">Networking</p>
                {servicesData.categories
                  .find((cat) => cat.id === "networking")
                  ?.services?.map((service) => (
                    <NavigationMenuLink key={service.id} asChild>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block text-sm ml-2 leading-relaxed text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {service.name}
                      </Link>
                    </NavigationMenuLink>
                  ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuLink asChild>
            <Link href="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


/* 
<NavigationMenu>
              <NavigationMenuList>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">IP-Telephony</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-6 space-y-4">
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
                  </NavigationMenuContent>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">CRM</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-6 space-y-4">
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
                  </NavigationMenuContent>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent">Server & Hosting</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-4 p-6 md:grid-cols-2">
                      
                      <div className="space-y-2">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Server Solutions</p>
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
                        <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">Networking</p>
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
                  </NavigationMenuContent>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#solutions" className="text-sm font-medium px-3 py-2 hover:text-primary transition">
                      Solutions
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="text-sm font-medium px-3 py-2 hover:text-primary transition">
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

*/