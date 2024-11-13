import Image from 'next/image'

const Productos =() => {
    return (
      <div>
          <h3> CATALOGO</h3>
          <input type="text" className="busquedap"
            placeholder={"Busca algun producto! Ejemplo: Shampoo Dove"} size="70" maxLength="999"/>
      </div>
    );
  }
  export default Productos