
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import servicesData from "@/data/services.json"
import { cn } from "@/lib/utils"
import * as Icons from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

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
interface ServicePageProps {
  params: Promise<{ slug: string }>
}
export const generateStaticParams = () => {
  // service stay in categories.subcategories.services or categories.services
  const servicesInSubcategories = servicesData.categories.filter(e => e.subcategories).map((cat) => cat.subcategories?.map((subcat) => subcat.services))
  const servicesInCategories = servicesData.categories.filter(e => e.services).map((cat) => cat.services)
  const services = [...servicesInSubcategories, ...servicesInCategories].flat()
  return services.map((service: any) => ({
    slug: service?.slug || "",
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const slug = (await params).slug

  // First check if it's a category page
  const category = findCategoryBySlug(slug)

  if (category) {
    const IconComponent = (Icons as any)[category.icon as string] || Icons.Package
    return (
      <div className="max-w-7xl mx-auto px-4 py-28">

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground my-4">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">{category.name}</span>
        </div>

        <div className={"mb-8 relative min-h-[200px] flex flex-col glass-card justify-center items-center"}>
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
                            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 p-2.5 mb-4 group-hover:bg-primary/20 transition-colors">
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
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 p-2.5 mb-4 group-hover:bg-primary/20 transition-colors">
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

  const IconComponent = (Icons as any)[service.icon as string] || Icons.Package

  return (
    <div className="max-w-7xl mx-auto px-4 py-28 space-y-8">
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
      {/* <div className="mb-8 relative  min-h-[200px] flex flex-col glass-card justify-center items-center ">
       
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{service.name}</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl">{service.shortDescription}</p>
        </div>


        <div className="w-40 h-40 absolute md:right-10 right-0 top-0 opacity-10 flex items-center justify-center rounded-xl bg-linear-to-br ${category.color} p-3 text-primary">
          <IconComponent size={150} />
        </div>

      </div>
      <Separator className="my-12" /> */}
      <div className="flex flex-col mt-20">
        <div className="flex gap-4 justify-between relative">
          <div className="w-full">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">{service.name}</h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl">{service.extendedDescription}</p>
            <div className="flex mt-10 flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), 'h-14')}>
                Request Proposal
              </Link>
            </div>
          </div>
          <div className="w-[30vh] h-[30vh] absolute md:right-10 right-0 top-0 opacity-10 flex items-center justify-center rounded-xl bg-linear-to-br ${category.color} p-3 text-primary">
            <IconComponent size={300} />
          </div>

        </div>

      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 lg:mt-40 relative">
        {/* Left Column: Features & Benefits List */}
        <div className="space-y-4 mx-auto max-w-lg">
          {service.features.map((feature: string, index: number) => {
            const benefit = service.benefits[index]
            // Only render if we have a corresponding benefit to maintain the design
            if (!benefit) return null

            return (
              <div key={index} className="group relative pl-4 border-b border-border/40 last:border-0 hover:bg-primary/5 transition-colors rounded-xl -mx-4 px-4">
                <div className="flex items-start gap-6 py-2">
                  <div className="shrink-0 mt-1">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Icons.Check className="w-5 h-5 text-primary transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{feature}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit}</p>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-full flex items-center">
          <div className="relative w-full h-full border-8 border-primary/10 rounded-3xl overflow-hidden ">
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-primary/10 z-10 pointer-events-none" />
            <Image
              src={service.image}
              alt={`${service.name} details`}
              className="w-full h-full object-cover"
              width={1200}
              height={1200}
            />

            {/* Floating Logo Badge */}
            <div className="absolute bottom-0 right-0 z-20 bg-background p-2 rounded-md shadow-lg">
              <Image
                src={'/logo-light.svg'}
                alt="Logo"
                className="w-12 h-auto opacity-80"
                width={50}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center flex-col sm:flex-row gap-4 items-start sm:items-center">
        <Button asChild size="lg">
          <Link href="/contact">Request Proposal</Link>
        </Button>
        <p className="text-sm text-muted-foreground">Get a customized solution tailored to your business needs.</p>
      </div> */}
    </div>
  )
}
