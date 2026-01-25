"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const generalLeadership = [
  {
    name: "Rahul Jayachandran",
    position: "co-president",
    email: "rahul.jayachandran@nyu.edu",
    image: "/rahul_jayachandran.JPG",
    description: "Co-President of the Business Analytics Club, responsible for overall club strategy and vision.",
    objectPosition: "center 5%",
  },
  {
    name: "Rayan Basheer",
    position: "co-president",
    email: "rayan.basheer@stern.nyu.edu",
    image: "/rayan_basheer.jpg",
    description: "Co-President of the Business Analytics Club, overseeing club governance and member engagement.",
    objectPosition: "center 5%",
  },
  {
    name: "Siya Jain",
    position: "vice president",
    email: "saj8830@stern.nyu.edu",
    image: "/siya_jain.JPG",
  },
]

const flpLeads = [
  {
    name: "Sarina Li",
    position: "director",
    email: "sxl2145@stern.nyu.edu",
    image: "/sarina_li.JPG",
    description: "Director of the Freshman Liaison Program, guiding first-year students in data analytics.",
    objectPosition: "center 10%",
  },
  {
    name: "Daniel Liang",
    position: "director",
    email: "dl5398@nyu.edu",
    image: "/daniel_liang.JPG",
    description: "Director of the Freshman Liaison Program, mentoring newcomers in business analytics.",
    objectPosition: "center 10%",
  },
  {
    name: "Aum Narkar",
    position: "director",
    email: "aum.narkar@stern.nyu.edu",
    image: "/aum_narkar.JPG",
    description: "Director of the Freshman Liaison Program, mentoring newcomers in business analytics.",
    objectPosition: "center 10%",
  },
]

const insightLeads = [
  {
    name: "Kevin Dong",
    position: "director",
    email: "kld9201@nyu.edu",
    image: "/kevin_dong.JPG",
    description: "Director of the Insight Team, leading advanced analytics projects and strategic consulting.",
    objectPosition: "center 20%",
  },
  {
    name: "Mohammed Ulayyet",
    position: "director",
    email: "mou2011@nyu.edu",
    image: "/mohammed_ulayyet.JPG",
    description: "Director of the Insight Team, managing real-world business analytics consulting projects.",
    objectPosition: "center 20%",
  },
]

const mlLeads = [
  {
    name: "Yuyang Hu",
    position: "director",
    email: "yh5525@nyu.edu",
    image: "/yuyang_hu.JPG",
    description: "Director of the Machine Learning Team, leading technical workshops and AI projects.",
  },
  {
    name: "Vayun Malik",
    position: "director",
    email: "vm2720@nyu.edu",
    image: "/vayun_malik.JPG",
    description: "Director of the Machine Learning Team, overseeing data science and ML initiatives.",
  },
  {
    name: "Jean Park",
    position: "director",
    email: "jjp9203@nyu.edu",
    image: "/jean_park.JPG",
    description: "Director of the Machine Learning Team, overseeing data science and ML initiatives.",
  },
]

const quantLeads = [
  {
    name: "Eshaan Saxena",
    position: "director",
    email: "es6206@nyu.edu",
    image: "/eshaan-saxena.JPG",
    description: "Director of the Quant Team, leading quantitative finance and trading strategies.",
  },
  {
    name: "Joseph Cheng",
    position: "director",
    email: "jxc2008@nyu.edu",
    image: "/joseph_cheng.JPG",
    description: "Director of the Quant Team, leading quantitative finance and trading strategies.",
  },
]

const otherEboard = [
  // {
  //   name: "sarina li",
  //   position: "director of operations",
  //   email: "sarina.li@stern.nyu.edu",
  //   image: "/sarina-li.JPG",
  //   description: "Director of Operations, managing club logistics and administrative functions.",
  //   objectPosition: "center 20%",
  // },
  // {
  //   name: "shriya dani",
  //   position: "director of marketing",
  //   email: "shriyadani@nyu.edu",
  //   image: "/shriya-dani.JPG",
  //   description: "Director of Marketing, leading brand strategy and promotional campaigns.",
  //   objectPosition: "center 15%",
  // },
  // {
  //   name: "navya garg",
  //   position: "director of marketing",
  //   email: "navyagarg@stern.nyu.edu",
  //   image: "/navya-garg.jpeg",
  //   description: "Director of Marketing, managing social media and community outreach.",
  // },
  // {
  //   name: "amelia liu",
  //   position: "director of events",
  //   email: "al8384@nyu.edu",
  //   image: "/amelia-liu.JPG",
  //   description: "Director of Events, organizing workshops, networking sessions, and club activities.",
  // },
  {
    name: "Aishwarya Seshadri",
    position: "director of marketing",
    email: "as19210@nyu.edu",
    image: "/aishwarya-seshadri.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
  {
    name: "Riya Goenka",
    position: "director of marketing",
    email: "rg5161@stern.nyu.edu",
    image: "/riya_goenka.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
  {
    name: "Vivek Bellam",
    position: "director of events",
    email: "vivek.bellam@stern.nyu.edu",
    image: "/vivek_bellam.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
  {
    name: "Bhavya Krishnan",
    position: "director of events",
    email: "bk3124@nyu.edu",
    image: "/bhavya_krishnan.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
  {
    name: "Tanvi Aeimireddy",
    position: "director of operations",
    email: "ta3008@stern.nyu.edu",
    image: "/tanvi_aemireddy.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
  {
    name: "Sahil Dua",
    position: "treasurer",
    email: "sd6516@stern.nyu.edu",
    image: "/sahil_dua.JPG",
    description: "Director of Events, coordinating speaker series and professional development programs.",
  },
]

function FlippableCard({ member }: { member: any }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const FLIP_ENABLED = false; // Change to true to re-enable

  return (
    <div
      className="relative cursor-pointer perspective-1000"
      onClick={() => FLIP_ENABLED && setIsFlipped(!isFlipped)}
      onKeyDown={(e) => FLIP_ENABLED && e.key === "Enter" && setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
    >
      <div
        className={`relative w-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front of card */}
        <Card
          className={`w-full backface-hidden border-border/40 bg-card hover:shadow-2xl hover:border-[rgb(72,134,159)]/50 transition-all duration-300 ${
            isFlipped ? "absolute inset-0 invisible" : ""
          }`}
        >
          <CardContent className="px-6 py-0 flex flex-col">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden bg-muted ring-1 ring-[rgb(72,134,159)]/30 mb-4">
              <img 
                src={member.image || "/placeholder.svg"} 
                alt={member.name} 
                className="w-full h-full" 
                style={{ 
                  objectPosition: `${member.objectPosition || 'center 25%'} !important`,
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold normal-case">{member.name}</h3>
              <p className="text-sm font-medium text-[rgb(72,134,159)]">{member.position}</p>
              <p className="text-sm text-muted-foreground/80">{member.email}</p>
            </div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className={`absolute inset-0 backface-hidden border-border/40 bg-card hover:shadow-2xl hover:border-[rgb(72,134,159)]/50 transition-all duration-300 rotate-y-180 ${
            !isFlipped ? "invisible" : ""
          }`}
        >
          <CardContent className="p-8 flex flex-col justify-center h-full">
            <p className="text-muted-foreground/80 leading-relaxed text-base">{member.description}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header - Enhanced with better spacing */}
      <section className="border-b border-border/40 relative overflow-hidden">
        {/* Dynamic orange gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(255,140,0)]/25 via-background to-[rgb(252,131,135)]/30" />
        
        {/* Vibrant geometric shapes with orange accents */}
        <div className="hidden md:block absolute top-20 right-16 w-72 h-72 bg-gradient-to-br from-[rgb(255,165,0)]/20 to-[rgb(252,131,135)]/15 rounded-full pointer-events-none" />
        <div className="hidden md:block absolute bottom-10 left-20 w-96 h-96 border-4 border-[rgb(255,140,0)]/30 rounded-2xl -rotate-12 pointer-events-none" />
        <div className="hidden md:block absolute top-1/3 left-1/4 w-56 h-56 border-3 border-[rgb(252,131,135)]/35 rounded-full rotate-45 pointer-events-none" />
        <div className="hidden md:block absolute bottom-1/4 right-1/3 w-44 h-44 bg-gradient-to-tl from-[rgb(255,120,50)]/20 to-[rgb(255,180,100)]/15 rounded-3xl -rotate-6 pointer-events-none" />
        <div className="hidden md:block absolute top-1/2 right-12 w-64 h-64 border-4 border-[rgb(255,165,0)]/25 rounded-full pointer-events-none" />
        <div className="hidden md:block absolute bottom-1/3 left-12 w-52 h-52 bg-[rgb(255,140,0)]/15 rounded-2xl rotate-12 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
            our team<span className="header-period">.</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">
            Meet the executive board members leading Business Analytics Club to new heights.
          </p>
        </div>
      </section>

      {/* General Leadership Section */}
      <section className="py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center">
            general leadership<span className="header-period">.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
            {generalLeadership.map((member, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-1.25rem)]">
                <FlippableCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leads Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-gradient-to-br from-[rgb(72,134,159)]/10 to-muted/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[rgb(72,134,159)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[rgb(252,131,135)]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* FLP Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              freshman liaison program<span className="header-period">.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
              {flpLeads.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-1.25rem)]">
                  <FlippableCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Insight Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              insight team<span className="header-period">.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
              {insightLeads.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-1.25rem)]">
                  <FlippableCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* ML Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              machine learning team<span className="header-period">.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
              {mlLeads.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-1.25rem)]">
                  <FlippableCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Quant Leads */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              quant team<span className="header-period">.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
              {quantLeads.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-1.25rem)]">
                  <FlippableCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Other Eboard */}
          <div className="mb-20">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-12 text-center">
              other eboard<span className="header-period">.</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
              {otherEboard.map((member, index) => (
                <div key={index} className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.67rem)]">
                  <FlippableCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105">
            view previous executive boards
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
