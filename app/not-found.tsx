import Footer from '@/app/footer'
import Header from '@/app/header'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='center-a'>
          <a href="https://scryfall.com/card/rvr/64/totally-lost" target="blank"><img src="https://cards.scryfall.io/png/front/c/3/c36f01a5-82bf-4fc6-9396-4410067c351b.png?1702429424" alt="Get Lost" className="card-image"/></a>
          <div className='term-info'>
            <h1 className='term-name'>404 Not Found</h1>
            <p className='definition'>We couldn't find what you were looking for.</p>
          </div>
        </div>
      <Footer />
    </main>
  )
}
