import Link from 'next/link'
import Search from '@/app/search'
import ThemeSwitch from '@/app/theme-toggle'

export default function Header({page}: {page:string}) {
  let link = "/about";
  let name = "About";
  if (page === "about") {
    link = "/";
    name = "Home";
  };
  return (
    <header>
    <div className="header-left">
      <a href="/">
        <h1 className='logo'>MT<span className='logo-thin'>Glossary</span></h1>
      </a>
      <div className='header-right'>
      <Link className="hover-b nav-item" href={link}>{name}</Link>
      <div className="nav-seperator">|</div>
      <ThemeSwitch/>
    </div>
    </div>
    <Search placeholder="Search for a term..."/>
    </header>
  )
}
