"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { AlertCircle, Check } from "lucide-react"

type PhantomEvent = "disconnect" | "connect" | "accountChanged"

interface ConnectOpts {
  onlyIfTrusted: boolean
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: { toString: () => string } }>
  disconnect: () => Promise<void>
  on: (event: PhantomEvent, callback: (args: any) => void) => void
  isPhantom: boolean
  publicKey: { toString: () => string } | null
  isConnected: boolean | null
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider
  phantom?: {
    solana?: PhantomProvider
  }
}

interface PhantomWalletConnectProps {
  minAmount?: number
  maxAmount?: number
}

export default function PhantomWalletConnect({ minAmount = 50, maxAmount = 500 }: PhantomWalletConnectProps) {
  const [walletAvailable, setWalletAvailable] = useState(false)
  const [provider, setProvider] = useState<PhantomProvider | null>(null)
  const [connected, setConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [loading, setLoading] = useState(false)
  const [amount, setAmount] = useState(minAmount.toString())
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [walletBalance, setWalletBalance] = useState(0) // Mock balance in SOL

  // Destination wallet for presale
  const destinationWallet = "H7CvbRSjFYYYdYpBT5Ch6NXkUwGrYpVynmWGeyVykB6C"

  // Detect if Phantom is installed
  useEffect(() => {
    const checkForPhantom = () => {
      const win = window as WindowWithSolana

      // Check if Phantom is installed (works for browser extension)
      const phantom = win.phantom?.solana || win.solana

      if (phantom?.isPhantom) {
        setProvider(phantom)
        setWalletAvailable(true)

        // Check if already connected
        if (phantom.isConnected && phantom.publicKey) {
          setConnected(true)
          setWalletAddress(phantom.publicKey.toString())

          // Mock wallet balance (in a real app, you would fetch this from the blockchain)
          const mockBalance = Math.random() * 10 // Random balance between 0 and 10 SOL
          setWalletBalance(mockBalance)
        }

        // Setup event listeners
        phantom.on("connect", (publicKey: { toString: () => string }) => {
          setConnected(true)
          setWalletAddress(publicKey.toString())

          // Mock wallet balance
          const mockBalance = Math.random() * 10
          setWalletBalance(mockBalance)

          toast({
            title: "Wallet connected!",
            description: `Connected to ${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`,
          })
        })

        phantom.on("disconnect", () => {
          setConnected(false)
          setWalletAddress("")
          setWalletBalance(0)
          toast({
            title: "Wallet disconnected",
            description: "Your wallet has been disconnected from this site",
          })
        })
      }
    }

    checkForPhantom()
  }, [])

  const connectWallet = async () => {
    if (!provider) return

    try {
      setLoading(true)
      await provider.connect()
      // Connection state will be updated by the event listener
    } catch (error) {
      console.error("Connection error:", error)
      toast({
        title: "Connection failed",
        description: "Failed to connect to Phantom wallet",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const disconnectWallet = async () => {
    if (!provider) return

    try {
      setLoading(true)
      await provider.disconnect()
      // Disconnection state will be updated by the event listener
    } finally {
      setLoading(false)
    }
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // Allow any input, but validation will happen when they try to contribute
    setAmount(value)
  }

  // Mock SOL to USD conversion (in a real app, you would fetch this from an API)
  const solToUsd = 150 // 1 SOL = $150 USD
  const amountInSol = Number(amount) / solToUsd
  const hasEnoughBalance = walletBalance >= amountInSol

  const sendContribution = async () => {
    // Check if wallet has enough balance
    if (!hasEnoughBalance) {
      toast({
        title: "Insufficient balance",
        description: `You need at least ${amountInSol.toFixed(4)} SOL (${amount} USD) to contribute.`,
        variant: "destructive",
      })
      return
    }

    // This is a mock function since we can't actually send SOL in this demo
    // In a real implementation, you would use the Solana web3.js library to create and send a transaction
    setSending(true)

    // Simulate transaction delay
    setTimeout(() => {
      setSending(false)
      setSent(true)
      toast({
        title: "Contribution successful!",
        description: `You've successfully contributed $${amount} to the RoastmeAI presale.`,
      })
    }, 2000)
  }

  return (
    <Card className="bg-gray-900/60 border-purple-500/30 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Phantom Wallet</CardTitle>
        <CardDescription className="text-gray-300">Connect your wallet to contribute to the presale</CardDescription>
      </CardHeader>
      <CardContent>
        {!walletAvailable ? (
          <div className="text-center py-4">
            <p className="mb-4 text-gray-300">Phantom wallet is not installed</p>
            <Button
              onClick={() => window.open("https://phantom.app/", "_blank")}
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
            >
              Install Phantom
            </Button>
          </div>
        ) : connected ? (
          <div className="space-y-6">
            <div className="p-4 bg-gray-800/50 rounded-lg">
              <p className="text-sm font-medium text-gray-300">Connected Wallet</p>
              <p className="text-xs break-all mt-1 text-green-400">{walletAddress}</p>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm text-gray-300">Balance:</p>
                <p className="text-sm font-medium text-white">
                  {walletBalance.toFixed(4)} SOL (≈ ${(walletBalance * solToUsd).toFixed(2)})
                </p>
              </div>
            </div>

            {sent ? (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-400 mt-0.5" />
                  <div>
                    <p className="text-green-300 font-bold">Contribution Successful!</p>
                    <p className="text-gray-300 text-sm mt-1">
                      Thank you for contributing to the RoastmeAI presale. Join our Telegram to claim your spot in the
                      community!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Contribution Amount (USD)</label>
                  <Input
                    type="number"
                    min={minAmount}
                    max={maxAmount}
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder={`Enter amount in USD (min $${minAmount})`}
                    className="bg-gray-800/50 border-gray-700 text-white"
                  />
                  <div className="flex justify-between">
                    <p className="text-xs text-gray-400">Min: ${minAmount}</p>
                    <p className="text-xs text-gray-400">Max: ${maxAmount}</p>
                  </div>
                  {amount && (Number(amount) < minAmount || Number(amount) > maxAmount || isNaN(Number(amount))) && (
                    <p className="text-red-400 text-xs mt-1">
                      Contribution must be between ${minAmount} and ${maxAmount}
                    </p>
                  )}
                  <p className="text-sm text-gray-300 mt-2">
                    Amount in SOL: <span className="text-white font-medium">{amountInSol.toFixed(4)} SOL</span>
                  </p>

                  {!hasEnoughBalance && Number(amount) > 0 && (
                    <p className="text-red-400 text-sm mt-1">
                      Insufficient balance. You need {amountInSol.toFixed(4)} SOL.
                    </p>
                  )}
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-300 mb-2">Destination Address</p>
                  <p className="text-xs break-all text-gray-400">{destinationWallet}</p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <div>
                      <p className="text-yellow-300 font-bold">Important</p>
                      <p className="text-gray-300 text-sm mt-1">
                        By contributing, you confirm that you understand this is a presale for a meme token project.
                        Returns are not guaranteed.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="mb-4 text-gray-300">Connect your wallet to contribute</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        {walletAvailable &&
          (connected ? (
            sent ? (
              <Button
                onClick={disconnectWallet}
                className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/30"
                variant="outline"
              >
                Disconnect Wallet
              </Button>
            ) : (
              <div className="w-full space-y-3">
                <Button
                  onClick={sendContribution}
                  className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white"
                  disabled={
                    !amount ||
                    isNaN(Number(amount)) ||
                    Number(amount) < minAmount ||
                    Number(amount) > maxAmount ||
                    sending ||
                    !hasEnoughBalance
                  }
                >
                  {sending ? "Processing..." : "Send Contribution"}
                </Button>
                <Button onClick={disconnectWallet} className="w-full" variant="ghost" disabled={loading}>
                  Disconnect Wallet
                </Button>
              </div>
            )
          ) : (
            <Button
              onClick={connectWallet}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              disabled={loading}
            >
              {loading ? "Connecting..." : "Connect Wallet"}
            </Button>
          ))}
      </CardFooter>
    </Card>
  )
}
