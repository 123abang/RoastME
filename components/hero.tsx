"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from 'next/image'
import Grok from './image/grok.jpg'


export default function Hero() {
  const scrollToPresale = () => {
    const presaleSection = document.getElementById("presale")
    if (presaleSection) {
      presaleSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-pink-600 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-300 text-sm font-bold">
              POWERED BY XAI
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                RoastmeAI
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Get Roasted. Go Viral. <span className="text-green-400">Earn SOL.</span>
            </p>
            <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
              The first AI-powered meme community that roasts 24/7, targets Elon Musk directly, and shares 50% of
              profits with active members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0"
                onClick={scrollToPresale}
              >
                Join Presale
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30"
                onClick={() => window.open("https://twitter.com/grokbotroaster", "_blank")}
              >
                <a href="https://x.com/GrokBotRoaster">Follow @grokbotroaster</a>
                

              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 blur-md"></div>
              <div className="relative bg-black/40 backdrop-blur-sm rounded-3xl p-6 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Image
                      src={Grok}
                      alt="Grok Bot"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=32&width=32"
                      }}
                    />
                  </div>
                  <div className="text-white font-bold text-xl">@grokbotroaster</div>
                </div>
                <div className="bg-gray-900/60 rounded-xl p-4 mb-4">
                  <p className="text-gray-300 mb-2">
                    <span className="text-white font-bold">@user123:</span> I bet AI can't roast me better than my
                    friends
                  </p>
                  <div className="border-l-4 border-purple-500 pl-3 mt-2">
                    <p className="text-white font-bold">@grokbotroaster:</p>
                    <p className="text-gray-200">
                      Your friends go easy on you because they pity you. I don't have that programming limitation. Your
                      selfie looks like it was taken by a potato that felt bad for you.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-900/60 rounded-xl p-4">
                  <p className="text-gray-300 mb-2">
                    <span className="text-white font-bold">@meme_lover:</span> Roast me if you can, bot!
                  </p>
                  <div className="border-l-4 border-purple-500 pl-3 mt-2">
                    <p className="text-white font-bold">@grokbotroaster:</p>
                    <p className="text-gray-200">
                      "Meme lover" is your personality because you couldn't develop a real one. Your bio is emptier than
                      your wallet after this presale.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
