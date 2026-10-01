import { motion, useMotionValue, useTransform } from 'framer-motion'
import GradientButton from '../components/GradientButton'
import { getIconByName } from '../components/iconMap'

const floatingShapes = [
  {
    className: '-left-24 top-8 h-64 w-64 bg-cyan-400/24',
    x: 24,
    y: -18,
    duration: 11,
  },
  {
    className: 'right-0 top-24 h-72 w-72 bg-fuchsia-400/20',
    x: -28,
    y: 20,
    duration: 14,
  },
  {
    className: 'left-[36%] bottom-0 h-56 w-56 bg-indigo-400/25',
    x: 18,
    y: -24,
    duration: 10,
  },
]

export default function HeroSection({ profile }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handlePointerMove = (event) => {
  const { innerWidth, innerHeight } = window
  const x = (event.clientX / innerWidth) * 2 - 1
  const y = (event.clientY / innerHeight) * 2 - 1

  mouseX.set(x)
  mouseY.set(y)
}

  return (
    <section
  id="home"
  className="relative isolate overflow-hidden pt-28 sm:pt-32"
  onPointerMove={handlePointerMove}
>
      <motion.div
        aria-hidden="true"
        className="hero-gradient absolute inset-0 -z-20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 24,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_46%)] opacity-40"
      />

      {floatingShapes.map((shape, index) => (
        <motion.div
          key={shape.className}
          aria-hidden="true"
          className={`floating-shape absolute rounded-full blur-3xl ${shape.className} ${index === 1 ? 'hidden sm:block' : ''
            }`}
          animate={{
            x: [0, shape.x, 0],
            y: [0, shape.y, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: shape.duration,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />
      ))}

      <div className="container-shell flex flex-col gap-12 py-10 lg:min-h-[calc(100vh-15rem)] lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-4 max-w-4xl text-4xl font-semibold sm:text-6xl lg:text-7xl"
          >
            <span className="animated-gradient-text">Hi, I'm Vinitha</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-4 text-lg font-medium text-slate-200 sm:text-2xl"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <GradientButton href="#projects">
              {profile.cta.primary}
            </GradientButton>

            <GradientButton href="#contact" variant="outline">
              {profile.cta.secondary}
            </GradientButton>

            <GradientButton
  href={profile.resumeUrl}
  variant="outline"
  target="_blank"
  rel="noreferrer"
>
  View Resume
</GradientButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {profile.socials.map((social) => {
              const Icon = getIconByName(social.icon)
              const isExternalLink = social.href.startsWith('http')

              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={isExternalLink ? '_blank' : undefined}
                  rel={isExternalLink ? 'noreferrer' : undefined}
                  whileHover={{ y: -2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/55 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-lg transition-colors hover:border-cyan-300/55 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {social.name}
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Avatar */}
        <div className="relative z-10 mx-auto h-[360px] w-[360px] translate-y-4 sm:h-[400px] sm:w-[400px] lg:h-[480px] lg:w-[480px]">
          <div className="absolute h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-400/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />

          <div className="relative z-10 h-[350px] w-[350px] sm:h-[390px] sm:w-[390px] lg:h-[470px] lg:w-[470px]">
            <img
              src={`${import.meta.env.BASE_URL}avatar-base.png`}
              alt="Vinitha G Developer Avatar"
              className="absolute inset-0 h-full w-full object-contain"
            />

            <motion.img
              src={`${import.meta.env.BASE_URL}avatar-eyes.png`}
              alt=""
              aria-hidden="true"
              style={{
                x: useTransform(mouseX, [-1, 1], [-5, 5]),
                y: useTransform(mouseY, [-1, 1], [-3, 3]),
              }}
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}