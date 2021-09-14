import React from 'react'
import Header from '../components/Header'
import "./style.scss"
import InfoAlba from "../components/InfoAlba"
import InfoAlbaS from '../components/InfoAlbaS'
import Socials from '../components/Socials'
import Contact from '../components/Contact'
import AlbaDescription from '../components/AlbaDescription'
import Video from "../components/Video"

export default function index() {
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

        <div>
          <Header />
          <InfoAlba />
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

      </body>

    </html>
  )
}