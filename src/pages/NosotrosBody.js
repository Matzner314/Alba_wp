import Nheader from '../components/Nosotros/Nheader'
import Contact from '../components/Contact'
import React from 'react'
import Resume from '../components/Nosotros/Resume'
import Profiles from '../components/Nosotros/Profiles'

export default function NosotrosBody() {
    return (
        <div>

            <Nheader />
            <br></br>
            <br></br>
            <br></br>
            <Resume />
            <Profiles />
            <Contact />


        </div>
    )
}
