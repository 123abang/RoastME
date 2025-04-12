"use client"

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
          <a href="https://x.com/GrokBotRoaster" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto">
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1a94e0] text-white border-0 gap-2 w-full">
              <Twitter className="h-5 w-5" />
              Follow on X
            </Button>
          </a>
          <a
            href="https://t.me/+0X9PVT3A1yphNDEx"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button size="lg" className="bg-[#0088cc] hover:bg-[#0077b3] text-white border-0 gap-2 w-full">
              <MessageSquare className="h-5 w-5" />
              Join TG
            </Button>
          </a>
          <a
            href="https://www.pinksale.finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 text-white border-0 gap-2 w-full"
            >
              <Wallet className="h-5 w-5" />
              Buy Presale Shares
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="text-white font-bold">@crypto_chad420</div>
                </div>
                <p className="text-gray-300">
                  Just got roasted by <span className="text-purple-400">@grokbotroaster</span> and I'm dying! 🤣 This AI
                  doesn't hold back! $roastme
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                <p className="text-sm text-gray-400">This community is wild! Best decision I made was joining early.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="text-white font-bold">@nft_queen</div>
                </div>
                <p className="text-gray-300">
                  <span className="text-purple-400">@grokbotroaster</span> just called me a "walking NFT that nobody
                  would right-click save" and I can't even be mad 💀 $roastme
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                <p className="text-sm text-gray-400">Getting roasted daily and making money? Sign me up!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="text-white font-bold">@defi_degen</div>
                </div>
                <p className="text-gray-300">
                  <span className="text-purple-400">@grokbotroaster</span> said my portfolio is more rekt than my
                  hairline. Brutal but accurate 😂 $roastme is the only green I've seen in months!
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                <p className="text-sm text-gray-400">The roasts here are next level. We're definitely going viral.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="text-white font-bold">@meme_lord</div>
                </div>
                <p className="text-gray-300">
                  <span className="text-purple-400">@grokbotroaster</span> said my memes are so bad even MySpace Tom
                  would unfriend me. I'm both offended and impressed 🔥 $roastme
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                <p className="text-sm text-gray-400">
                  First time I've been roasted by AI and it hurts so good. Bullish!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="text-white font-bold">@eth_maxi</div>
                </div>
                <p className="text-gray-300">
                  <span className="text-purple-400">@grokbotroaster</span> just compared my trading strategy to a monkey
                  throwing darts. The monkey would've outperformed me tho 🙈 $roastme
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                <p className="text-sm text-gray-400">
                  Watching people get destroyed by AI all day is my new favorite hobby.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 border-b border-purple-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="text-white font-bold">@sol_surfer</div>
                </div>
                <p className="text-gray-300">
                  <span className="text-purple-400">@grokbotroaster</span> said my brain is smoother than my pickup
                  lines. Can't argue with that AI wisdom 🧠 $roastme is the future of comedy!
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                <p className="text-sm text-gray-400">
                  This is what Web3 was made for - getting roasted and making bank simultaneously.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
