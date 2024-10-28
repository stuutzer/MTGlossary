import Footer from '@/app/footer'
import Header from '@/app/header'
import Term from '@/app/term'


export default async function Home(props: {
  searchParams?: Promise<{
    term?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const term = searchParams?.term || '';
  return (
    <main>
      <Header />
      <Term query={term}/>
      <Footer />
    </main>
  )
}
