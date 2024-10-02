export default function Term() {
    return (
        <div className='center-a'>
          <img src="https://cards.scryfall.io/png/front/1/3/13680953-cf05-4e38-a3cf-22900c02fab7.png?1706240764" alt="card picture" className="card-image"/>
          <div className='term-info'>
            <div className='languages'>
              <div className='hover-b language'>EN</div>
              <div className='hover-b language'>JP</div>
              <div className='hover-b language'>ZH</div>
            </div>
            <h1 className='term-name'>Deathtouch</h1>
            <h2 className='tags'>Evergreen Keyword, Keyword Ability, Static Ability</h2>
            <p className='definition'>Static ability that causes a creature receiving damage from a source with Deathtouch to be destroyed as a state-based action.</p>
            <p className='postscript'>More info can be found under section 702.2. of the Comprehensive Rules.</p>
            <p className='flavour-text'>Death in form and function.</p>
            <div className='feedback-share'>
              <div className="hover-b nav-item">Feedback</div>
              <div className="nav-seperator">|</div>
              <div className="hover-b nav-item">Link</div></div>
          </div>
        </div>
    )
  }
  