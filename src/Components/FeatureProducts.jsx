import React from 'react'
import { FeatureProduct } from '../Data/StaticData'
import { Card } from 'react-bootstrap'
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  flexWrap:wrap;
`;
const FeatureProducts = () => {
  return (
   <>
   <h2 className='text-center'>FEATURED PRODUCTS</h2>
     <Container>
         {
            FeatureProduct.map((item)=>{
                return(
                    <Card style={{ width: '18rem' ,padding:"10px",margin:"10px"}}>
      <Card.Img variant="top" src={item.img}/>
      <Card.Body className='text-center'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>$: {item.price}</Card.Text>
      </Card.Body>
    </Card>
                )
            })
         }
    </Container>
   </>
  )
}

export default FeatureProducts
