import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Enhanced with larger typography and better spacing */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="max-w-6xl mx-auto space-y-12 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.95]">
              <span style={{ color: "rgb(72, 134, 159)" }} className="dark-mode-pink">
                business
              </span>{" "}
              <span style={{ color: "rgb(72, 134, 159)" }} className="dark-mode-pink">
                analytics
              </span>{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, rgb(72, 134, 159), rgb(250, 202, 202))",
                }}
              >
                <span className="dark-mode-gradient-club">club.</span>
              </span>
              {/* <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, rgb(72, 134, 159), rgb(250, 202, 202))",
                }}
              >
                <span className="dark-mode-gradient-club">.</span>
              </span> */}
            </h1>
            <p
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance"
              style={{ color: "rgb(72, 134, 159)" }}
            >
              Where business meets innovation
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 leading-relaxed text-balance max-w-4xl mx-auto">
              The Business Analytics Club is NYU Stern's premier tech club, dedicated to bridging data and business. We
              help students develop analytical, technical, and strategic thinking skills through hands-on projects,
              workshops, and professional development programs.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/70 leading-relaxed text-balance max-w-3xl mx-auto">
              Our members explore the applications of data analytics in finance, consulting, quant, and beyond -
              preparing the next generation of data-driven business leaders.
            </p>
            <div className="flex flex-wrap gap-6 pt-8 justify-center">
              <Button
                asChild
                size="lg"
                className="font-semibold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all h-14 px-10 text-lg"
              >
                <Link href="#programs">explore our programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent backdrop-blur-sm hover:bg-primary/10 h-14 px-10 text-lg border-2"
              >
                <Link href="/contact">get in touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section - Enhanced with better card design */}
      <section id="programs" className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-28">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-10 text-balance">
              our programs<span className="header-period">.</span>
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/70 max-w-4xl mx-auto leading-relaxed text-balance">
              Explore our four specialized teams, each focused on different aspects of data analytics and business
              strategy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <Link href="/programs/freshman-liaison" className="group">
              <Card className="border-2 border-border/60 bg-card hover:shadow-3xl hover:border-primary hover:-translate-y-2 hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="pt-12 pb-10 px-10">
                  <h3 className="font-bold text-2xl mb-5 group-hover:text-primary transition-colors">
                    freshman liaison program
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Designed for first-year students interested in exploring data analytics and its applications in
                    business decision-making.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/insight" className="group">
              <Card className="border-2 border-border/60 bg-card hover:shadow-3xl hover:border-accent hover:-translate-y-2 hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="pt-12 pb-10 px-10">
                  <h3 className="font-bold text-2xl mb-5 group-hover:text-accent transition-colors">insight team</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    An advanced, project-based program where members apply analytics to real-world business problems and
                    present actionable insights.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/machine-learning" className="group">
              <Card className="border-2 border-border/60 bg-card hover:shadow-3xl hover:border-primary hover:-translate-y-2 hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="pt-12 pb-10 px-10">
                  <h3 className="font-bold text-2xl mb-5 group-hover:text-primary transition-colors">
                    machine learning team
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Offers hands-on experience in machine learning and data science through technical workshops and a
                    semester-long capstone project.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/programs/quant" className="group">
              <Card className="border-2 border-border/60 bg-card hover:shadow-3xl hover:border-accent hover:-translate-y-2 hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="pt-12 pb-10 px-10">
                  <h3 className="font-bold text-2xl mb-5 group-hover:text-accent transition-colors">quant team</h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Prepares students for careers in quantitative finance and trading through applied math, coding, and
                    market simulation exercises.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced design
      <section className="py-28 sm:py-36 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto border-border/40 bg-card shadow-xl">
            <CardContent className="pt-12 pb-12 px-8 sm:px-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
                stay updated<span className="header-period">.</span>
              </h2>
              <p className="text-muted-foreground/80 text-center mb-10 leading-relaxed text-lg">
                Subscribe to our newsletter for updates on events, workshops, and opportunities.
              </p>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      first name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder="john"
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="doe"
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-base"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="newsletterEmail" className="text-sm font-medium">
                    email
                  </label>
                  <input
                    id="newsletterEmail"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-base"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-medium shadow-lg hover:shadow-xl transition-all h-12 text-base"
                >
                  subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section> */}

      <Footer />
    </div>
  )
}
