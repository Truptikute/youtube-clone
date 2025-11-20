import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { apikey, value_Converter } from '../../Data'
import moment from 'moment'

export default function Feed({ category }) {

    const [data, setData] = useState([]);

    const fetchdata = async () => {
        if (category === null || category === undefined) return;

        const videolisturl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=US&maxResults=50&videoCategoryId=${category}&key=${apikey}`;

        try {
            const res = await fetch(videolisturl);
            const result = await res.json();
            setData(result.items || []);
        } catch (err) {
            console.error("Error fetching videos:", err);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [category])

    return (
        <div className='feed'>
            {data.length > 0 ? data.map((item) => (
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={item.id}>
                    <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{value_Converter(item.statistics.viewCount)} Views &bull; {item ? moment(item.snippet.publishedAt).fromNow() : ""}</p>
                </Link>
            )) : <p>Loading videos...</p>}
        </div>
    )
}
