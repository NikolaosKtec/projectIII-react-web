import nometads from "./../Assets/nometads.png"
import styles from "./../Components/Style.module.css"
function Footercomp() {

    return (
        // <footer className="mt-5 ms-1 border border-dark row">
        <footer className="container-fluid bd-footer py-3 mt-5 bg-light">
            <nav >
                <div className="row ps-lg-5">
                    <div className=" col-lg-6 col-md-4 ps-lg-5">
                        <img src={nometads} alt="image nome tads" className={styles.imgfooter}></img>
                    </div>
                    <div className="col-lg-6 col p-lg-5">
                        <p className={styles.textpp}>
                            Desenvolvido por Nikolaos / 
                            25 de janeiro  de 2022
                        </p>
                    </div>
                </div>
            </nav>
        </footer>  
    );
}

export default Footercomp;