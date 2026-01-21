"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Instagram, Facebook, Coffee } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="border-b border-border/60 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance mx-auto">
            get in touch<span className="header-period">.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl leading-relaxed text-pretty mx-auto">
            Have questions about joining BAC or want to collaborate on a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Email */}
            <Link href="mailto:analytic@stern.nyu.edu">
              <Card className="border-border/60 bg-card hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer group">
                <CardContent className="pt-10 pb-8 px-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">
                    email<span className="header-period">.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Send us an email at analytic@stern.nyu.edu
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Coffee Chat Form */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc_APdsRErGy5_wICmFqVPRVJQRrE5Z1fpp-OSBm7eNrQ5RxA/viewform?usp=dialog" /* TODO: Add coffee chat form link here */>
              <Card className="border-border/60 bg-card hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer group">
                <CardContent className="pt-10 pb-8 px-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                    <Coffee className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">
                    coffee chat<span className="header-period">.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schedule a coffee chat with our team
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Instagram */}
            <Link href="https://www.instagram.com/sternbac/?hl=en" target="_blank" rel="noopener noreferrer">
              <Card className="border-border/60 bg-card hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer group">
                <CardContent className="pt-10 pb-8 px-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center mb-6 transition-colors">
                    <Instagram className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">
                    instagram<span className="header-period">.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Follow us @sternbac for updates and events
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Facebook */}
            <Link href="https://www.facebook.com/SternBAC/" target="_blank" rel="noopener noreferrer">
              <Card className="border-border/60 bg-card hover:shadow-lg hover:border-primary/50 transition-all h-full cursor-pointer group">
                <CardContent className="pt-10 pb-8 px-6 text-center h-full flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                    <Facebook className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3">
                    facebook<span className="header-period">.</span>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Connect with us on Facebook
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
