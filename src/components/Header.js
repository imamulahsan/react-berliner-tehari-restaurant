import React from 'react'
import {Link} from 'react-router-dom'
import bannerImg from '../images/banner.jpg'


const Header = () => {
  return (
    <div>
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Bangladesh</h3>
                    <p>A Bangladeshi restaurant that specializes on Kacchi Biriyani and Tehari</p>
                    <Link to="/booking">
                    <button aria-label="On Click">Reserve Table</button>
                    </Link>
                </div>
                <div className="banner-img">
                <img src={bannerImg} alt="" />
                </div>
            </section>
        </header>
    </div>
  );
};

export default Header;