import './Header.scss'
import logo from '../../assets/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import searchIcon from '../../assets/icons/search.svg'
import btnIcon from '../../assets/icons/upload.svg'

function Header() {
  
  return (
    <header className="header">
      <nav className='navbar'>
        <div className='navbar-container'>
          <img className='navbar-container__logo' src={logo} alt="brainflix-logo"/>
        </div>
        <div className='navbar-searchbar'>
          <img className='navbar-searchbar__icon' src={searchIcon}/>
          <input className='navbar-searchbar__input' type='text' placeholder='Search'/>
        </div>
        <img className='navbar__avatar' src={avatar} />
        <div className='navbar-btn'>
          <img className='navbar-btn__icon' src={btnIcon}/>
          <button className='navbar-btn__upload' type='submit'>UPLOAD</button>
        </div>
      </nav>
    </header>
  )
}


export default Header;