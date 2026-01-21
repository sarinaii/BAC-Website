"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()
  const [isProgramsOpen, setIsProgramsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false)

  const links = [
    { href: "/", label: "home" },
    { href: "/team", label: "our team" },
    { href: "/contact", label: "contact" },
  ]

  const programLinks = [
    { href: "/programs/freshman-liaison", label: "freshman liaison program" },
    { href: "/programs/insight", label: "insight team" },
    { href: "/programs/machine-learning", label: "machine learning team" },
    { href: "/programs/quant", label: "quant team" },
  ]

  return (
    <nav className="border-b border-border/60 bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20 dark:hidden">
              <Image
                src="/bac-logo.png"
                alt="Business Analytics Club logo"
                width={40}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20 hidden dark:block">
              <Image
                src="/bac-logo-2.png"
                alt="Business Analytics Club logo"
                width={40}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex gap-1 items-center">
              {links.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => setIsProgramsOpen(true)}
                onMouseLeave={() => setIsProgramsOpen(false)}
              >
                <button
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5",
                    pathname.startsWith("/programs")
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  programs
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform duration-200", isProgramsOpen && "rotate-180")}
                  />
                </button>

                {isProgramsOpen && (
                  <div className="absolute top-full left-0 pt-1 w-64">
                    <div className="bg-card/95 backdrop-blur-md border border-border/60 rounded-lg shadow-xl py-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                      {programLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-all duration-150",
                            pathname === link.href
                              ? "bg-accent/90 text-accent-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                          )}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {links.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={cn(
            "md:hidden absolute left-0 right-0 top-16 bg-card/95 backdrop-blur-md border-b border-border/60 shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
          )}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col gap-1">
              {links.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                  className={cn(
                    "w-full px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 flex items-center justify-between",
                    pathname.startsWith("/programs")
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  programs
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform duration-200", isMobileProgramsOpen && "rotate-180")}
                  />
                </button>

                <div
                  className={cn(
                    "ml-4 space-y-1 transition-all duration-300 ease-in-out overflow-hidden",
                    isMobileProgramsOpen ? "max-h-64 opacity-100 mt-1" : "max-h-0 opacity-0"
                  )}
                >
                  {programLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobileProgramsOpen(false)
                      }}
                      className={cn(
                        "block px-3.5 py-2 text-sm rounded-lg transition-all duration-150",
                        pathname === link.href
                          ? "bg-accent/90 text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {links.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-3.5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200",
                    pathname === link.href
                      ? "bg-accent text-accent-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
