import React, { useContext } from 'react'
import logoImg from '../../assets/Ron-logo.png'
import Login from './Login'
import Register from './Register'
import { AuthContext } from '../../context/AuthContext'

function Nav() {
  const { currentUser, logout } = useContext(AuthContext)

  return (
    <nav className="container navbar sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">
          <img src={logoImg} alt="logo" height={75} />
        </div>
        <div className="d-flex">
          <div className="col">
            {currentUser ? (
              <>
              <div className="btn btn-outline-secondary mx2">
                {currentUser.email}
              </div>
               <div onClick={() => logout()} className="btn btn-outline-secondary mx2">
                Logout
              </div>
              </>
            ) : (
              <>
                <Login />
                <Register />
              </>

            )}

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
