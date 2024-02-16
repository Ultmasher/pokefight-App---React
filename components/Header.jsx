import "../styling/header.css";
const Header = () => {

  return (

    <header>
    <nav>
        <ul className='header-ul'>
          <li><a href="/">Home</a></li>
          <li><a href="/pokemon">Choose your Pokemon</a></li>
          <li><a href="/fight">Fight</a></li>
        </ul>
        <div className='w-72 h-72 bg-gray-500'></div>
    </nav>
    </header>
  )
}

export default Header;