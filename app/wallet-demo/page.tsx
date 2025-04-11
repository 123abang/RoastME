import PhantomWalletConnect from "@/components/phantom-wallet-connect"

export default function WalletDemo() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Phantom Wallet Integration</h1>
      <PhantomWalletConnect />

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-4">About This Integration</h2>
        <ul className="space-y-2 list-disc pl-5">
          <li>Works with Phantom browser extension on desktop (Chrome, Firefox, Brave, Edge)</li>
          <li>Compatible with Phantom mobile app via WalletConnect (requires additional setup)</li>
          <li>Securely connects to Solana blockchain</li>
          <li>Handles wallet connection events and state changes</li>
          <li>Provides user feedback through toast notifications</li>
        </ul>
      </div>
    </div>
  )
}
