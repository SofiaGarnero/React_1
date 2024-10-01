import { useState } from 'react';
import Card from 'react-bootstrap/Card';


const CardProducto = ({prInfo}) => {
    const{nombre,categoria, precio,id, imagen} = prInfo //Desestructurar el objeto
    const[contador, setContador] = useState(0)

    const suma = () => {
        setContador(contador+1)
    }
    const resta =() => {
        if (contador > 1) setContador(contador-1)
    }

return(
    <div className='cardsProduct'>
        <img src={imagen} alt={prInfo.nombre} />
        <h4>{nombre}</h4>
        <p>{categoria}</p>
        <p>${precio}</p>
        <p>{id}</p>
        
        <div>
        <p>{contador}</p>
        <button onClick={resta}>-</button>
        <button onClick={suma}>+</button>
        </div>
        <button onClick={() =>console.log(`Producto ${nombre} agregado `)}>Agregar al carrito</button>
    </div>
)
}
export default CardProducto