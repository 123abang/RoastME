'use client';

import { Button } from "@/components/ui/button"
import Image from 'next/image'
import Grok from './image/grok.jpg'

export default function RoastmeHero() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-pink-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                Meet the Ultimate{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  Roasting Machine
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                RoastmeAI is the first meme token powered by Grok's advanced AI capabilities, delivering savage roasts
                24/7 while building a community that profits together.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-white font-bold text-lg mb-2">AI-Powered Roasts</h3>
                  <p className="text-gray-300">
                    Grok's advanced AI delivers personalized, hilarious roasts that keep the community engaged and
                    laughing.
                  </p>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-white font-bold text-lg mb-2">Community Rewards</h3>
                  <p className="text-gray-300">
                    50% of all profits are shared with active community members who participate in the roasting
                    ecosystem.
                  </p>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-white font-bold text-lg mb-2">Viral Growth</h3>
                  <p className="text-gray-300">
                    Our unique quote-and-roast mechanism creates a viral loop that continuously expands our reach.
                  </p>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-white font-bold text-lg mb-2">Elon Connection</h3>
                  <p className="text-gray-300">
                    Direct connection to Elon Musk through Grok gives us unprecedented visibility and growth potential.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.pinksale.finance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white w-full"
                  >
                    <Image
                      src={Grok}
                      alt="PinkSale"
                      className="w-5 h-5 mr-2"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=20&width=20"
                      }}
                    />
                    Join Presale on PinkSale
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl"></div>
              <div className="relative">
                <Image
                  src={Grok}
                  alt="RoastmeAI Hero"
                  className="w-full max-w-lg mx-auto rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=600&width=600"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
