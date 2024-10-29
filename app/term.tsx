import { createClient } from '@/lib/supabase/client'

export default async function Term({query = "deathtouch"}:{query:string}) {
  const supabase = createClient();
  const { data: term } = await supabase.from("terms").select().eq('term_name',query).single();
  try{
    const { data: translation } = await supabase.from("translations").select().eq('term_id',term.term_id).single();
    return (
        <div className='center-a'>
          <a href={ translation.card_uri } target="blank"><img src={ translation.img_uri } alt={translation.example_card} className="card-image"/></a>
          <div className='term-info'>
            <div className='languages'>
              <div className='hover-b language'>EN</div>
              <div className='defunct language'>JP</div>
              <div className='defunct language'>ZH</div>
            </div>
            <h1 className='term-name'>{translation.title}</h1>
            <p className='definition'>{translation.definition}</p>
            <p className='postscript'>{translation.postscript}</p>
            <p className='flavour-text'>{translation.flavour_text}</p>
          </div>
        </div>
    )
  } catch(error){
    return (
      <div className='center-a'>
          <a href="https://scryfall.com/card/soi/67/gone-missing" target="blank"><img src="https://cards.scryfall.io/large/front/e/8/e88ae6bf-9c58-4543-ba66-19ea41d01e9b.jpg?1576384102" alt="Gone Missing" className="card-image"/></a>
          <div className='term-info'>
            <h1 className='term-name'>No Term Found</h1>
            <p className='definition'>We couldn't find a term called "{ query }".</p>
          </div>
        </div>
    )
  }
  }
  