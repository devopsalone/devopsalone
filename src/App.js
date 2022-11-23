import  datos  from './Datos/Productos.json'

import './css/App.css';
import { ProductList } from './componentes/ProductList'
import { Productos } from './componentes/Productos'

const App = () =>
  {
  return (
    <ProductList>
      {datos.map(productos=>
        <Productos
          id={productos.id}
          nombre={productos.nombre}
          detalle={productos.detalle}
          precioant={productos.precioant}
          precioact={productos.precioact}

      />
)}

</ProductList>  
    );

  };

export default App;