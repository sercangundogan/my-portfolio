// Sections
import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="max-w-screen min-h-screen overflow-hidden flex flex-col items-center">
      <Hero />
      <AboutMe />
    </main>
  )
}
