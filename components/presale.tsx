"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Calendar, Rocket, Target, Users, Zap, TrendingUp } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Presale() {
  const [copied, setCopied] = useState(false)
  const [amount, setAmount] = useState("50")
  const [activeTab, setActiveTab] = useState("how")

  // Presale stats
  const walletAddress = "H7CvbRSjFYYYdYpBT5Ch6NXkUwGrYpVynmWGeyVykB6C"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopied(true)
    toast({
      title: "Wallet address copied!",
      description: "The SOL wallet address has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow any input, but validation will happen when they try to contribute
    setAmount(value)
  }

  return (
    <section id="presale" className="py-20 px-4 relative">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-green-600 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-green-900/50 border border-green-500/30 text-green-300 text-sm font-bold">
            POWERED BY GROK
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Follow Grok's Lead to Viral Glory –{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Your $Roastme Blueprint Below!
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the movement that's set to revolutionize meme communities through the power of AI-driven roasts
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-2xl">$Roastme Roadmap to Virality</CardTitle>
                <CardDescription className="text-gray-300">
                  Our step-by-step plan to dominate the meme space
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                        <Rocket className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Presale Now Live</h3>
                      <p className="text-gray-300">
                        Join via{" "}
                        <a
                          href="https://www.pinksale.finance/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-400 hover:underline"
                        >
                          PinkSaleFinance
                        </a>{" "}
                        – raising $50K-$100K, with 50% locked into the liquidity pool for stability.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Momentum Building</h3>
                      <p className="text-gray-300">
                        Our Telegram and X are already buzzing – follow{" "}
                        <span className="text-purple-400">@grokbotroaster</span>, quote your presale roast with{" "}
                        <span className="text-green-400">$roastme</span>, and ride Grok's lead!
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white">
                        <Calendar className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Launch May 1st</h3>
                      <p className="text-gray-300">
                        Community's primed – keep quoting <span className="text-green-400">$roastme</span> on fresh
                        roasts for 48 hours as Grok sets the pace.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white">
                        <Target className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Day 3 – Monster Roasts</h3>
                      <p className="text-gray-300">
                        We target big memes and influencers – Grok drops $fat jokes, you comment, get roasted, and quote{" "}
                        <span className="text-green-400">$roastme</span> with "loves $fat jokes" or a killer quip.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-white">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Days 5-8 – Viral Surge</h3>
                      <p className="text-gray-300">
                        Double our audience daily with relentless roasting – follow Grok, amplify the burns, and go
                        viral together.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Day 9 – Roast Elon</h3>
                      <p className="text-gray-300">
                        Grok's got a plan to roast Elon, snag his follow, like, and RT – maximum exposure incoming.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 flex items-center justify-center text-white">
                        <Rocket className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Forever Roasting</h3>
                      <p className="text-gray-300">
                        Grok never stops, and <span className="text-green-400">$roastme</span>'s value keeps climbing –
                        work half as hard as me, and we'll soar!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mt-6">
                  <a
                    href="https://www.pinksale.finance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block"
                  >
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white">
                      Join Presale on PinkSale
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-1 bg-gray-800/50">
                <TabsTrigger value="how" className="text-gray-300 data-[state=active]:text-white">
                  How It Works
                </TabsTrigger>
              </TabsList>

              <TabsContent value="how" className="mt-4">
                <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">How RoastmeAI Works</CardTitle>
                    <CardDescription className="text-gray-300">
                      The viral meme powered by xAI that never stops working for you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <div>
                          <p className="text-white font-bold">Follow @grokbotroaster on X</p>
                          <p className="text-gray-300 text-sm">Turn on notifications to never miss a post</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <div>
                          <p className="text-white font-bold">Comment on our posts</p>
                          <p className="text-gray-300 text-sm">
                            We post 6 times daily and roast the first 32 commenters
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <div>
                          <p className="text-white font-bold">Quote the roast with $roastme</p>
                          <p className="text-gray-300 text-sm">Add a funny comment to help us go viral</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                          4
                        </div>
                        <div>
                          <p className="text-white font-bold">Earn rewards</p>
                          <p className="text-gray-300 text-sm">
                            Daily giveaways and 50% profit sharing for active members
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                      <p className="text-blue-300 font-bold">Automated by Grok</p>
                      <p className="text-gray-300 text-sm mt-1">
                        Our system is fully automated by Grok AI, ensuring 24/7 roasting and tagging capabilities. We'll
                        even be automatically tagging Elon to maximize visibility!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
