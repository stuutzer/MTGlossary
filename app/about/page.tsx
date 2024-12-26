import Footer from '@/app/footer'
import Header from '@/app/header'
import About from  '@/app/about/about'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main>
      <Suspense>
      <Header page="about"/>
      </Suspense>
      <About />
      <Footer />
    </main>
  )
}
