import nometads from "./../Assets/nometads.png"
function Footercomp() {

    return (
        <footer className="mt-5 ms-1 border border-dark row">
            <img src={nometads} alt="image nome tads" className="col-2"></img>
            <p className="col-8">
                por Nikolaos de alguém
                XXX em 25 de janeiro  de 2022
            </p>
        </footer>  
    );
}

export default Footercomp;