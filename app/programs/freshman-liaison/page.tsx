import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FreshmanLiaisonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header - Welcoming educational theme with warm accents */}
      <section className="border-b border-border/40 relative overflow-hidden">
        {/* Warm gradient background for beginner-friendly feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(140,191,196)]/30 via-background to-[rgb(250,202,202)]/25" />

        {/* Friendly geometric shapes */}
        <div className="hidden md:block absolute top-10 right-10 w-80 h-80 border-4 border-[rgb(140,191,196)]/40 rounded-3xl rotate-12 pointer-events-none" />
        <div className="hidden md:block absolute bottom-20 left-10 w-64 h-64 bg-[rgb(250,202,202)]/20 rounded-full pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 right-1/4 w-48 h-48 border-4 border-[rgb(72,134,159)]/30 rounded-2xl -rotate-6 pointer-events-none" />
        <div className="hidden md:block absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-[rgb(140,191,196)]/15 to-[rgb(250,202,202)]/15 rounded-3xl rotate-45 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-52 relative z-10">
          <div className="max-w-5xl pl-8 sm:pl-12 lg:pl-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-12 leading-tight">
              freshman liaison program<span className="header-period">.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-4xl leading-relaxed text-balance">
              The Freshman Liaison Program is designed for first-year students interested in exploring data analytics
              and its applications in business decision-making. Through hands-on projects, workshops, and mentorship,
              participants develop technical skills in tools like Python, SQL, and Figma while gaining early exposure to
              different career pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Content - Spacious, friendly layout */}
      <section className="py-28 sm:py-36 lg:py-48 relative">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[rgb(140,191,196)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <Card className="border-2 border-border/60 bg-card shadow-2xl hover:shadow-3xl transition-all duration-300">
            <CardHeader className="space-y-6 pb-10">
              <CardTitle className="text-4xl sm:text-5xl font-bold">
                program description<span className="header-period">.</span>
              </CardTitle>
              <CardDescription className="text-xl sm:text-2xl leading-relaxed">
                Build foundational skills and connect with mentors while exploring the world of data analytics.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12">
              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  professional development<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Build career readiness through resume workshops, mock interviews, and speaker events with industry
                  professionals.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  mentorship<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Receive personalized guidance from upperclassmen mentors who provide support on academics, recruiting,
                  and skill development.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  community involvement<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Join a tight-knit cohort of peers and contribute to the club's events, initiatives, and broader Stern
                  community.
                </p>
              </div>

              <div className="space-y-5">
                <h3 className="font-bold text-3xl">
                  data analytics projects<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl">
                  Gain hands-on experience using Python and other tools to analyze real-world business data and present
                  actionable insights.
                </p>
              </div>

              <div className="pt-8 space-y-5">
                <h3 className="font-bold text-3xl">
                  example projects<span className="header-period">.</span>
                </h3>
                <p className="text-foreground/80 leading-relaxed text-xl italic">Coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
