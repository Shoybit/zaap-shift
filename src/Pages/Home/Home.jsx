import React from 'react';
import Banner from '../Banner/Banner';
import Work from '../Work/Work';
import OurServices from '../Our Services/OurServices';
import Brands from './Brands/Brands';
import Parcel from '../Parcel/Parcel';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <OurServices></OurServices>
            <Brands></Brands>
            <Parcel></Parcel>
        </div>
    );
};

export default Home;