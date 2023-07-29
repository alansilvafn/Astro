import './style.scss'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { FaSearch, FaSignInAlt, FaShoppingBag } from 'react-icons/fa'
import logo from '/images/logo.svg'

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navigation" variant="dark">
        <Container>
          <div className="navigation__brand">
            <a href="#">
              <img src={logo} className="img-fluid" width={200} height={43} alt="Astro" />
            </a>
            <Navbar.Toggle aria-controls="navigation-collapse" />
          </div>
          <Navbar.Collapse id="navigation-collapse">
            <div className="navigation__collapse">
              <ul className="navigation__list navigation__list--main">
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Home
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link active">
                    Astro
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Customize
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link">
                    Technology
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="navigation__link navigation__link--featured">
                    Kits
                  </a>
                </li>
              </ul>
              <ul className="navigation__list navigation__list--actions">
                <li className="navigation__item">
                  <a href="#" className="button-search">
                    <span>Search</span>
                    <FaSearch className="button-icon"></FaSearch>
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="button-login">
                    <span>Login</span>
                    <FaSignInAlt className="button-icon"></FaSignInAlt>
                  </a>
                </li>
                <li className="navigation__item">
                  <a href="#" className="button-bag">
                    <FaShoppingBag className="button-icon"></FaShoppingBag>
                    <span> (1)</span>
                  </a>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
