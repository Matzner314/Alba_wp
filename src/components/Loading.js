import React from 'react'
import { Puff } from 'react-loader-spinner'
import './loading.css'


export default function Loading() {
  return (

    <div className="Puff">
      <Puff
        height="200"
        width="200"
        radius="9"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  )
}
