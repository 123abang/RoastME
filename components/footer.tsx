"use client"

import { Button } from "@/components/ui/button"
import { Twitter, MessageSquare, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-black py-12 px-4 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
              RoastmeAI
            </h2>
            <p className="text-gray-400">Roast, Win, Earn with the power of xAI</p>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 gap-2">
              <Twitter className="h-4 w-4" />
              <a href="https://x.com/GrokBotRoaster">Follow on X</a>
              
            </Button>
            <Button variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30 gap-2">
              <MessageSquare className="h-4 w-4" />
              <a href="https://t.me/+0X9PVT3A1yphNDEx">Join TG</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <p className="text-gray-500 text-sm mr-4">© 2025 RoastmeAI. All rights reserved.</p>
            <a href="https://www.pinksale.finance/" target="_blank" rel="noopener noreferrer">
              <img
                src="/pinksale-logo.png"
                alt="PinkSale"
                className="h-6 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg?height=24&width=80"
                }}
              />
            </a>
          </div>

          <div className="flex items-center gap-8">
            <Button variant="link" className="text-gray-400 hover:text-gray-300">
              Terms
            </Button>
            <Button variant="link" className="text-gray-400 hover:text-gray-300">
              Privacy
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-800 hover:border-purple-500 hover:bg-purple-900/30"
              onClick={scrollToTop}
            >
              <ArrowUp className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
