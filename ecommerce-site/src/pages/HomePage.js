import React, {useContext, useEffect} from 'react'
import ID_logo from '../images/Logo2.png'
import cart from '../images/cart.png'
import shop from '../images/shop.png'
import profile from '../images/profile.png'
import buy from '../images/buy_gif.gif'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';
import { ShopContext } from '../context/shopContext'



const imageDivStyle = {
//marginTop: '200px',
textAlign: 'center',
};

const buyStyle = {

width: '500px'
};

const HomePage = () =>{

    return(
      
        
 <div style={{height: '100vh', width: '100vw'}}>
    
        <div id='main' style={{display: 'flex', flexDirection: 'column', height: '92%'}}>
            <div name='spacer' style={{height: '100%'}}></div>
                <div style={imageDivStyle}>
                    <img src={buy} style={buyStyle}/>  
                </div>
            <div name='spacer' style={{height: '100%'}}></div>
        </div>

    </div>

   
    )
}

export default HomePage