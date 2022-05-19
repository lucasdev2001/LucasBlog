import Link from 'next/link';
export default function NavBar() {
    
    return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center text-center" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
      <Link href="/"><a className="nav-link" >Home</a></Link>
      <Link href="/compose"><a className="nav-link">Compose</a></Link>
      <a href="https://wa.me/5561985891725" target="_blank" className="nav-link">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )

}