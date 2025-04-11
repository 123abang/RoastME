'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, MessageSquare, Wallet } from "lucide-react"

export default function JoinUs() {
  return (
    <section id="join" className="py-20 px-4 relative bg-gradient-to-b from-purple-950 to-black">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-pink-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Ready to Roast Your Way to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">$10M</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Follow <span className="text-purple-400 font-bold">@grokbotroaster</span> on X (notifications on) and join
            our TG for the welcome message (/roastme and /prelaunch).
          </p>
          <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-4">
            Hustle with us, roast with us, win with us!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
          <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1a94e0] text-white border-0 gap-2">
            <Twitter className="h-5 w-5" />
            <a href="https://x.com/GrokBotRoaster">Follow on X</a>
            
          </Button>
          <Button size="lg" className="bg-[#0088cc] hover:bg-[#0077b3] text-white border-0 gap-2">
            <MessageSquare className="h-5 w-5" />
            <a href="https://t.me/+0X9PVT3A1yphNDEx">Join TG</a>
            
          </Button>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white border-0 gap-2"
          >
            <Wallet className="h-5 w-5" />
            Buy Presale Shares
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="p-4 border-b border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                    <div className="text-white font-bold">@user{i * 123}</div>
                  </div>
                  <p className="text-gray-300">
                    {i % 2 === 0 ? (
                      <>
                        Just got roasted by <span className="text-purple-400">@grokbotroaster</span> and I'm dying! 🤣
                        This AI doesn't hold back! $roastme
                      </>
                    ) : (
                      <>
                        Holy sh*t <span className="text-purple-400">@grokbotroaster</span> just ended my whole career
                        with that roast! Still buying more $roastme tho 🚀
                      </>
                    )}
                  </p>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                  <p className="text-sm text-gray-400">
                    {i % 3 === 0
                      ? "This community is wild! Best decision I made was joining early."
                      : i % 3 === 1
                        ? "Getting roasted daily and making money? Sign me up!"
                        : "The memes here are next level. We're definitely going viral."}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
