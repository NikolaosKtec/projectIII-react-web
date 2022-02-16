import { useEffect, useState } from "react";

import Footercomp from "../Components/Footercomp";
import RestauranteComponente from '../Components/RestauranteComponente';

import urlApi from '../Api/api';
import HerderComponent from "../Components/HerderComponent";

function PaginaRestaurants() {
    
    return (
        <section className="md-5">
            <Restaurat/>
            <Footercomp/>
        </section>
        );
}

const Restaurat = ()=> {
    const tamanho = 5;
    const tamanhoParam = `?size=${tamanho}`;

    const[restaurants, setRestaurants] = useState([]);

    const getRestaurats = async () => {
        const respostaApi = await fetch(`${urlApi}${tamanhoParam}`);
        const restaurants = await respostaApi.json();
        // console.log("result api: ", comidas);
        setRestaurants(restaurants);
    }

    useEffect(() => {
        getRestaurats();
    }, []);
    
    return (
        <>
            <HerderComponent titulo="Restaurantes" />        

            <section className="col-8">
                {restaurants.map((restaurant) => {
                    // const{address, logo, phone_number, hours} = restaurant;  
                    return (
                        <RestauranteComponente key={restaurant.id} {... restaurant} />
                    );

                        // <div class='center'>
                        //     <img src={logo} />
                        //     <p>{address}</p>
                        //     <p>{phone_number}</p>
                            /* { hours.map((hr) => {
                                const {friday} = hr;
                                console.log(friday);
                            })} */
                        // </div>
                })}
            </section>
         </>
    );
}

export default PaginaRestaurants;