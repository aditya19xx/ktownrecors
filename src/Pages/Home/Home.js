import React from 'react';
import NewReleases from '../NewReleases/NewReleases';
import OurArtists from '../Our Artists/OurArtists';
import Banner from './Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div className="banner">
            <Banner></Banner>
            <OurArtists></OurArtists>
            <NewReleases></NewReleases>

        </div>
    );
};

export default Home;