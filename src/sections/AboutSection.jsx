import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutSection({ profile }) {
  return (
    <section id="journey" className="section-shell scroll-mt-24">
      <div className="container-shell">

        <SectionHeading
          title={profile.aboutSection.title}
          description={profile.aboutSection.description}
        />

        <Reveal>
  <div className="relative mx-auto mt-12 max-w-4xl">
    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400 via-indigo-400 to-purple-400" />

    <div className="space-y-12">
  {profile.aboutSection.journeyItems.map((item, index) => (
    <motion.div
      key={item.title}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className={`relative flex items-center ${
        index % 2 === 0 ? 'justify-start' : 'justify-end'
      }`}
    >
      <motion.div
  whileHover={{
    y: -6,
    scale: 1.02,
  }}
  transition={{
    type: 'spring',
    stiffness: 300,
    damping: 20,
  }}
  className={`w-[45%] rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-300/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)] ${
    index % 2 === 0 ? 'text-right' : 'text-left'
  }`}
>
        <p className="text-sm text-cyan-200">{item.period}</p>

        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
          {item.type}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-300">
          {item.subtitle}
        </p>

        <p className="mt-3 text-sm text-slate-400">
          {item.detail}
        </p>
      </motion.div>

      <div className="absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-300 bg-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.65)]" />
    </motion.div>
  ))}
</div>
</div>
</Reveal>


      </div>
    </section>
  )
}