import strix from "./img/strix3060.jpg"
import ryzen5 from "./img/ryzen5.jpg";
import corsairHeadset from "./img/corsairHeadset.jpg";

const Productos = [
    {
        id: '1',
        title: 'AMD Ryzen 5 7600',
        price: 320,
        description: 'Procesador de ultima generación AMD socket AM4',
        detail: 'Esto es un texto a modo de prueba',
        category: 'procesadores',
        image: ryzen5,
        stock: 10,
    },

    {
        id:'2',
        title: 'Asus Strix 3060 ti',
        price: 790,
        description: 'Placa de video Nvidia de Asus, modelo Strix 3060 ti',
        detail: 'Esto es un texto a modo de prueba',
        category: 'placasdevideo',
        image: strix,
        stock: 10,
    },

    {
        id: '3',
        title: 'Corsair HS80 Wireless',
        price: 135,
        description: 'Auriculares inalámbricos de alto rendimiento Corsair HS80 Wireless',
        detail: 'Esto es un texto a modo de prueba',
        category: 'perifericos',
        image: corsairHeadset,
        stock: 10,
    },

]


export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(Productos)
        }, 500);
    })
}

export const getProductobyId = (productid) => {
    return new Promise ((resolve => {
        setTimeout(() => {
            resolve(Productos.find(prod => prod.id === productid))
        }, 500);
    }))
}


export const getProductosByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = Productos.filter(
          (prod) => prod.category === category
        );
  
        resolve(filteredProducts);
      }, 500); 
    });
  };