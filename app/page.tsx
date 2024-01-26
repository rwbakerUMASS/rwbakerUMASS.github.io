import Image from 'next/image'
import next_img from 'public/next.svg'
import vercel_logo from 'public/vercel.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='pt-32' id='education'>
        EDUCATION
      </section>
      <section className='pt-32' id='experience'>
        EXPERIENCE
      </section>
      <section className='pt-32' id='projects'>
        PROJECTS
      </section>
    </main>
  )
}
