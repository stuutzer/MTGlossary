import Link from 'next/link'
import Search from '@/app/search'

export default function Header() {
  return (
    <header>
    <div className="header-left">
      <Link href="/">
        <h1 className='logo'>MT<span className='logo-thin'>Glossary</span></h1>
      </Link>
      <div className='header-right'>
      <Link className="hover-b nav-item" href="/about">About</Link>
      <div className="nav-seperator">|</div>
      <div className="defunct nav-item">Contrast</div>
      <div className="nav-seperator">|</div>
      <div className="defunct nav-item">Theme</div>
    </div>
    </div>
    <Search placeholder="Search for a term..."/>
    </header>
  )
}
