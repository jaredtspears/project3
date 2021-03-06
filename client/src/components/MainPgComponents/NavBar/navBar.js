import React from 'react';


const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">TrophyCase</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/">Login <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="/profile">Home</a>
          <a className="nav-item nav-link" href="/CollectionsPg">Collections</a>
          <a className="nav-item nav-link" href="/AboutUs">About Us</a>
          <a className="nav-item nav-link" href="/Contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;