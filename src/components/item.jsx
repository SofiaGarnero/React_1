import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
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
        <Button variant="primary"><NavLink to={`/Product/${lista.id}`}activeclassname="currentCategory" className="text-white">More details</NavLink></Button>
       </Card.Body>
     </Card>   
        </article>
        </>
    //<NavLink to={'/'} activeclassname="currentCategory" className="text-white">    
    )
}

export default ProductCard;