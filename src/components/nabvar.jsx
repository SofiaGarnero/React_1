import React from "react";
import Button from 'react-bootstrap/Button';
import CartwidgetA from './cardw'
import { ProductList } from "./ProductView/asynmock";


export const Navbar = () => {
    console.log(ProductList)
    return (
        <div>
             <nav className="Navbar1">
                <img src="https://s.staticz.com.br/app/img/partner/filled/cupom-natura.png" alt="logo" />
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