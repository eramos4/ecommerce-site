import React, {useContext, useEffect} from 'react'
import buy from '../images/buy_gif.gif'
import IG from '../images/ig.png'
import {Container, Text, Div, Row,Col,Image,Anchor} from 'atomize'


const HomePage = () =>{

    return(
    
      <Container>
      <Row>
          <Div
          h={{ xs: '90px', lg: '170px' }}
          >

          </Div>
      </Row>
      <Row>
        <Col>
            {/* spacer */}
        </Col>
            <Col>
                <Div 
                    w={{ xs: '325px', lg: '450px' }}>
                    <Image src={buy} />
                </Div>
            </Col>
                <Col>
                    {/* spacer */}
                </Col>
      </Row>
      <Row>
          <Div
          h={{ xs: '50px', lg: '60px' }}
          >

          </Div>

          
      </Row>
        <Row>    
            <Col>
            {/* spacer */}
            </Col>
                        <Div
                        m={{
                               x: {xs: '35vw',md: '44vw', lg: '44vw',xl:'22vw'}
                            }}
                        >

                            <Anchor href="https://www.instagram.com/movingphotographs/" target="_blank"
                           
                            >

                            <Image 
                                w='70px'
                                src={IG}
                                   
                                         />
                            </Anchor>
                         
                            </Div>
                  <Col
                //   spacer
                  ></Col>
                    
        </Row>


    </Container>    
//  <div style={{height: '100vh', width: '100vw'}}>
    
//         <div id='main' style={{display: 'flex', flexDirection: 'column', height: '80%'}}>
//             <div name='spacer' style={{height: '100%'}}></div>
//                 <div style={imageDivStyle}>
                   
//                     <img src={buy} className="buyStyle"/>  
                    
//                 </div>
//             <div name='spacer' style={{height: '30%'}}/>
//             <div style={igDivStyle}>
//                <a href="https://www.instagram.com/movingphotographs/" target="_blank">
//                    <img src={IG} style={igStyle}/>
//                </a> 
//             </div>
//         </div>

//     </div>

   
    )
}

export default HomePage