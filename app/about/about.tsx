export default function About() {
  return (
      <div className='center-b'>
        <h1 className='about-title'>About MT<span className='logo-thin'>Glossary</span></h1>
        <div className='about-info'>
          <p className="about-info-a">
            <span className="regular">Inspired by <a  className="bold" href="https://glossary.infil.net/" target="_blank">Infil’s Fighting Game Glossary</a>, MTGlossary is a online glossary for Magic: The Gathering terms with multilingual functionality .</span>
            <br /><br />
            MTGlossary is a project I started in January of 2024 while I was on vacation in Chongqing, China. Throughout development, this website has dramatically evolved in terms of visual and technical design alongside my own understanding of the respective subjects. As such, this project can be viewed as a culmination of my experiences and growth during 2024.
            <br /><br />
            Special thanks to my friend Simon for his assistance during the initial stages of the project. Thank you so much, mayne.
            <br /><br />
          </p>
          <p className="about-info-b">
          <span className="regular">I’m Justin, a developer from Auckland, New Zealand. </span>
          <br /><br />
          Originally a Yu-Gi-Oh! player, I stopped playing once my favourite archetype Dark World was power crept out of the TCG format. Soon after, I found my way to EDH in the form of a Necron Dynasties commander precon.
          <br /><br />
          Nowadays, I exclusively play mono-black decks.
          <br /><br />
          You can check out my portfolio <span className="defunct">here</span>.
          <br /><br />
          </p>
        </div>
      </div>
  )
}
