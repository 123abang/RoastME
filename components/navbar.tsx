"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              RoastmeAI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Join Us
            </button>
            <button
              onClick={() => scrollToSection("presale")}
              className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              Presale
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors whitespace-nowrap"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("presale")}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white whitespace-nowrap"
            >
              Join Presale
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("join")}
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              Join Us
            </button>
            <button
              onClick={() => scrollToSection("presale")}
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              Presale
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection("presale")}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white w-full"
            >
              Join Presale
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
