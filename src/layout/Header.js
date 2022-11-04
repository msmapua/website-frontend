import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md mapua-red-bg">
        <div className="container-fluid navbar-dark">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div><Link className="navbar-brand" style={{color: "#fed700"}} to="/">Mathematical Society<br />of Mapúa</Link></div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="glowing-ul">
              <li className="nav-item"><b><NavLink className={evt => "nav-link " + (!evt.isActive ? "" : " active")} to="/">Home</NavLink></b></li>
              <li className="nav-item"><b><NavLink className={evt => "nav-link " + (!evt.isActive ? "" : " active")} to="about">About</NavLink></b></li>
              <li className="nav-item"><b><NavLink className={evt => "nav-link " + (!evt.isActive ? "" : " active")} to="membership">Membership</NavLink></b></li>
              <li className="nav-item"><b><NavLink className={evt => "nav-link " + (!evt.isActive ? "" : " active")} to="events">News and Events</NavLink></b></li>
              <li className="nav-item"><b><NavLink className={evt => "nav-link " + (!evt.isActive ? "" : " active")} to="contact">Contact</NavLink></b></li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="bg-dark text-light" style={{height: "75px"}}></section>
    </>
  )
}

export default Header