import React from 'react'
import LOGO from '../../assets/logo.svg'
import './Navbar.css'
import Profile from '../../assets/profile.svg'
import Question from '../../assets/question.svg'
import World from '../../assets/world.svg'
import NavbarHoverComponent from '../Navbar/NavHoverComponent'
const Navbar: React.FC = () => {
  const [isHovering, setIsHovering] = React.useState<boolean>(false);
  const [menu, setMenu] = React.useState<boolean>(false)
  const handleMenu = (): void => {
    setMenu(true)
  }
  const handleMenuClose = (): void => {
    setMenu(false)
  }
  const handleMouseOver = (): void => {
    const centerItems = document.getElementById("ui")
    const centerDivs = document.getElementById("center-divs")
    centerDivs?.classList.add("hover")
    centerItems?.classList.add("hover")
    setIsHovering(true);

  };

  const handleMouseOut = (): void => {
    const centerItems = document.getElementById("ui")
    const centerDivs = document.getElementById("center-divs")
    centerDivs?.classList.remove("hover")
    centerItems?.classList.remove("hover")
    setIsHovering(false);
  };
  return (<>
    <div className='nav--container'>

      <div className='imag--div'><img src={LOGO} className='img--class' alt="" /></div>
      <div className="center--div--container" id='ui' onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
        <div className='center-divs' id='center-divs'>Vehicles</div>
        <div className='center-divs' id='center-divs'>Energy</div>
        <div className='center-divs' id='center-divs'>Charging</div>
        <div className='center-divs' id='center-divs'>Discover</div>
        <div className='center-divs' id='center-divs'>Shop</div>
      </div>

      <div className="right--div--container">
        <img src={Question} className='right--div--class' alt="" />
        <img src={World} className='right--div--class1' alt="" />
        <img src={Profile} className='right--div--class' alt="" />
      </div>


    </div>
    <NavbarHoverComponent isHovering={isHovering} />
    {menu ? (<>
      <div style={{
        backgroundColor: "white", color: "black", position: "absolute", top: "0", right: "0",
        width: "100vw", zIndex: "4", height: "100vh"
      }}>
        <h2 style={{ fontWeight: "200", textAlign: "right", paddingRight: "2rem", transition: "1s", cursor: "pointer" }}  onClick={handleMenuClose}><span id="fg">X</span></h2>
        <div >
          <div className='menu-items'>Vehicles <span style={{paddingLeft:"auto"}}> &gt; </span></div>
          <div className='menu-items'>Energy<span style={{paddingLeft:"auto"}}> &gt; </span></div>
          <div className='menu-items'>Charging<span style={{paddingLeft:"auto"}}> &gt; </span></div>
          <div className='menu-items'>Discover<span style={{paddingLeft:"auto"}}> &gt; </span></div>
          <div className='menu-items'>Shop<span style={{paddingLeft:"auto"}}> &gt; </span></div>
        </div>
      </div>
    </>) : ""}
    <div>
      <p id='menuid' onClick={handleMenu}>Menu</p>
    </div>
  </>
  )
}

export default Navbar