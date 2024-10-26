import Link from 'next/link'

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
      <Link className="hover-b nav-item" href="/">Random</Link>
      <div className="nav-seperator">|</div>
      <div className="hover-b nav-item">Theme</div>
    </div>
    </div>
    <input type="text" className='search'placeholder="Search for a term..."/>
    </header>
  )
}
