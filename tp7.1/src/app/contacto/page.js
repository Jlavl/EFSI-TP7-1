

const Contacto =() => {
    return (
      <div>
        <main >
          <h1 className="hh"> Tenes alguna duda o problema? Contactanos!</h1>
          <form>
            <div className="formc">
            <input type="text" className="contactduda"
            placeholder={"Aqui puedes escribir tu duda."} size="70" maxLength="999"/>
            <input type="submit" className="submit"/>
            </div>
          </form>
        </main>
  
      </div>
    );
  }
  export default Contacto