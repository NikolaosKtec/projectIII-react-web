
import {Link} from "react-router-dom"
import btnicon from "./btn-icon.png"
import eajlogo from "./eaj-logo-2.jpg"

function Navcomp(num) {
    const paginaPrinc = "/invoices"
    const paginaProjPed = "/algo"
    const paginaNoticias = "/algo"
    //pagina principal
    let li1 = "/projPedagogico"
    let li2 = "/noticias"
          // alert(num)
    if(num != 1){
    switch (num) {
    
        case 2: //projPedagógico
            li1 = "/paginaPrincipal"
            li2 = "/noticias"
            
        break;
        case 3: //Noticias
            li1 = "/paginaPrincipal"
            li2 = "/projPedagogico"  
        break;
        
        default:
        li1 = "/null"
        li2 = "/null"  
        break;
    }
    }
    
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
                            <li className="nav-item"><Link className="nav-link text-light" to={li1}>algo</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to={li2}>algo2</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    );    

   
}

export default Navcomp;