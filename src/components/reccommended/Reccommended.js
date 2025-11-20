import React, { useEffect, useState } from 'react';
import './Reccommended.css';
import { apikey, value_Converter } from '../../Data';
import { Link } from 'react-router-dom';


export default function Reccommended({ categoryId }) {
    const [apiData, setApiData] = useState([]);

    const fetchData = async () => {
        const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=25&videoCategoryId=${categoryId}&key=${apikey}`;
        const res = await fetch(videoUrl);
        const data = await res.json();
        setApiData(data.items || []);
    };

    useEffect(() => {
        fetchData();
    }, [categoryId]);

    return (
        <div className='reccommended'>
            {apiData.map((item, index) => (
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='side-video-list'>
                    <img
                        src={item.snippet.thumbnails.medium.url}
                        alt=""
                    />
                    <div className='side-video-info'>
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_Converter(item.statistics.viewCount)} Views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
