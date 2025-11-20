import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import jack from '../../assets/jack.png';
import simon from '../../assets/simon.png';
import tom from '../../assets/tom.png';
import megan from '../../assets/megan.png';
import cameron from '../../assets/cameron.png';

export default function Sidebar({ sidebar, category, setCategory }) {
    return (
        <div className={`sidebar ${sidebar ? '' : 'small-sidebar'}`}>
            <div className='shortcut-links'>
                <div className={`sidelink ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
                    <img src={home} alt='Home icon' /><p>Home</p>
                </div>
                <div className={`sidelink ${category === 20 ? "active" : ""}`} onClick={() => setCategory(20)}>
                    <img src={game_icon} alt='Gaming icon' /><p>Gaming</p>
                </div>
                <div className={`sidelink ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
                    <img src={automobiles} alt='Automobiles icon' /><p>Automobiles</p></div>
                <div className={`sidelink ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
                    <img src={sports} alt='Sports icon' /><p>Sports</p>
                </div>
                <div className={`sidelink ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
                    <img src={entertainment} alt='Entertainment icon' /><p>Entertainment</p>
                </div>
                <div className={`sidelink ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
                    <img src={tech} alt='Technology icon' /><p>Technology</p>
                </div>
                <div className={`sidelink ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
                    <img src={music} alt='Music icon' /><p>Music</p>
                </div>
                <div className={`sidelink ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
                    <img src={blogs} alt='Blogs icon' /><p>Blogs</p>
                </div>
                <div className={`sidelink ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
                    <img src={news} alt='News icon' /><p>News</p>
                </div>
                <hr />
            </div>

            <div className='subscribed-lists'>
                <h3>Subscribed</h3>
                {[jack, simon, tom, megan, cameron].map((user, idx) => (
                    <div key={idx} className='side-link'>
                        <img src={user} alt='subscribed user' />
                        <p>{['Jack', 'Simon', 'Tom', 'Megan', 'Cameron'][idx]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
