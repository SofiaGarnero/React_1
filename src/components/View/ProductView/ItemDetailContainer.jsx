
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../ProductView/asynmock';
import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../../context/CartContext';

function ProductView() {
  const [Product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const { id } = useParams();
  const [,,addItem] = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = getProduct(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  if (!Product) {
    return <p>Cargando producto...</p>; // Mensaje de carga
  }

  const handleClick = () => {
    addItem({...Product, quantity : count});
  };

  return (
    <article className='CardIndividual'>
      <Card style={{ height: 'auto' }}>
        <Card.Img src={Product.image} />
        <Card.Body>
          <Card.Title>{Product.name}- {Product.category}</Card.Title>
          <Card.Text>{Product.description}</Card.Text>
          <p>${Product.price}</p>
          <div className="count-controls">
            <Button variant="secondary" onClick={decreaseCount}>-</Button>
            <span style={{ margin: '0 10px' }}>{count}</span>
            <Button variant="secondary" onClick={increaseCount}>+</Button>
          </div>
          <Button variant="danger" onClick={handleClick}>Comprar</Button>
        </Card.Body>
      </Card>
    </article>

  )

}

export default ProductView;
