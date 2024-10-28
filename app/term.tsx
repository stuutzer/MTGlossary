import { createClient } from '@/lib/supabase/client'

export default async function Term({query = "deathtouch"}:{query:string}) {
  console.log(query);
  
  const supabase = createClient();
  const { data: term } = await supabase.from("terms").select().eq('term_name',query).single();
  const { data: translation } = await supabase.from("translations").select().eq('term_id',term.term_id).single();
  console.log(translation)
  let card_url = "https://scryfall.com/card/mkc/129/grave-titan"
  let image_url = "https://cards.scryfall.io/png/front/1/3/13680953-cf05-4e38-a3cf-22900c02fab7.png?1706240764"
  let title = translation.title;
  let definition = translation.definition;
  let postscript = translation.postscript;
  let flavour_text = translation.flavour_text;
    return (
        <div className='center-a'>
          <a href={card_url} target="blank"><img src={image_url} alt={title} className="card-image"/></a>
          <div className='term-info'>
            <div className='languages'>
              <div className='hover-b language'>EN</div>
              <div className='defunct language'>JP</div>
              <div className='defunct language'>ZH</div>
            </div>
            <h1 className='term-name'>{title}</h1>
            <p className='definition'>{definition}</p>
            <p className='postscript'>{postscript}</p>
            <p className='flavour-text'>{flavour_text}</p>
          </div>
        </div>
    )
  }
  