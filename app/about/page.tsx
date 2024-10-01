import Footer from '@/app/footer'
import Header from '@/app/header'
import Term from '@/app/term'

export default function Home() {
  return (
    <main>
      <Header />
      <h1 className='about-title'>About MT<span className='logo-thin'>Glossary</span></h1>
      <div className='about-info-wrapper'>
        <p className="about-info">
          Inspired by Infil’s Fighting Game Glossary, MTGlossary is a online glossary for Magic: The Gathering terms with multilingual functionality .
          <br /><br />
          MTGlossary is a project I started in January of 2024 while I was on vacation in Chongqing, China. Throughout development, this website has dramatically evolved in terms of visual and technical design alongside my own understanding of the respective subjects. As such, this project can be viewed as a culmination of my experiences and growth from January to December 2024.
          <br /><br />
          Special thanks to my friend Simon for his assistance during the initial stages of the project. Thank you so much, mayne.
        </p>
        <p className="about-info">
          Inspired by Infil’s Fighting Game Glossary, MTGlossary is a online glossary for Magic: The Gathering terms with multilingual functionality .
          <br /><br />
          MTGlossary is a project I started in January of 2024 while I was on vacation in Chongqing, China. Throughout development, this website has dramatically evolved in terms of visual and technical design alongside my own understanding of the respective subjects. As such, this project can be viewed as a culmination of my experiences and growth from January to December 2024.
          <br /><br />
          Special thanks to my friend Simon for his assistance during the initial stages of the project. Thank you so much, mayne.
        </p>
      </div>
      <Footer />
    </main>
  )
}
