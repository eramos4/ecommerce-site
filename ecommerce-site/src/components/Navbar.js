import React, {useContext} from 'react'
import {Container, Anchor} from 'atomize'
import {ShopContext} from '../context/shopContext'
import {Navbar, Nav, NavDropdown,Form, FormControl,Button} from 'react-bootstrap'
import ID_logo from '../images/Logo2.png'
import cart from '../images/cart.png'
import shop from '../images/shop.png'
import profile from '../images/profile.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const id_logo_style = {
    width: '300px', 
    
   };
   
   const cartStyle = {
   width: '30px'
   };
   
   const profileStyle = {
       width: '20px'
   };
   
   const shopStyle = {
       width: '50px'
   };
   
   const imageDivStyle = {
   //marginTop: '200px',
   textAlign: 'center',
   };
   
   const buyStyle = {
   
   width: '400px'
   };

const NavBarSite = () =>{

    const{openCart} = useContext(ShopContext)
    return(
        <div>
    {/* <nav class="navbar navbar-expand-md navbar-light bg-light">
        <a class="navbar-brand" href="/"><img src={ID_logo} style={id_logo_style}/></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarTest" aria-controls="navBarTest" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navBarTest">
            <ul class="navbar-nav mr-auto">
                
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/shop"><img src={shop} style={shopStyle}/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" onClick={() => openCart()}><img src={cart} style={cartStyle}/></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href=""><img src={profile} style={profileStyle}/></a>
                </li>
                
            </ul>
        </div>
    </nav> */}
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><img src={ID_logo} style={id_logo_style}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-end" style={{ width: "100%" }}>
      <Nav.Link href="https://imitation-design-art.myshopify.com/collections"><img src={shop} style={shopStyle}/></Nav.Link>
      <Nav.Link onClick={() => openCart()}><img src={cart} style={cartStyle}/></Nav.Link>
      {/* <Nav.Link href=""><img src={profile} style={profileStyle}/></Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>


        </div>
    )
}
export default NavBarSite
