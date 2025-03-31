import Link from 'next/link'
import Search from '@/app/search'
import ThemeSwitch from '@/app/theme-toggle'

export default function Header() {
  return (
    <header>
      <div className="header-left">
        <Link href="/" className='logo-link'>
          <h1 className='logo'>MT<span className='logo-thin'>Glossary</span></h1>
        </Link>
        <Search placeholder="Search for a term..."/>
      </div>
        <div className='header-right'>
        <Link className="hover-b nav-item" href="/">Home</Link>
        <div className="nav-seperator">|</div>
        <Link className="hover-b nav-item" href="/about">About</Link>
        <div className="nav-seperator">|</div>
        <ThemeSwitch/>
      </div>
    </header>
  )
}
