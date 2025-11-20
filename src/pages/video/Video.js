import React from 'react'
import './Video.css'
import Playvideo from '../../components/playvideo/PlayVideo'
import Reccommended from '../../components/reccommended/Reccommended'
import { useParams } from 'react-router-dom'


export default function Video() {

    const { videoId, categoryId } = useParams();
    return (
        <div className='play-container'>
            <Playvideo videoId={videoId} />
            <Reccommended categoryId={categoryId} />
        </div>
    )
}


