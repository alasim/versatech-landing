"use client"

import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle } from "lucide-react"
import * as Icons from "lucide-react"
import servicesData from "@/data/services.json"

// Find category by slug
function findCategoryBySlug(slug: string) {
  return servicesData.categories.find((cat) => cat.slug === slug)
}

// Find service by slug (within categories and subcategories)
function findServiceBySlug(slug: string) {
  for (const category of servicesData.categories) {
    // Check top-level services
    if (category.services) {
      const service = category.services.find((s) => s.slug === slug)
      if (service) return { service, categoryName: category.name, subcategoryName: null }
    }
    // Check subcategory services
    if (category.subcategories) {
      for (const subcat of category.subcategories) {
        const service = subcat.services.find((s) => s.slug === slug)
        if (service) return { service, categoryName: category.name, subcategoryName: subcat.name }
      }
    }
  }
  return null
}

export default function ServicePage() {
  const params = useParams()
  const slug = params.slug as string

  // First check if it's a category page
  const category = findCategoryBySlug(slug)

  if (category) {
    const IconComponent = (Icons as any)[category.icon as string] || Icons.Package
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground my-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </div>

        <div className="mb-8 relative min-h-[200px] flex flex-col glass-card justify-center items-center ">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{category.name}</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">{category.description}</p>

        </div>

        {/* Display subcategories if they exist */}
        {category.subcategories && category.subcategories.length > 0 ? (
          <div className="space-y-12">
            {category.subcategories.map((subcat) => (
              <div key={subcat.id} >
                <h2 className="text-2xl font-bold mb-6">{subcat.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subcat.services.map((service) => {
                    const IconComponent = (Icons as any)[service.icon as string] || Icons.Package
                    return (
                      <Link key={service.id} href={`/services/${service.slug}`}>
                        <Card className="h-full bg-background/50 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
                          <CardContent className="p-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 p-2.5 mb-4 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="text-primary" size={20} />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                            <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                          </CardContent>
                        </Card>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : category.services && category.services.length > 0 ? (
          // Display direct services if no subcategories
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service) => {
              const IconComponent = (Icons as any)[service.icon as string] || Icons.Package
              return (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <Card className="h-full glass-card border border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 p-2.5 mb-4 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="text-primary" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        ) : null}
      </div>
    )
  }

  // If not a category, check if it's a service
  const result = findServiceBySlug(slug)

  if (!result) {
    notFound()
  }

  const { service, categoryName, subcategoryName } = result


  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground my-4">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/services/${findCategoryBySlug(categoryName.toLowerCase().replace(/\s+/g, "-"))?.slug || ""}`}
          className="hover:text-primary transition-colors"
        >
          {categoryName}
        </Link>
        {subcategoryName && (
          <>
            <span>/</span>
            <span>{subcategoryName}</span>
          </>
        )}
        <span>/</span>
        <span className="text-foreground">{service.name}</span>
      </div>
      <div className="mb-8 relative min-h-[200px] flex flex-col glass-card justify-center items-center ">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{service.name}</h1>
        <p className="text-lg text-muted-foreground text-pretty max-w-3xl">{service.shortDescription}</p>
        {/* <Button asChild variant="ghost" size="sm" className="gap-2 mb-4">
          <Link href="/">
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </Button> */}


      </div>

      <div className="grid gap-8 lg:grid-cols-2 mb-12">
        <Card className="glass-card">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Core Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Key Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center flex-col sm:flex-row gap-4 items-start sm:items-center">
        {/* <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
          Gradient
        </button> */}
        <Button asChild size="lg">
          <Link href="/#contact">Request Proposal</Link>
        </Button>
        <p className="text-sm text-muted-foreground">Get a customized solution tailored to your business needs.</p>
      </div>
    </div>
  )
}
