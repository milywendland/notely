import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav">
          <Link to="/">Notes</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
