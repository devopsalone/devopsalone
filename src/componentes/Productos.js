import '../css/ProductList.css'
import {BotonCompra} from './BotonCompra'

const Productos = (props) => {
  return (
    <div className="desproducto">
      <img
        className="desproducto_imagen"
        src="https://picsum.photos/id/1/200/300"
        alt="Producto"
      />
      <h2 className="desproductoN_Nombre">{props.nombre}</h2>
      <div className="desproducto_detalle">{props.detalle}
        <p className="desproducto_PrecioAnterior">${props.precioant}</p>
        <p></p>
        <p className="desproducto_NuevoPrecio">${props.precioact}</p>
    </div>
    <div>           
        <BotonCompra nombre={props.nombre} />
    </div>
</div>
  );
};
export { Productos };