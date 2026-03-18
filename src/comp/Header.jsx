import { NavLink } from 'react-router-dom'; 

function Header() {
  return (
    <>
        <h2>UI/UX Design </h2>
        <nav>
          <NavLink to="/">Slide</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/sign">Sign Up</NavLink>
          <NavLink to="">Contact</NavLink>
        </nav>
    </>
  )
}

export default Header