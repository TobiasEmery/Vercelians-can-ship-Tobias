import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skiResorts = [
  {
    name: "Whistler Blackcomb",
    location: "British Columbia, Canada",
    description: "North America's largest ski resort, offering diverse terrain and stunning mountain views.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Zermatt",
    location: "Switzerland",
    description: "Iconic resort with views of the Matterhorn and year-round skiing on glaciers.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Vail",
    location: "Colorado, USA",
    description: "Expansive resort known for its Back Bowls and world-class amenities.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Niseko",
    location: "Hokkaido, Japan",
    description: "Renowned for its consistent powder snow and vibrant nightlife.",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Chamonix",
    location: "France",
    description: "Legendary resort at the base of Mont Blanc, offering challenging terrain for expert skiers.",
    image: "/placeholder.svg?height=200&width=300"
  }
]

export default function SkiResorts() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Best Ski Resorts in the World</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skiResorts.map((resort, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              src={resort.image}
              alt={resort.name}
              width={300}
              height={200}
              className="w-full object-cover h-48"
            />
            <CardHeader>
              <CardTitle>{resort.name}</CardTitle>
              <CardDescription>{resort.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{resort.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

