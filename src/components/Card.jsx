export default function Card({ data }) {
  return (
    <div className='card'>
      <h2>{data.nombre}</h2>
      <img
        src={
          data.imagen[0].frente === ''
            ? data.imagen[1].dorso
            : data.imagen[0].frente
        }
        alt={data.nombre}
      />
    </div>
  );
}
