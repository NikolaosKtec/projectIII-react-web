import Footercomp from "../Components/Footercomp";
import HerderComponent from "../Components/HerderComponent";

function PaginaNoticias() {
    
    return (
        <section className="md-5">
            <Content/>
            <Footercomp/>
        </section>
        );
}

const Content = ()=> {
    return (
        <>
            <HerderComponent titulo="Noticias" />

            <article className="col-8">
                <ul>
                    <p className="mt-4">26/10/2021 09:04	Calendário para projeto de Trabalho de Conclusão de Curso Ano/Semestre 2022.1</p>
                    <p className="mt-4"> 26/10/2021 09:02	Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2021.2</p>
                    <p className="mt-4">30/09/2021 07:53	Plano de curso das disciplinas de 2021.2</p>
                    <p className="mt-4">18/05/2021 14:02	Planos de curso das turmas de 2021.1</p>
                    <p className="mt-4">10/02/2021 10:11	Semana de defesa de Trabalhos de Conclusão de Curso - Ano/Semestre 2020.2</p>
                </ul>
            </article>
         </>
    );
}

export default PaginaNoticias;