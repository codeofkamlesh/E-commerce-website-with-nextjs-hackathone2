import { Clock, Hammer, PiggyBank, Recycle } from 'lucide-react'

export function FeatureSection() {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <Hammer className="h-6 w-6 text-primary" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <PiggyBank className="h-6 w-6 text-primary" />,
      title: "Unbeatable prices",
      description: "For our materials and quality you won't find better prices anywhere",
    },
    {
      icon: <Recycle className="h-6 w-6 text-primary" />,
      title: "Recycled packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              {feature.icon}
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

