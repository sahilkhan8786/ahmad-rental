import ExperienceSection from "@/components/custom/ExperienceSection/ExperienceSection"
import Header from "@/components/custom/Header"
import SlidingSection from "@/components/custom/SlidingSection/SlidingSection"


export default function Home() {
  return (
    <>
      <Header />
      <section className='p-3 mx-auto max-w-screen-2xl mt-2 flex flex-col gap-4  '>
        <SlidingSection />
        <ExperienceSection />
      </section>
    </>
  )
}
