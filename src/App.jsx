import Navbar from './components/Navbar'
import { experienceItems, experienceSection } from './data/experience'
import { profile } from './data/profile'
import { projectItems, projectsSection } from './data/projects'
import { skills, skillsSection, techStack, techStackSection } from './data/skills'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import FooterSection from './sections/FooterSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import TechStackSection from './sections/TechStackSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-30 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(129,140,248,0.16),transparent_48%)]" />
      </div>
      <Navbar developerName={profile.name} navItems={profile.navItems} />
      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ExperienceSection experienceItems={experienceItems} sectionContent={experienceSection} />
        <SkillsSection skills={skills} sectionContent={skillsSection} />
        <TechStackSection stackItems={techStack} sectionContent={techStackSection} />
        <ProjectsSection projectItems={projectItems} sectionContent={projectsSection} />
        <ContactSection profile={profile} />
      </main>
      <FooterSection profile={profile} />
    </div>
  )
}

export default App
