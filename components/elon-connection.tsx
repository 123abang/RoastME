'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Clock, TrendingUp } from "lucide-react"

export default function ElonConnection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-sm font-bold">
            POWERED BY XAI
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Direct Connection to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Elon Musk</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our unique AI-powered approach gives us an unprecedented advantage: we can effortlessly target Elon Musk
            through Grok's platform, creating viral moments that capture attention and drive engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900/60 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <Zap className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">XAI Integration</h3>
              <p className="text-gray-300">
                Direct connection to Grok's algorithm provides unparalleled visibility and reach on X.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <Target className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Viral Mechanics</h3>
              <p className="text-gray-300">
                Our roasting format is engineered to spread exponentially through X's network effect.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">24/7 Operation</h3>
              <p className="text-gray-300">
                Grok works around the clock while you relax and watch your investment grow.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-blue-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Exponential Growth</h3>
              <p className="text-gray-300">
                Each roast creates a viral loop that exposes new audiences to our community and token.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-8 border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
                <div className="relative h-full w-full flex items-center justify-center rounded-full overflow-hidden border-4 border-blue-500/30">
                  <img
                    src="https://www.bankrate.com/brp/2025/02/06145605/elon-musk-2025-worlds-richest-person.jpg?auto=webp&optimize=high&crop=16:9"
                    alt="Elon Musk"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=256&width=256"
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4">The Elon Advantage</h3>
              <p className="text-gray-300 mb-4">
                By leveraging Grok, Elon Musk's own AI creation, we have a unique opportunity to capture his attention
                and the attention of his massive following. Our AI-powered roasts are designed to create viral moments
                that can be amplified by Elon's engagement.
              </p>
              <p className="text-gray-300">
                This direct connection to one of the world's most influential figures gives RoastmeAI an unprecedented
                advantage in the meme token space, creating potential for explosive growth that other projects simply
                cannot match.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
