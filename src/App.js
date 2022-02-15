import {Link} from "react-router-dom"
import PaginaPrincipalTADS from "./PaginaPrincipalTADS";

const  App = ()=> {
    return (<>
        <PaginaPrincipalTADS/>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      
        </>);
}

export default App;