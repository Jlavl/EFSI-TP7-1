import Image from 'next/image'

const Productos =() => {
    return (
      <div>
          <text> CATALOGO</text>
          <input type="text" className="busquedap"
            placeholder={"Busca algun producto! Ejemplo: Shampoo Dove"} size="70" maxLength="999"/>
      </div>
    );
  }
  export default Productos