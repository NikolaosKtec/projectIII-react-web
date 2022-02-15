
import Footercomp from "./Footercomp"
import Navcomp from "./Navcomp"

import capa from "./capa.jpg"
import eajfotofrente from "./eaj-foto-frente.jpg"
import eajpista from "./eaj-pista.jpg"
import eajeucaliptos from "./eucaliptos-1024x768.jpg"

const PaginaPrincipalTADS = () => {

    
    return (
        <section className="md-5">
                {Navcomp(1)}
            <h1 className="my-5" >Apresentação</h1>
            <Text1/>
            <CarrocelImg/>
            <Footercomp/>
        </section>
    );

}
  const Text1 = ()=> {
    return (
      <div className="mb-5">
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
    );
  }

  const CarrocelImg = ()=> {
    return (
      <article>
        <h2 className="mt-3">Fotos do Campus</h2>
            <div id="CarrDeIMG" className="carousel slide ms-5 mb-5 ps-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#CarrDeIMG" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#CarrDeIMG" data-bs-slide-to="1" ></button>
                  <button type="button" data-bs-target="#CarrDeIMG" data-bs-slide-to="2" ></button>
                </div>
                <div id="carouselImg" className="carousel-inner">
                  <div className="carousel-item active m-3">
                    <img src={eajfotofrente} alt="ops" className="w-75"/>
                  </div>
                  <div className="carousel-item">
                    <img src={eajeucaliptos} alt="ops" className="w-75"/>
                  </div>
                  <div className="carousel-item">
                    <img src={eajpista} alt="ops" className="w-75"/>
                  </div>
                  <figcaption>FOTOS fonte:EAJ</figcaption>
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
      </article>
    );
  }
export default PaginaPrincipalTADS;