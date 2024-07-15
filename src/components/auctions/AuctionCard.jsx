import { useContext } from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';
  import './auctionCard.css'








export const AuctionCard = ({ item }) => {
  //const formateador = new Intl.DateTimeFormat("es-MX", { dateStyle: 'long', timeStyle: 'short' });
  /* 
  const milisegundosComoFecha = (milisegundos) => {
      return formateador.format(new Date(milisegundos));
  }; */



  const { deleteById, setToggle, toggle } = useContext(FireStoreDataContext);

  return (
    <div className="card shadow-sm ">
      <div
        style={{
          height: '180px',
          backgroundImage: `url(${item.imgUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-100 mt-4"
      />

      <div className="card-body p-4 ">
        {/* <h5>Creado: {  new Date(item.duration).toLocaleDateString("es-ES", {year: 'numeric', month: 'long', day: 'numeric'})}</h5> */}
        <h5>{/* {milisegundosComoFecha(item.duration)} */} </h5>
        <hr />
        <p>Nombre: {item.name}</p>
        <p>para: {item.para}</p>
        <p> categoria: {item.category}</p>
        <p> precio: {item.price}</p>
        <hr />

        <p> marca: {item.marca}</p>
        <p> talla: {item.talla}</p>
        <p> color: {item.color}</p>
        <p> tela: {item.tela}</p>
        <p> stock hermosillo: {item.stockHermosillo}</p>
        <hr />

        <p> stock San Carlos: {item.stockSanCarlos}</p>
        <p> Descripcion {item.description}</p>


        <hr/>
<div className='btnBorrarInforme'> 
        <button
          className="btn btn-danger"
          onClick={() => {
            if (
              window.confirm(`Quiere Borrar este Documento? ${item.imgName}`)
            ) {
              deleteById(item.id, item.imgName);
              setToggle(!toggle);
            }
          }}
        >
          Borrar
        </button>
        </div>
      </div>
    </div>
  );
};
