import { Instagram, Facebook, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo on the left */}
          <div className="flex items-center">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 dark:hidden">
              <Image
                src="/bac-logo.png"
                alt="Business Analytics Club logo"
                width={50}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20 hidden dark:block">
              <Image
                src="/bac-logo-2.png"
                alt="Business Analytics Club logo"
                width={50}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </div>

          {/* Designer credits in the middle */}
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground/60">
              Website designed by Rahul Jayachandran, Joseph Cheng, and Sarina Li
            </p>
          </div>

          {/* Social links on the right */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/sternbac/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/SternBAC/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:analytic@stern.nyu.edu"
              className="h-10 w-10 rounded-lg bg-muted hover:bg-primary/10 flex items-center justify-center transition-colors"
              aria-label="email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
