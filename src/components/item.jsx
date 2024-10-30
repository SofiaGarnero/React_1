import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
;




function ProductCard({lista}) {
    

    return(
        <>
        <article className='productCard'> 
        <Card >
       <img className='imagen' src={lista.image} alt={lista.name} /> 
      <Card.Body>
        <Card.Title>{lista.name}</Card.Title>
        <Card.Text>
            <p> Categ: {lista.category}</p>
            <p>Precio: {lista.price}</p>
       
        </Card.Text>
        <Button variant="primary"><Link to={`/Product/${lista.id}`}>More details</Link></Button>
       </Card.Body>
     </Card>   
        </article>
        </>
    //    
    )
}

export default ProductCard;