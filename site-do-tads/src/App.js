
import PaginaPrincipalTADS from "./PaginaPrincipalTADS";
import PaginaProjped from "./PaginaProjped";
import PaginaNoticias from "./PaginaNoticias";
import Navcomp from "./components/Navcomp"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

const  App = ()=> {
    return (
        <Router>
           <Navcomp/> 

        <Routes>
            <Route path="/" element={<PaginaPrincipalTADS/>}/> //exact          
            <Route path="/ProjPedagogico" element={<PaginaProjped/>}/>
            <Route path="/Noticias" element={<PaginaNoticias/>}/>     
        </Routes>                
            
         
        </Router>);

}

export default App;