import React from 'react';
import { Link } from 'react-router-dom';
import expositores from '../../utils/expositores';
import { ArtDisplay } from '..';

function ExpositorDisplay ({ expositor_id }) {
    const display_expositor = expositores.find(expositor => expositor.id === parseInt(expositor_id));
    return (
        <div className='px-4 pt-2 mt-2'>
            <div className=" w-full overflow-hidden">
            <img
                src={display_expositor.img}
                alt={display_expositor.name}
                className="h-full w-full"
            />
            </div>
            <div className='px-8 pt-2 pb-4'>
                <h2 className="mt-4 text-2xl font-semibold  text-gray-700">{display_expositor.name}</h2>
                <p className="mt-4 text-normal text-gray-700 text-justify">{display_expositor.desc}</p>
            </div>
            <div className="mt-10 grid grid-cols-1 items-center justify-center gap-6">
                <Link
                to={display_expositor.contact}
                target='_blank'
                rel="nonreferrer noreferrer"
                className="rounded-md bg-principal px-3.5 py-2.5 mx-20 text-sm text-center font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                >
                    Contacto
                </Link>
            </div>
            <div className='py-4'>
                <ArtDisplay arte={display_expositor.art} />
            </div>
            <div className="mt-5 mb-5 grid grid-cols-1 items-center justify-center gap-6">
                <Link
                to={'/expositores'}
                target='_self'
                rel="nonreferrer noreferrer"
                className="rounded-md bg-resalto px-3.5 py-2.5 mx-20 text-sm text-center font-semibold text-white shadow-sm hover:bg-principal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-principal"
                >
                    Regresar
                </Link>
            </div>
        </div>
    )
}

export default ExpositorDisplay;