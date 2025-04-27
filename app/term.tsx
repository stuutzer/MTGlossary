import { createClient } from '@/lib/supabase/client'

export default async function Term({query = "deathtouch"}:{query:string}) {
  const lang = "1"
  const supabase = createClient();
  try{
    const { data: test } = await supabase
    .from('terms')
    .select(`
      term_name, 
      search!inner (
        search_name,
        language_id
      ),
      translations!inner(
        language_id,
        card_uri,
        img_uri,
        example_card,
        title,
        definition,
        postscript,
        flavour_text
      )
    `)
    .eq('search.search_name', query);
    console.log(test[0].translations[1]);
    return (
        <div className='center-a'>
          <a href={ test[0].translations[1].card_uri } target="_blank" className='image-link'><img src={ test[0].translations[1].img_uri } alt={test[0].translations[0].example_card} className="card-image"/></a>
          <div className='term-info'>
            <div className='languages'>
              <div className='hover-b language'>EN</div>
              <div className='defunct language'>JP</div>
              <div className='defunct language'>ZH</div>
            </div>
            <h1 className='term-name'>{test[0].translations[1].title}</h1>
            <p className='definition'>{test[0].translations[1].definition}</p>
            <p className='postscript'>{test[0].translations[1].postscript}</p>
            <p className='flavour-text'>{test[0].translations[1].flavour_text}</p>
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
  