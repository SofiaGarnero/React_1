import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <p> Categoria: {lista.category}</p>
            <p>Precio: {lista.price}</p>
       
        </Card.Text>
        <Button variant="primary">More details</Button>
       </Card.Body>
     </Card>   
        </article>
        </>
    //    
    )
}

export default ProductCard;