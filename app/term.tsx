import { createClient } from '@/lib/supabase/client'

export default async function Term({query = "deathtouch"}:{query:string}) {
  const supabase = createClient();
  try{
    const { data: search } = await supabase
    .from('terms')
    .select(`
      term_id,
      search!inner (
        search_name,
        language_id
      )
    `)
    .eq('search.search_name', query);
    const { data: translation} = await supabase
    .from('translations')
    .select(`
      term_id,
      language_id,
      card_uri,
      img_uri,
      example_card,
      title,
      definition,
      postscript,
      flavour_text
    `)
    .eq('term_id', search[0].term_id)
    .eq('language_id', search[0].search[0].language_id);
    console.log(translation[0]);
    return (
        <div className='center-a'>
          <a href={ translation[0].card_uri } target="_blank" className='image-link'><img src={ translation[0].img_uri } alt={translation[0].example_card} className="card-image"/></a>
          <div className='term-info'>
            <div className='languages'>
              <div className='hover-b language'>EN</div>
              <div className='defunct language'>JP</div>
              <div className='defunct language'>ZH</div>
            </div>
            <h1 className='term-name'>{translation[0].title}</h1>
            <p className='definition'>{translation[0].definition}</p>
            <p className='postscript'>{translation[0].postscript}</p>
            <p className='flavour-text'>{translation[0].flavour_text}</p>
          </div>
        </div>
    )
  } catch(error){
    return (
      <div className='center-a'>
          <a href="https://scryfall.com/card/soi/67/gone-missing" target="_blank" className='image-link'><img src="https://cards.scryfall.io/large/front/e/8/e88ae6bf-9c58-4543-ba66-19ea41d01e9b.jpg?1576384102" alt="Gone Missing" className="card-image"/></a>
          <div className='term-info'>
            <h1 className='term-name'>No Term Found</h1>
            <p className='definition'>We couldn&apos;t find a term called &quot;{ query }&quot;.</p>
          </div>
        </div>
    )
  }
  }
  