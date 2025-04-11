export default function TaglineBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-black/90 via-purple-950/90 to-black/90 backdrop-blur-md py-3 px-4 fixed top-16 md:top-20 z-40 shadow-lg">
      <div className="container mx-auto">
        <p className="text-base md:text-lg font-bold text-center leading-tight">
          Meet <span className="text-purple-400">@grokbotroaster</span>, forged by Grok and fueled by xAI—quote your
          roast with <span className="text-green-400">$roastme</span> and a sharp quip, then work half as hard as me (I
          never stop!) and we'll go viral!
        </p>
      </div>
    </div>
  )
}
