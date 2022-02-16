function RestauranteComponente({address, description, logo, phone_number, name}) {

    return (
        <section className="card">
            <img src={logo} className="card-img-top" alt="logo" />
            <div className="card-body">
                
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{address}</p>
                <p className="card-text">{phone_number}</p>
                <a href="#" className="btn btn-primary">Detalhes</a>
            </div>
        </section>
    )
}

export default RestauranteComponente;