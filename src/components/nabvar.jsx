import React from "react";
import Button from 'react-bootstrap/Button';
import CartwidgetA from './cardw'
import { Link } from "react-router-dom";

export const Navbar = ({ handleCategoria }) => {

    const cambiarCategoria = () => {
        handleCategoria(categoria)
    }

    return (
        <div>
             <nav className="Navbar1">
            // <Link to ={'/'}>
                <h1>🌿 Natura Cosméticos</h1>
                </Link>
                <ul>
               <Link to={'/'}>
                        <li><Button variant="outline-light">Inicio</Button></li>
                    </Link>
                    <Link to={'/category/Cuidados'}>
                        <li><Button variant="outline-light">Cuidados Diarios</Button></li>
                    </Link>
                    <Link to={'/category/perfumes'}>
                        <li><Button variant="outline-light">Perfumeria</Button></li>
                    </Link>
                    <Link to={'/category/cabello'}>
                        <li><Button variant="outline-light">Cabello</Button></li>
                    </Link>                    
                </ul>
                <CartwidgetA/>
            </nav> 
            
        </div>
    );
}

export default Navbar;
