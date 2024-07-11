import { useContext } from 'react';
import { FireStoreDataContext } from '../../context/FireStoreDataContext';

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
        <h5>Nombre: {item.name}</h5>
        <h5>para: {item.para}</h5>
        <h5> categoria: {item.category}</h5>
        <h5> precio: {item.price}</h5>
        <hr />

        <h5> marca: {item.marca}</h5>
        <h5> talla: {item.talla}</h5>
        <h5> color: {item.color}</h5>
        <h5> tela: {item.tela}</h5>
        <h5> stock hermosillo: {item.stockHermosillo}</h5>
        <hr />

        <h5> stock San Carlos: {item.stockSanCarlos}</h5>
        <h5> Descripcion {item.description}</h5>

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
  );
};
