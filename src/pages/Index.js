import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import "./style.scss"
import InfoAlba from "../components/InfoAlba"
import InfoAlbaS from '../components/InfoAlbaS'
import Socials from '../components/Socials'
import Contact from '../components/Contact'
import AlbaDescription from '../components/AlbaDescription'
import Video from "../components/Video"
import WebTheme from '../components/Theme'
import Loading from '../components/Loading'
import './Nosotros'


export default function Index() {

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

      <body className="marings">

        {isLoading == true ?
          <Loading /> :
          <WebTheme>

            <div className="fade-in">
              <div>

                <Header />

              </div>
              <div>
                <InfoAlba />
              </div>

              <InfoAlbaS />
              <AlbaDescription />
              <Video />
            </div>
            <div>
              <Socials />
            </div>
            <div>
              <Contact />
            </div>
          </WebTheme>
        }


      </body>

    </html>
  )
}