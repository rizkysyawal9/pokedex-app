import React, { useState } from 'react'
import 'assets/css/navbar.css'
import { Link } from 'react-router-dom'
import hamburger from 'assets/icon/hamburger.svg'

export default function Navbar() {
  const [toggleMenu, setShowLinks] = useState(false)
  const links = [
    {
      name: 'Pokemon',
      route: '/',
    },
    {
      name: 'My Pokemons',
      route: '/bill-pc',
    },
  ]
  return (
    <div className="navbar">
      <div className="navbar--brand">MyPoke's!</div>
      <div className="navbar--content">
        <div className="hamburger" onClick={() => setShowLinks(!toggleMenu)}>
          <img src={hamburger} alt="hamburger"></img>
        </div>
        <div className={toggleMenu ? 'navbar--links active' : 'navbar--links'}>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                to={link.route}
                onClick={() => setShowLinks(!toggleMenu)}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
