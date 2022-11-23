//lista de productos
import '../css/ProductList.css';

const ProductList  = (props) =>
{
    return (
        <section className="SeccionProduct">
            <h1 className="SeccionProduct1">Listado de Productos</h1>
            <div className="contenedorProductos">
               {props.children} 
            </div>
        </section>    
    );
};

export {ProductList};