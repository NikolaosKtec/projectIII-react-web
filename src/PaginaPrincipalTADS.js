import btnicon from "./btn-icon.png"
import capa from "./capa.jpg"
import eajfotofrente from "./eaj-foto-frente.jpg"
import eajlogo from "./eaj-logo-2.jpg"
import eajpista from "./eaj-pista.jpg"
import eajeucaliptos from "./eucaliptos-1024x768.jpg"
import nometads from "./nometads.png"



const PaginaPrincipalTADS = () => {

    
    
    
    
    return (
        <section className="md-5">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-0 row" id="mainNav">
                    <div className="col-12">
                        <a className="navbar-brand col-6" href="https://eaj.ufrn.br/">
                            <img className="rounded-3" src={eajlogo} height="70" alt="Devia aparecer algo aqui..." />
                        </a>
                        <button className="position-absolute top-0 end-0  navbar-toggler bg-white me-3 mt-2 p-1" type="button" data-bs-toggle="collapse" data-bs-target="#barRespons">
                            <img width="20" src={btnicon}/>
                        </button>
                
                        <div className="collapse navbar-collapse" id="barRespons">
                            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                                <li className="nav-item"><a className="nav-link text-light" href="projPedago.html">projeto pedagógico</a></li>
                                <li className="nav-item"><a className="nav-link text-light" href="noticias.html">Noticias</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            <h1 classNameName="my-5" >Apresentação</h1>

        <div classNameName="mb-5">
            <figure className="figure">
                <img className="figure-img " alt="Imagem tads" width="200" src={capa}/>
            </figure>
        <p className="mt-4"> 
            O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a 
            formação de profissionais capazes de compreender o processo de construção e reconstrução do 
            conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar 
            atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de 
            sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular 
            para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a 
            melhoria da qualidade de vida das populações.
        </p>
        <p>  
            Os profissionais formados atuarão na área de análise e 
            desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia 
            de software, gerência de projetos e administração de bancos de dados. 
        </p>
        </div>

        <span className="mt-3">FOTOS fonte:EAJ</span>
            <div id="CarrDeIMG" className="carousel slide ms-5 mb-5 ps-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#CarrDeIMG" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#CarrDeIMG" data-bs-slide-to="1" ></button>
                  <button type="button" data-bs-target="#CarrDeIMG" data-bs-slide-to="2" ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active m-3">
                    <img src={eajfotofrente} alt="ops" className="w-75"/>
                  </div>
                  <div className="carousel-item">
                    <img src={eajeucaliptos} alt="ops" className="w-75"/>
                  </div>
                  <div className="carousel-item">
                    <img src={eajpista} alt="ops" className="w-75"/>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#CarrDeIMG" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#CarrDeIMG" data-bs-slide="next">
                  <span className="carousel-control-next-icon" ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <footer class="mt-5 ms-1  ">
        <p>
            por Nikolaos de alguém
            XXX em 25 de janeiro  de 2022
        </p>
    </footer>

            </section>
    );

}

export default PaginaPrincipalTADS;