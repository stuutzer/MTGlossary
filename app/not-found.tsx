import Footer from '@/app/footer'
import Header from '@/app/header'
import { Suspense } from 'react'

export default function notFound() {
  return (
    <main>
      <Suspense>
      <Header page=""/>
      </Suspense>
      <div className='center-a'>
          <a href="https://scryfall.com/card/rvr/64/totally-lost" target="_blank"><img src="https://cards.scryfall.io/large/front/c/3/c36f01a5-82bf-4fc6-9396-4410067c351b.jpg?1702429424" alt="Get Lost" className="card-image"/></a>
          <div className='term-info'>
            <h1 className='term-name'>404 Not Found</h1>
            <p className='definition'>We couldn&apos;t find the page you were looking for.</p>
          </div>
        </div>
      <Footer />
    </main>
  )
}
