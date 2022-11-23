import '../css/BotonCompra.css'

const BotonCompra = ({nombre}) =>{
    return (
        <button onClick={()=>{alert(`producto agregado ${nombre}`)}}>
        Comprar
        </button>
    );
};

export {BotonCompra};