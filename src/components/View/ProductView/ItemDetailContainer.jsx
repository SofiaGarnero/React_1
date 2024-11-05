
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getProduct} from '../../ProductView/asynmock';
import { useEffect, useState } from 'react';

function ProductView (){

    const [Product, setProduct]= useState({});
     const { id } = useParams();

     useEffect(()=> {
       setProduct(getProduct(id)); 
     },[]);
     

    return(
      <article className='CardIndividual'>
         <Card style={{  height: 'auto' }}>
      <Card.Img  src={Product.image} />
      <Card.Body>
        <Card.Title>{Product.name}- {Product.category}</Card.Title>
        <Card.Text>
          {Product.description}
        </Card.Text>
        <p>${Product.price}</p>
      </Card.Body>
    </Card>
    </article>

  )
   
}

export default ProductView;
