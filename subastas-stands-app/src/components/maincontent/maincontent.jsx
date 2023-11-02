import React from "react";
import LogoGaleria from "../../assets/images/logos/logo-organica-oscuro.png";
import { Link } from "react-router-dom";

function MainContent() {


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
                                Esta es tu guía para la Galería Interactiva Orgánica.
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg leading-6 text-gray-600 text-justify">
                                <b>Expositores</b> es un recorrido por todos los expositores que participan en la Expo Agroalimentaria Guanajuato.
                            </p>
                            <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6">
                                <Link
                                to={'/expositores'}
                                className="rounded-md bg-principal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                                >
                                    Expositores
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            
        </>
    )

}

export default MainContent;