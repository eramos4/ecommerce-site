import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../context/shopContext'
import {Text, Div,Row,Col,Container, Button,Image} from 'atomize'
import InputSpinner from '../components/InputSpinner'

const ProductPage = () =>{

    let {id} = useParams();
    const {fetchProductWithId, addItemToCheckout, removeCheckoutItem, updateCheckoutItems, product,openCart} = useContext(ShopContext)
   


    useEffect(() =>{
        fetchProductWithId(id)
        return() =>{

        };

    }, [fetchProductWithId, id])

    if(!product.title) return <div>Loading</div>

    return(
        <Container>
         
            <Div
                h={{ xs: '20px', lg: '60px' }}
                >

                    </Div>
            <Row>
                
                <Col size={{ xs: 10, lg: 6 }}
                
                >
                        
                <Image 
                m={{xs:'20px', lg:'0px'}}
                src={product.images[0].src}></Image>
                        
                </Col>
                <Col size={{ xs: 8, lg: 5 }}>
                <Div 
                    m={{
                        x:{xs: '0px', lg:'60px'},
                        y: {xs: '20px', lg: '30px'}
                    }}
                    >
                        <Text
                        textWeight="700"
                        textSize={{ xs: "20px", lg: "34px" }}
                        w={{ xs: '250px', lg: '422px'}}
                       
                        >{product.title}</Text>

                        <Text
                        m={{
                            x: '10px',
                            y: '10px'
                        }}
                        >${product.variants[0].price}</Text>

                        <Text
                        m={{
                            r: '3rem',
                            x: '10px',
                            y: '2px'
                        }}
                        >Quanity</Text>


                        {/* <InputSpinner/> */}

                        
                        <Button
                        m={{ 
                            y: '-20px'
                        }}
                        bg="red"
                        hoverBg="danger700"
                        w={{xs: '200px', lg: '280px'}}
                        
                        onClick={() => {
                            addItemToCheckout(product.variants[0].id, 1)
                            openCart()
                            }}>Add To Cart</Button>       

                        {/* <Button
                        m={{ 
                            y: '-20px'
                        }}
                        bg="red"
                        hoverBg="danger700"
                        w={{xs: '200px', lg: '280px'}}
                        
                        onClick={() => {
                            updateCheckoutItems(product.variants[0].id, 0)
                            openCart()
                            }}>Update</Button>            */}
                        

                          <Text 
                          m={{
                           
                            y: '40px'
                        }}
                          tag="p" textSize="paragraph" textColor="black" textWeight="200">{product.description}</Text>

                    </Div>
                </Col>
                </Row> 


        </Container>

    )
}

export default ProductPage

