import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useEffect, useState } from 'react'
import { Bot, ChartNoAxesCombined, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutSection({ profile }) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
  if (isPaused) return

  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % profile.aboutSection.journeyItems.length
    )
  }, 3000)

  return () => clearInterval(timer)
}, [isPaused,profile.aboutSection.journeyItems.length])

  const getCardPosition = (index) => {
    const total = profile.aboutSection.journeyItems.length
    const diff = (index - currentIndex + total) % total

    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    if (diff === total - 1) return 'left'

    return 'hidden'
  }

  const variants = {
  left: {
    x: '-105%',
    scale: 0.85,
    opacity: 0.4,
    zIndex: 10,
    boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },

  center: {
  x: '0%',
  scale: 1.05,
  opacity: 1,
  zIndex: 30,
  boxShadow:
    '0 0 30px rgba(34, 211, 238, 0.16), 0 0 55px rgba(168, 85, 247, 0.18), 0 0 90px rgba(99, 102, 241, 0.10)',
  borderColor: 'rgba(129, 140, 248, 0.5)',
},

  right: {
    x: '105%',
    scale: 0.85,
    opacity: 0.4,
    zIndex: 10,
    boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },

  hidden: {
    x: '0%',
    scale: 0.7,
    opacity: 0,
    zIndex: 0,
    boxShadow: '0 0 0 rgba(34, 211, 238, 0)',
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
}

  return (
    <section id="journey" className="section-shell">
      <div className="container-shell">

        <SectionHeading
          title={profile.aboutSection.title}
          description={profile.aboutSection.description}
        />

        <Reveal>
          <div
  className="relative mx-auto mt-12 h-[360px] w-full max-w-5xl overflow-hidden"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>

            {profile.aboutSection.journeyItems.map((item, index) => {
              const position = getCardPosition(index)

              return (
                <motion.div
                  key={item.title}
                  initial={false}
                  animate={position}
                  variants={variants}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setIsPaused(true)}
                 className="glass-panel absolute left-1/2 top-1/2 flex h-[280px] w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-3xl border border-white/10 p-6"
                >

                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    {item.type === 'Academic Project' ? (
                      item.title.includes('Stock') ? (
                        <ChartNoAxesCombined className="h-5 w-5 text-cyan-200" />
                      ) : (
                        <Bot className="h-5 w-5 text-cyan-200" />
                      )
                    ) : (
                      <GraduationCap className="h-5 w-5 text-cyan-200" />
                    )}
                  </div>

                  <p className="text-sm text-cyan-200">
                    {item.period}
                  </p>

                  <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-400">
                    {item.type}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-sm text-slate-400">
                    {item.detail}
                  </p>

                </motion.div>
              )
            })}

          </div>
        </Reveal>

        {/* Carousel dots */}
        <div className="mt-6 flex justify-center gap-2">
          {profile.aboutSection.journeyItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Show ${item.title}`}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
  ? 'h-2 w-8 bg-gradient-to-r from-cyan-300 to-purple-400 shadow-[0_0_12px_rgba(34,211,238,0.55)]'
  : 'h-2 w-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}