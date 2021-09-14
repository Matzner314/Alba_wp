import React from 'react';
import "./videos.scss"
import ReactPlayer from 'react-player';
import Video_ALBA from '../../videos/ALBA.mp4'

export default function Video() {
    return (
        <div className="video-shape">
            <div>
                <h1 className="sobre_nosotros">Todo Sobre <span className="boold">ALBA</span>
                </h1>
            </div>
            <div className="video">
                <ReactPlayer url={Video_ALBA}
                    width='100%'
                    height='100%'
                    controls
                    playing
                    muted
                />
            </div>
            <div>
                <br />
                <hr />
            </div>
        </div>

    )
}