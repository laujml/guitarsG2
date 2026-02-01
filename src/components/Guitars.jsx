import { db } from '../data/db'

function Guitars({ addToCart }) {
  return (
    <main className="container-xl mt-5">
      <h2 className="text-center">Nuestra Colección</h2>

      <div className="row mt-5">
        {db.map(guitar => (
          <div key={guitar.id} className="col-md-6 col-lg-4 my-4">
            <div className="d-flex align-items-center gap-4">
              <div style={{ width: '120px', minWidth: '120px' }}>
                <img
                  src={`/img/${guitar.image}.jpg`}
                  alt={`Guitarra ${guitar.name}`}
                  className="img-fluid"
                />
              </div>
              <div>
                <h3 className="text-black fs-4 fw-bold text-uppercase">{guitar.name}</h3>
                <p>{guitar.description}</p>
                <p className="fw-black text-primary fs-3">${guitar.price}</p>
                <button
                  type="button"
                  className="btn btn-dark w-100"
                  onClick={() => addToCart(guitar)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Guitars