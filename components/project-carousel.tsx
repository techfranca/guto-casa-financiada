"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    image: "/projeto-tiradentes.jpeg",
    title: "Bairro Tiradentes",
    subtitle: "+1 Construção Financiada Concluída!",
  },
  {
    id: 2,
    image: "/projeto-lagoa-ingleses.jpeg",
    title: "Lagoa dos Ingleses",
    subtitle: "+1 Construção Financiada",
  },
  {
    id: 3,
    image: "/projeto-luxo-piscina.jpeg",
    title: "Casa de Luxo com Piscina",
    subtitle: "+1 Financiamento de Construção Concluído!",
  },
]

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  return (
    <div className="relative max-w-2xl mx-auto px-4">
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0 relative aspect-[9/16] h-[400px] sm:h-[500px] md:h-[600px] max-h-[70vh]"
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-green-400 text-lg font-semibold">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 border-0 shadow-lg text-black"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 border-0 shadow-lg text-black"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
