import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import './header.css';
import { SearchBar } from './SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Theme from '../Context/Theme';
export const Header = () => {  
  const Navigate= useNavigate();
  const [sidebar , setSidebar] = useState(false) ;
  const showSidebar = () => setSidebar(!sidebar) ;
  
    return(
      <div>
              {/* Main Header */}
        <div className="header flex-div">   
            <div className="nav-left flex-div">
                <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" className="menuIcon menu-bars" onClick={showSidebar}/>
                <img src="https://e7.pngegg.com/pngimages/15/349/png-clipart-india-gaana-logo-streaming-media-milestone-s-india-text-trademark.png" className="FirstgaanaIcon"/>
                <img src="https://cdn-web.heartfulness.org/en/wp-content/uploads/2020/09/gana-ipd-logo.png" className="gaanaIcon"/>
            </div>

            <div className="nav-middle flex-div">  
                <SearchBar/>
                <div className="flex-div">
                  <button className='redBtn'>Go Ad Free</button>
                  <button className='redBtn btn2'>Get Gaana Plus</button>
                </div>
            </div>

            <div className='nav-right flex-div'>
              
               <img src='https://w7.pngwing.com/pngs/147/905/png-transparent-white-outline-of-the-moon-white-text-monochrome-thumbnail.png' className='theme'/>
              {/* <p className='font'>Log/Sign Up</p> */} 
            {/* <Theme/> */}

              <p onClick={()=>{Navigate("/Signup")}} className='font'>Log/Sign Up</p>
            </div>         
        </div>
         
              {/* Sidebar */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items'>
            <li className='navbar-toggle nav-text'>
            <BiUserCircle size={26}/> <span id='log' >Login/Sign Up</span> <AiOutlineCloseCircle size={26} onClick={showSidebar}/> 
            </li>
            <Link to="/"><li className='nav-text'style={{color: "red"}}>Home</li></Link>
            <Link to="/radio"><li className='nav-text'>Radio</li></Link>
            <Link to="/podcast"><li className='nav-text'>Podcast</li></Link>
            <Link to="/Trending"><li className='nav-text'>My Music</li></Link>
            <li className='nav-text'>India's Music</li>
            <li className='nav-text'>Language</li>
          <hr/>
            <li className='nav-text nav-text-heading'>Go Premium</li>
            <li className='nav-text'>Go Ad-Free</li>
            <li className='nav-text'>Get Gaana Plus</li>
          <hr/>
            <li className='nav-text nav-text-heading'>Go Premium</li>
            <Link to="/Trending"><li className='nav-text'>Trending Songs</li></Link>
            <Link to="/new"><li className='nav-text'>New Songs</li></Link>
            <Link to="/old"><li className='nav-text'>Old Songs</li></Link>
            <Link to="/album"><li className='nav-text'>Albums</li></Link>
         </ul>
        </nav>
           
      </div>
    )
}
