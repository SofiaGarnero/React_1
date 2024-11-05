import React from "react";
import Button from 'react-bootstrap/Button';
import CartwidgetA from './cardw'
import { ProductList } from "./ProductView/asynmock";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
    console.log(ProductList)
    return (
        <div>
             <nav className="Navbar1">
             <NavLink to={'/'} activeclassname="currentCategory" className="text-white"><img src="https://s.staticz.com.br/app/img/partner/filled/cupom-natura.png" alt="logo" /></NavLink>
                <h1><NavLink to={'/'} activeclassname="currentCategory" className="text-white">Natura Cosmeticos</NavLink></h1>
                <ul>
                     <li><Button variant="outline-light"><NavLink to={'/'} activeclassname="currentCategory" className="text-white">Tienda</NavLink></Button></li>
                    <li><a href="#"></a><Button variant="outline-light" ><NavLink to={'/Fragancia'} activeclassname="currentCategory" className="text-white">Fragancia</NavLink></Button></li>
                    <li><a href="#"></a><Button variant="outline-light" ><NavLink to={'/Cuidados'} activeclassname="currentCategory" className="text-white">Cuidados Diarios</NavLink></Button></li> 
                    <li><a href="#"></a><Button variant="outline-light" ><NavLink to={'/Cabellos'} activeclassname="currentCategory" className="text-white">Cabello</NavLink></Button></li> 
                                         
                </ul>
                <CartwidgetA/>
            </nav> 
            
        </div>
    );
}
export default Navbar;