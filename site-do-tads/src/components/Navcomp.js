
import {Link} from "react-router-dom"
import btnicon from "./../Assets/btn-icon.png"
import eajlogo from "./../Assets/eaj-logo-2.jpg"

function Navcomp() {
    const paginaPrinc = "/"
    const paginaProjPed = "/ProjPedagogico"
    const paginaNoticias = "/Noticias"
    const paginaRestaurants = "/Restaurants"
    
     
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0 row" id="mainNav">
                    <div className="col-12">
                        <a className="navbar-brand col-6" href="https://eaj.ufrn.br/">
                            <img id="eajLogo" className="rounded-3" src={eajlogo} height="70" alt="Devia aparecer algo aqui..." />
                        </a>
                        <button className="position-absolute top-0 end-0  navbar-toggler bg-white me-3 mt-2 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#barRespons">
                            <img width="20" src={btnicon}/>
                        </button>
                
                        <div className="collapse navbar-collapse" id="barRespons">
                            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                                <li className="nav-item"><Link className="nav-link text-light" to={paginaPrinc}>Pagina principal</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to={paginaProjPed}>Projeto pedagógico</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to={paginaNoticias}>Noticias</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light" to={paginaRestaurants}>Restaurantes</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    );    

   
}

export default Navcomp;