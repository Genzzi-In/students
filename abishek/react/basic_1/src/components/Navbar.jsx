import { Link } from 'react-router-dom'
export default function Navbar() {
    const navItems = ["Home","About","Products","Contact"]
  return (
    <nav>
        {/* {
            navItems.map((val,id)=>(
                a
            ))
        } */}
        <Link to={`/`}>{navItems[0]}</Link>
        <Link to={`/${navItems[1].toLowerCase()}`}>{navItems[1]}</Link>
        <Link to={`/${navItems[2].toLowerCase()}`}>{navItems[2]}</Link>
        <Link to={`/${navItems[3].toLowerCase()}`}>{navItems[3]}</Link>
    </nav>
  )
}
