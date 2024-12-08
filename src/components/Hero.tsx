import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-sm tracking-widest uppercase text-gray-600">
            Welcome to Chairy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1E1B39] leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="group flex items-center gap-2 bg-[#00B4B4] text-white px-6 py-3 rounded-md hover:bg-[#009999] transition-colors">
            Shop Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="relative h-[500px]">
          <Image
            src="/chair.png"
            alt="Modern accent chair"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

