import { Card, CardContent } from "@/components/ui/card"
import servicesData from "@/data/services.json"
import * as Icons from "lucide-react"
import Link from "next/link"



export default function ServicePage() {

  return <div className="max-w-7xl mx-auto px-4 py-28">

    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground my-4">
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <span>/</span>
      <span className="text-foreground">Services</span>
    </div>

    <div className="mb-8 relative min-h-[200px] flex flex-col glass-card justify-center items-center ">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-balance">Our Services</h1>
      <p className="text-lg text-muted-foreground text-pretty max-w-3xl">We offer a wide range of services to help you achieve your business goals.</p>

    </div>
    <div className="space-y-12">
      {
        servicesData.categories.map((category) => {
          const IconComponent = (Icons as any)[category.icon as string] || Icons.Package
          return (
            <div >
              <div className="flex items-center gap-4 mb-6 border-b border-border/50 p-6">
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-xl bg-linear-to-br ${category.color} p-3 text-white shadow-lg`}
                >
                  <IconComponent size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-1 flex items-center gap-2"> {category.name}</h2>
                  <p className="text-lg text-muted-foreground text-pretty max-w-3xl">{category.description}</p>
                </div>



              </div>
              {/* Display subcategories if they exist */}
              {category.subcategories && category.subcategories.length > 0 ? (
                <div className="space-y-12">
                  {category.subcategories.map((subcat) => (
                    <div key={subcat.id} >
                      {/* <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"> <span className="border-l-4 border-primary p-2 bg-primary/10">{category.name}</span> <IconComponent /> {subcat.name}</h2> */}
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
                                  {/* <Image src={service.image} alt={service.name} width={100} height={100} /> */}
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
                <div className="space-y-12">

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
                              {/* <Image src={service.image ?? ""} alt={service.name} width={100} height={100} /> */}
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          )
        })
      }
    </div></div>
}
