import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'

function Header() {
  
  return (
    <header className="header">
      <nav className='navbar'>
        <img className='navbar__logo' src={logo} alt="brainflix-logo"/>
        <div>
          <input className='navbar__searchbar' type='text' placeholder='Search'/>
          <img className='navbar__avatar' src={avatar} />
        </div>
        <button className='navbar__upload' type='submit'>UPLOAD</button>
      </nav>
    </header>
  )
}


export default Header;