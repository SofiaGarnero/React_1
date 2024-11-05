export const ProductList = [
    {
        name: 'Crema Corporal',
        category: "Cuidados",
        description: 'Tecnología inteligente, piel profundamente nutrida.Acelera la renovación celular.Piel saludable e iluminada.',
        price: 12000,
        id: 1,
        image: 'https://i.pinimg.com/236x/a5/64/38/a56438c7d906d96f4658f4de27244b8f.jpg',
        stock: 6,
    },
    {
        name: 'Jabones',
        category: "Cuidados",
        description: 'Limpieza cremosa y purificante.Piel perfumada y protegida.Mantiene la hidratación natural de la piel.',
        price: 5600,
        id: 2,
        image: 'https://i.pinimg.com/236x/ee/96/92/ee96921d301c2e834c3aa614249c3ec4.jpg',
        stock: 3,
    },
    {
        name: 'Desodorantes',
        category: "Cuidados",
        description: "Complejo vitaminico e hidratante con Vitamina E, Protección prolongada: protección por 48hs contra los efectos del sudor, No deja residuos blancos en los tejidos oscuros, ni manchas amarillentas en los tejidos blancos ",
        price: 3000,
        id: 3,
        image: 'https://i.pinimg.com/236x/5f/97/4f/5f974f2aaf550629f880feada15a492e.jpg',
        stock: 1,
    },
    {
        name: 'Humor',
        category: "Fragancia",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 9000,
        id: 4,
        image: 'https://i.pinimg.com/564x/35/88/1b/35881b33240fbf312bbe3e09791a7422.jpg',
        stock: 10,
    },
    {
        name: 'Liberta',
        category: "Fragancia",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 9000,
        id: 5,
        image: 'https://i.pinimg.com/564x/43/fa/5e/43fa5e7b8c7e783eb99f077aa145a9d8.jpg',
        stock: 10,
    },
    {
        name: 'Pulpa Exfolante',
        category: "Cuidados",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 9000,
        id: 6,
        image: 'https://i.pinimg.com/236x/1f/ee/7a/1fee7ac1337daa171c008d492e6af74d.jpg',
        stock: 10,
    }, {
        name: 'Jabones',
        category: "Cuidados",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 9000,
        id: 7,
        image: 'https://i.pinimg.com/474x/dd/56/7a/dd567a64899886001aef4f23e5b17d58.jpg',
        stock: 10,
    },
    {
        name: 'Ekos Maracuya',
        category: "Fragancia",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 19000,
        id: 8,
        image: 'https://i.pinimg.com/564x/11/f2/3a/11f23ad8b39567224b9c8aacabed9554.jpg',
        stock: 10,
    },
    {
        name: 'Papatua Sh y Ac',
        category: "Cabellos",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 12000,
        id: 9,
        image: 'https://i.pinimg.com/236x/ea/a6/dd/eaa6dd96a56d760eb3bba4d22088e8fb.jpg',
        stock: 5,
    },
    {
        name: 'Serúm Papatu',
        category: "Cabellos",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 19000,
        id: 10,
        image: 'https://i.pinimg.com/474x/f7/e6/53/f7e65320a78b97e370a3988de3f48d75.jpg',
        stock: 8,
    },
    {
        name: 'Tododia Serúm',
        category: "Cuidados",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 19000,
        id: 11,
        image: 'https://i.pinimg.com/236x/0e/eb/17/0eeb175c8d4bfd92f2b07a9cea77c772.jpg',
        stock: 10,
    },
    {
        name: 'Lumina Sh y Ac',
        category: "Cabellos",
        description: 'Piel renovada e hidratada.Textura cremosa.Remueve lás celulas muertas dejando la piel suave.',
        price: 12000,
        id: 12,
        image: 'https://i.pinimg.com/474x/75/e0/fd/75e0fdc263066cdec6fbce3f7b55e9d4.jpg',
        stock: 2,
    },
]


export const getProducts = new Promise((resolve) => {

    setTimeout(() => {
        resolve(ProductList);
    }, 1000);
});

export const getProduct = (id) => {
    return ProductList.find((prod) => prod.id == id)
};

export const getCategory = (category) => {
    return ProductList.filter((product) => product.category === category);
    //va a retornaar una cantidad de productos q cumplan con esa condicion
}

