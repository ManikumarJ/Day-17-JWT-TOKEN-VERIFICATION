import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("jwtToken")

  const handleLogout = () => {
    localStorage.removeItem("jwtToken")
    navigate("/")
  }

  return (
    <div>

      <div>
        {!token && (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {token && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar