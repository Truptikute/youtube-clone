import React, { useState } from 'react';
import './Home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';

export default function Home({ sidebar }) {
    const [category, setCategory] = useState(0); // default category

    return (
        <div className="home-container" style={{ display: 'flex' }}>
            <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
            <div className={`container ${sidebar ? "" : 'large-container'}`}>
                <Feed category={category} />
            </div>
        </div>
    );
}
