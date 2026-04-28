import { useState, useEffect } from 'react'
import { content } from '../../content'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const eventDate = new Date(content.hero.timer.endDate).getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {content.hero.headline}
        </h1>
        <p className="text-2xl mb-6">{content.hero.subheadline}</p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-8 text-3xl font-bold countdown">
          <div className="bg-white/20 p-4 rounded-lg min-w-24">
            <div>{timeLeft.days || '0'}</div>
            <div className="text-sm">Dias</div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg min-w-24">
            <div>{timeLeft.hours || '0'}</div>
            <div className="text-sm">Horas</div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg min-w-24">
            <div>{timeLeft.mins || '0'}</div>
            <div className="text-sm">Minutos</div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg min-w-24">
            <div>{timeLeft.secs || '0'}</div>
            <div className="text-sm">Segundos</div>
          </div>
        </div>

        <p className="text-xl mb-2 opacity-90">{content.hero.date}</p>

        <button className="btn-primary mb-4 pulse-ring">
          {content.hero.cta}
        </button>

        <p className="text-sm opacity-75">
          {content.hero.ctaMicro}
        </p>
      </div>
    </section>
  )
}
