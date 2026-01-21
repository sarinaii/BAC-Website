import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsightTeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(72,134,159)]/25 via-background to-[rgb(252,131,135)]/15" />

        <div className="hidden md:block absolute top-10 right-16 w-96 h-96 border-4 border-[rgb(72,134,159)]/30 pointer-events-none" />
        <div className="hidden md:block absolute bottom-16 left-12 w-72 h-72 border-4 border-[rgb(252,131,135)]/25 rotate-45 pointer-events-none" />
        <div className="hidden md:block absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-br from-[rgb(72,134,159)]/10 to-[rgb(252,131,135)]/10 pointer-events-none" />
        <div className="hidden md:block absolute bottom-1/4 left-1/4 w-56 h-56 border-2 border-[rgb(252,131,135)]/20 rotate-12 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-52 relative z-10">
          <div className="max-w-5xl pl-8 sm:pl-12 lg:pl-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-12 leading-tight">
              insight team<span className="header-period">.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-4xl leading-relaxed text-balance">
              An advanced, project-based program where members apply analytics to real-world business problems and
              present actionable insights.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 sm:py-36 lg:py-48 relative">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[rgb(72,134,159)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <Card className="border-2 border-border/60 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="space-y-6 pb-10">
              <CardTitle className="text-4xl sm:text-5xl font-bold">
                program description<span className="header-period">.</span>
              </CardTitle>
              <CardDescription className="text-xl sm:text-2xl leading-relaxed">
                Work on real consulting projects and deliver strategic recommendations to company leadership.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-10">
              <ul className="space-y-8">
                <li className="flex gap-6 leading-relaxed text-xl">
                  <span className="text-[rgb(72,134,159)] mt-2 text-3xl font-bold">•</span>
                  <span className="text-foreground/80">
                    Work in small teams to complete semester-long data analytics projects for real companies.
                  </span>
                </li>
                <li className="flex gap-6 leading-relaxed text-xl">
                  <span className="text-[rgb(72,134,159)] mt-2 text-3xl font-bold">•</span>
                  <span className="text-foreground/80">
                    Develop technical proficiency in tools like Python and SQL.
                  </span>
                </li>
                <li className="flex gap-6 leading-relaxed text-xl">
                  <span className="text-[rgb(72,134,159)] mt-2 text-3xl font-bold">•</span>
                  <span className="text-foreground/80">Receive mentorship from industry professionals.</span>
                </li>
                <li className="flex gap-6 leading-relaxed text-xl">
                  <span className="text-[rgb(72,134,159)] mt-2 text-3xl font-bold">•</span>
                  <span className="text-foreground/80">
                    Learn to translate real-world datasets into strategic business recommendations, presented to firm
                    leadership teams.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
