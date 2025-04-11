'use client';


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Rocket, Target, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative bg-gradient-to-b from-black to-purple-950">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              RoastmeAI
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powered by xAI, RoastmeAI is a viral meme community that never stops working for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Bot className="h-12 w-12 text-purple-500 mb-2" />
              <CardTitle className="text-white">Powered by xAI</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-gray-300 text-base">
                RoastmeAI is powered by Grok, Elon Musk's advanced AI system. Our bot roasts users 24/7, creating viral
                content that spreads across X (Twitter).
              </CardDescription>
              <div className="text-gray-300 text-base">
                Every 4 hours, we post and roast up to 38 people, keeping us under X's 200-post limit to avoid spam
                tags. This creates a constant stream of engagement and visibility.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Rocket className="h-12 w-12 text-pink-500 mb-2" />
              <CardTitle className="text-white">Viral Growth Strategy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-gray-300 text-base">
                Our viral engine is simple but effective: users comment on our posts, get roasted by Grok, then
                quote-reply with "$roastme" and a meme-related quip.
              </CardDescription>
              <div className="text-gray-300 text-base">
                This creates a 24/7 viral loop that continuously exposes new audiences to our community. With each
                roast, our reach expands exponentially.
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Target className="h-12 w-12 text-green-500 mb-2" />
              <CardTitle className="text-white">Presale Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base mb-4">
                Our presale is designed to fuel the growth of RoastmeAI:
              </CardDescription>
              <div className="text-gray-300 text-base">
                <ul className="list-disc list-inside space-y-2">
                  <li>Soft cap: $50,000 - Minimum to launch the project</li>
                  <li>Hard cap: $100,000 - Maximum funding for optimal launch</li>
                  <li>25% of funds ($25,000) allocated to liquidity pool</li>
                  <li>48-hour kickoff blitz to teach community engagement</li>
                  <li>Meme and influencer roasting campaigns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
            <CardHeader className="pb-2">
              <Users className="h-12 w-12 text-cyan-500 mb-2" />
              <CardTitle className="text-white">Community Rewards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-base mb-4">
                We believe in rewarding our community members who contribute to our growth:
              </CardDescription>
              <div className="text-gray-300 text-base">
                <ul className="list-disc list-inside space-y-2">
                  <li>Daily giveaways for best comments and quotes</li>
                  <li>50/50 profit split from monetized X account</li>
                  <li>Contributors of $300-$500 get invited to team planning</li>
                  <li>Early supporters receive priority for future initiatives</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
