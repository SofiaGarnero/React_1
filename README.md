Este Protecto es un Ecommerce desarrollado en React.js que permite a los usuarios explorar produtos , agregarlos al carrito y realizar compras de manera sencilla. 
Características :
-Listado de productos. Se pueden ver con imagen, precio y descripción.
-Filtrado de productos por categoría: Tiene cuatro categorias que se pueden filtrar los productos. 
-Carrito de compras para gregar, eliminar  y comprar productos sumando el total de los precios . 

Herramientas utilizadas:
-React.js.
-React Router DOM: es la herramienta que me permitio crear rutas y navegar en diferentes vistas. 
    *Utiliando BrowserRouter, Routes,Route y NavLink para definir rutas  y enlaces de navegación, pasar desde el /cart a un product/:Id.
-React contect API : Permite compartir datos a través de toda la app sin tener que pasar los props manulamente.
    *Utilizado en CartContext para gestionar el estado del carrito de compras , agregar eliminar y vaciar. 
-React Hooks(useState, useEffect, useContext) permite usar el estado y otras características de React en componetes funcionales. 
    *useState: Para manejar estados locales , isLoading (estado de carga) , count (cantidad de productos)
    *useEffect: Para ejecutar la carga de datos de productos al montar el componente . 
    *useContext: Para acceder los datos y funciones dento del contexto CartContext 
-React Boostrap: React Bootstrap es una biblioteca de componentes de Bootstrap para React, lo que permite integrar los estilos y componentes de Bootstrap en proyectos de React de forma     nativa. Utilizada en botton, card. 
-React Loading : Para la animacion de carga mientras se obtienen datos.
-Manejo de rutas dinamicas con useParms : para manejar estados , efectos y parámetros de rutas. 
