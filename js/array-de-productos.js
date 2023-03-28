
let listaProductos = [
    {
      nombreProducto: "Hidratante facial",
      precio: 3500,
      categoria: "Hidratante",
    },
    {
        nombreProducto: "Serum",
        precio: 3500,
        categoria: "Hidratante",
      },
    { nombreProducto: "Tonico exfoliante", precio: 2350.45, categoria: "Tonico" },
    {
      nombreProducto: "Protector solar factor 50",
      precio: 3300,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar toque seco factor 50",
      precio: 4100,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Protector solar con color factor 50",
      precio: 3850.5,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Gel de limpieza facial",
      precio: 1740.99,
      categoria: "Limpieza",
    },
    { nombreProducto: "Tonico hidratante", precio: 1250.99, categoria: "Tonico" },
    { nombreProducto: "Sérum hidratante", precio: 4250.99, categoria: "Sérum" },
    {
      nombreProducto: "Exfoliante de azúcar cherry",
      precio: 1200,
      categoria: "Labios",
    },
    {
      nombreProducto: "Pads de hidrogel para contorno de ojos",
      precio: 2800,
      categoria: "Ojos",
    },
    {
      nombreProducto: "Mascarilla facial",
      precio: 3250.99,
      categoria: "Mascaras",
    },
    { nombreProducto: "Sérum facial con PHA", precio: 3200, categoria: "Sérum" },
    { nombreProducto: "Bálsamo labial", precio: 3200, categoria: "Labios" },
    { nombreProducto: "Crema contorno de ojos", precio: 3200, categoria: "Ojos" },
    {
      nombreProducto: "Protector solar en barra",
      precio: 3800,
      categoria: "Protector solar",
    },
    {
      nombreProducto: "Mascara de hidratación y reparación",
      precio: 1200,
      categoria: "Mascaras",
    },
    { nombreProducto: "Agua micellar", precio: 2890, categoria: "Limpieza" },
  ];

  function drawTableOfProducts (arrayOfProducts) {
    document.write(`<table>
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Categoría</th>
        </tr>
    </thead>
    <tbody>`)
    arrayOfProducts.map( product => {
        return (
            document.write(`
            <tr>
            <td>${product.nombreProducto}</td>
            <td>${product.precio}</td>
            <td>${product.categoria}</td>
        </tr>`)
        )
    } )
    document.write(`</tbody>
    </table>`)
  }

  drawTableOfProducts(listaProductos)

  let filteredBySunscreenProducts = listaProductos.filter( producto => producto.categoria ===  "Protector solar")

  drawTableOfProducts(filteredBySunscreenProducts)

  function searchForProductByName(name, array) {
    let searchedProduct = array.find( product => product.nombreProducto.toLowerCase().includes(name.toLowerCase()))
    if (searchedProduct) {
        return [searchedProduct]
    } else {
        document.write(`El producto ${name} no se ha encontrado en la lista de productos proporcionada`)
    }
  }

drawTableOfProducts(searchForProductByName("serum", listaProductos))
 searchForProductByName("Bruma", listaProductos)





 