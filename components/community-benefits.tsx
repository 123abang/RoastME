'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, DollarSign, Bot, Zap } from "lucide-react"

export default function CommunityBenefits() {
  return (
    <section id="benefits" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Why Join{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              RoastmeAI
            </span>
            ?
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Roast, Win, Earn!
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're building a 24/7 community that roasts, grows, and cashes in together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Gift className="h-12 w-12 text-pink-500 mb-2" />
              <CardTitle className="text-white">Daily Giveaways</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base">
                Best quote of the day wins a prize (presale tokens, swag, and more). Roast hard, win big!
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <DollarSign className="h-12 w-12 text-green-500 mb-2" />
              <CardTitle className="text-white">Monetization Split</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base">
                We'll monetize our X account in weeks—50% of profits go to qualified holders who comment and requote
                daily.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Bot className="h-12 w-12 text-cyan-500 mb-2" />
              <CardTitle className="text-white">Meme Curation Bot</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base">
                Our TG bot hunts the best memes 24/7 using killer parameters—stay ahead of the curve!
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Zap className="h-12 w-12 text-yellow-500 mb-2" />
              <CardTitle className="text-white">Qualifications</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base">
                Hold RoastmeAI shares + actively roast/quote daily to qualify for rewards and profit sharing.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full max-w-md">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl"></div>
              <div className="relative h-full w-full flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full border-8 border-purple-500/30 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">50%</span>
                  </div>
                  <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 text-white font-bold">
                    Community
                  </div>
                  <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 text-white font-bold">
                    Project
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-md">
            <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Profit Sharing Model</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-lg">•</span>
                    <span>50% of all monetization goes directly to active community members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-lg">•</span>
                    <span>Daily participation required - comment and requote to qualify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-lg">•</span>
                    <span>Transparent distribution through smart contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold text-lg">•</span>
                    <span>The more you contribute, the bigger your share</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
