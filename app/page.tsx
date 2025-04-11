import Hero from "@/components/hero"
import CommunityBenefits from "@/components/community-benefits"
import JoinUs from "@/components/join-us"
import Presale from "@/components/presale"
import About from "@/components/about"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import TaglineBanner from "@/components/tagline-banner"
import ElonConnection from "@/components/elon-connection"
import RoastmeHero from "@/components/roastme-hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-purple-950">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/metaverse-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>
      <Navbar />
      <TaglineBanner />
      {/* Add extra padding to the top to account for the navbar and tagline banner */}
      <div className="pt-36 md:pt-44"></div>
      <Hero />
      <RoastmeHero />
      <CommunityBenefits />
      <ElonConnection />
      <JoinUs />
      <Presale />
      <About />
      <Footer />
    </main>
  )
}
