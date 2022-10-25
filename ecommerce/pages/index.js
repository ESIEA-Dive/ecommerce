import React from 'react';

import { Product, HeroBanner, FooterBanner} from '../components';
import { client } from '../LIB/client' ;

const Home = ({ products, bannerData }) => {

  return (
    <>
    <HeroBanner/>
      
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p> Speakers of many Variations</p>
      </div>

      <div className='products-container'>
        {products.map((product) => product.name)}
      </div>

    <FooterBanner />
    </>
  )
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home;