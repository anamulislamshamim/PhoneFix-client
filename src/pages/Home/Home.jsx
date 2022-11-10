import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from '../About/About';
import Header from '../Header/Header';
import Statistic from '../Statistic/Statistic';
import ThreeProducts from '../ThreeProducts/ThreeProducts';

const Home = () => {
    const title = useTitle();
    title("Home-PhoneFix");
    return (
        <>
        <Header />
        <About />
        <Statistic  />
        <ThreeProducts />
        </>
    );
};

export default Home;