import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut, User, Home } from 'lucide-react'
import { useAuth } from '../hooks/userAuth'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    navigate('/')
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-bg/80 backdrop-blur-md border-b border-primary/20">
      <div className="section-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all">
              <span className="text-dark-bg font-bold text-lg">TDB</span>
            </div>
            <span className="hidden sm:inline text-white font-bold glow-text">
              Team Decision Board
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
              Home
            </Link>
            {isAuthenticated && (
              <>
                <Link to="/dashboard" className="text-gray-300 hover:text-primary transition-colors">
                  Dashboard
                </Link>
                <Link to="/team-board" className="text-gray-300 hover:text-primary transition-colors">
                  Team Board
                </Link>
                <Link to="/proposals" className="text-gray-300 hover:text-primary transition-colors">
                  Proposals
                </Link>
              </>
            )}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors"
                >
                  <User size={20} />
                  <span className="text-sm">{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="btn-primary flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden btn-icon"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/20">
            <div className="flex flex-col gap-3 mt-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors"
              >
                <Home size={20} />
                Home
              </Link>
              {isAuthenticated && (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/team-board"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors"
                  >
                    Team Board
                  </Link>
                  <Link
                    to="/proposals"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors"
                  >
                    Proposals
                  </Link>
                </>
              )}
              <div className="pt-2 border-t border-primary/20">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-dark-secondary transition-colors"
                    >
                      <User size={20} />
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full mt-2 btn-primary flex items-center justify-center gap-2"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="btn-secondary text-center"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary text-center"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
