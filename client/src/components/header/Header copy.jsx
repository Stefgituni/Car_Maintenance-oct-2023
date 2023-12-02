export default function Header(){
    return(
        <header>
    <div className="main wrap">
      <h1><a href="/"><img src="images/logo.png" alt=""/></a></h1>
      <p>Petar Petrov <span> +359 (88) 123456, petar.petrov@one.com</span></p>
    </div>
    <nav>
      <ul className="menu">
        <li className="current"><a href="/" className="home"><img src="images/home.jpg" alt=""/></a></li>
        <li><a href="about">About</a></li>
        <li><a href="/maintenance">Maintenance</a></li>
        <li><a href="repair">Repair</a></li>
        <li><a href="price-list">Price List</a></li>
        <li><a href="locations">Locations</a></li>
      </ul>
      <div className="clear"></div>
    </nav>
  </header>
    )
}