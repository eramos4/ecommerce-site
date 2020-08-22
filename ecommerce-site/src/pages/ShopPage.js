import React, {useContext, useEffect} from 'react'
import {ShopContext} from '../context/shopContext'
import {Container, Text, Div, Row,Col} from 'atomize'
import {Link} from 'react-router-dom'

const ShopPage = () =>{

    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(()=>{
        fetchAllProducts()
        return () =>{

        };
    }, [fetchAllProducts])

    if(!products) return <div>loading</div>

    return(
        
        <Container>
            <Div>
                
            </Div>
            <Row>
                {products.map(product =>(
                    <Col key={product.id} size="3">
                        <Link to={`/product/${product.id}`}>
                            <Div p={{ xs: '1rem',lg: '2rem'}}>
                                <Div
                                    h={{ xs: '13rem',lg: '20rem'}}
                                    w={{ xs: '8rem',lg: '15rem'}}
                                    bgImg={product.images[0].src}
                                    bgSize="cover"
                                    bgPos="center center"
                                />
                                <Text
                                w={{xs:'120px',lg:'220px'}}
                                textAlign={{ xs: "center", lg: "center" }}
                                textSize={{ xs: "tiny", lg: "body" }}
                                >{product.title}</Text>
                                {/* <Text>{product.varients[0].price}</Text> */}
                            </Div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default ShopPage