"use client"
import servicesData from "@/data/services.json"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()
  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src={theme === 'dark' ? '/logo-dark.svg' : '/logo-light.svg'} alt="Logo" width={150} height={40} className="" />
            </div>
            <p className="text-muted-foreground text-sm">Versatech delivers enterprise-grade communication and business platforms designed for modern organizations.</p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {servicesData.categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/services/${category.slug}`} className="hover:text-foreground transition">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="#" className="hover:text-foreground transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Careers
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="hover:text-foreground transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition">
                  Compliance
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Versatech Solutions. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-foreground transition">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
