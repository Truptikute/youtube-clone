import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import user_profile from '../../assets/user_profile.jpg';
import { apikey, value_Converter } from '../../Data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

export default function Playvideo() {

    const { videoId } = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    // Fetch video details
    const fetchedVideoData = async () => {
        const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apikey}`;
        const res = await fetch(videoDetailsUrl);
        const data = await res.json();
        setApiData(data.items[0]);
    }

    // Fetch channel details and comments
    const fetchChannelData = async (channelId) => {
        // Channel details
        const channelDetailsUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apikey}`;
        const res = await fetch(channelDetailsUrl);
        const data = await res.json();
        setChannelData(data.items[0]);

        // Comments
        const commentUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&key=${apikey}&maxResults=50`;
        const commentRes = await fetch(commentUrl);
        const commentDataJson = await commentRes.json();
        setCommentData(commentDataJson.items || []);
    }

    useEffect(() => {
        fetchedVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData?.snippet?.channelId) {
            fetchChannelData(apiData.snippet.channelId);
        }
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apiData?.snippet?.title || "Title here"}</h3>

            <div className='play-video-info'>
                <p>
                    {apiData ? value_Converter(apiData.statistics.viewCount) : ""} Views &bull;
                    {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
                </p>
                <div>
                    <span><img src={like} alt="" /> {apiData ? value_Converter(apiData.statistics.likeCount) : ""}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" /> Share</span>
                    <span><img src={save} alt="" /> Save</span>
                </div>
            </div>
            <hr />
            <div className='publisher'>
                <img src={channelData?.snippet?.thumbnails?.default?.url || ""} alt="" />
                <div>
                    <p>{apiData?.snippet?.channelTitle || ""}</p>
                    <span>{channelData ? value_Converter(channelData.statistics.subscriberCount) : ""} subscribers</span>
                </div>
                <button>Subscribe</button>
            </div>

            <div className='vid-disc'>
                <p>{apiData?.snippet?.description?.slice(0, 250) || ""}</p>
                <hr />
                <h4>{apiData?.statistics?.commentCount || 0} Comments</h4>

                {commentData.map((item, index) => (
                    <div key={index} className='comments'>
                        <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || user_profile} alt="" />
                        <div>
                            <h3>{item?.snippet?.topLevelComment?.snippet?.authorDisplayName || "Unknown"}
                                <span> {moment(item?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow() || ""}</span>
                            </h3>
                            <p>{item?.snippet?.topLevelComment?.snippet?.textDisplay || ""}</p>
                            <div className='comment-action'>
                                <img src={like} alt="" />
                                <span>{value_Converter(item?.snippet?.topLevelComment?.snippet?.likeCount || 0)}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
