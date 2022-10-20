import React, { useEffect, useState } from 'react'
import './nosotros.css'
import Loading from '../components/Loading'
import NosotrosBody from './NosotrosBody'

export default function Nosotros() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    })


    return (
        <html lang="es">
            <head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

            </head>

            <body>

                {isLoading === true ?
                    <Loading /> :
                    <div className="fade-in">
                        <NosotrosBody />

                    </div>

                }


            </body>

        </html>
    )
}
