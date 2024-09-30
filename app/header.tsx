export default function Header() {
  return (
    <header>
    <div className="header-left">
      <h1 className='logo'>MT<span className='logo-thin'>Glossary</span></h1>
      <input type="text" className='search'placeholder="Search for a term..."/>
    </div>
    <div className='header-right'><div className="nav-item">About</div>|<div className="nav-item">Random</div>|<div className="nav-item">Theme</div></div>
    </header>
  )
}
