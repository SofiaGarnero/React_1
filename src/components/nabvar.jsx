import React from "react";
import Button from 'react-bootstrap/Button';
import CartwidgetA from './cardw'

export const Navbar = () => {
    return (
        <div>
             <nav className="Navbar1">
                <h1>Natura Cosmeticos</h1>
                <ul>
                     <li><a href="#"></a><Button variant="outline-light">Tienda</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" >Quienes somos</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" >Contacto</Button></li> 
                                         
                </ul>
                <CartwidgetA/>
            </nav> 
            
        </div>
    );
}

export default Navbar;
