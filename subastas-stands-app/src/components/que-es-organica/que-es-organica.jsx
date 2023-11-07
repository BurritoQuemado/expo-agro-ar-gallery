import React from "react";
import LogoGaleria from "../../assets/images/logos/logo-organica-oscuro.png";
import { Link } from "react-router-dom";

function OrganicaContent() {


    return (
        <>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-72 w-auto"
                        src={ LogoGaleria }
                        alt="logo_empresa"
                    />
            </div>
            <>
                <div className="bg-white">
                    <div className="px-6 py-4 sm:px-6 sm:py-32 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                Un Tributo a la Innovación y la Sostenibilidad
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                Bienvenidos a <b>ORGÁNICA</b>, el pabellón de alta tecnología de Expo AgroAlimentaria Guanajuato® 2023, una fusión sin precedentes del arte y la ciencia en el corazón de la industria agro mexicana. Aquí, celebramos a los veinte líderes destacados que, con su visión y avances científicos, están redefiniendo el futuro de la alimentación y el cuidado del medio ambiente.
                            </p>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                Más que una simple galería, este espacio producido por <b>La ExpoAgroalimentaria Guanajuato</b> con <b>Polar Multimedia®</b>, es una experiencia interactiva, una odisea creada a través de inteligencia artificial para reflejar la simbiosis entre la naturaleza y la tecnología. Cada cuadros es una obra maestra de la tecnología agro, que al ser visualizado a través de este sitio, cobra vida mediante la magia de la realidad aumentada. Al recorrer este espacio, no solo observarás la belleza de estas creaciones, sino también la esencia y el compromiso de cada uno de estos protagonistas con un mundo más sostenible y equilibrado.
                            </p>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                Te invitamos a sumergirte en este viaje, a conectarte con las historias detrás de cada imagen, y a inspirarte en la revolución agroalimentaria que está moldeando el presente y el futuro de México y del mundo.
                            </p>
                            <br />
                            <h3 className="text-lg text-left font-bold tracking-tight text-gray-600 sm:text-4xl">
                                Bienvenidos a la confluencia del arte, la ciencia y la pasión por un mundo mejor.
                            </h3>
                            <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6">
                                <Link
                                to={'/expositores'}
                                className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                >
                                    Ver Expositores
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        </>
    )

}

export default OrganicaContent