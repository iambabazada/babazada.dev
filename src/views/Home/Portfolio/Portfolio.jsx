import React from 'react'
import styles from './Portfolio.module.css'
import Data from '@/data/data.json'
import { Link } from 'react-router-dom'
import { GrGithub } from "react-icons/gr";
import PortfolioCard from '../../../components/PortfolioCard';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Portfolio = () => {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        dots: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className={styles.portfolio_section}>
            <div className={`${styles.portfolio_section_content_box}`}>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-primary text-xl font-medium'>Portfolio</h3>
                    <p className='text-primary text-xl font-light'>A showcase of my passion for design and development.</p>
                </div>
                <div className={styles.portfolio_cards}>
                    {Data.portfolios.map((portfolio) => (
                        <PortfolioCard key={portfolio.id} data={portfolio} />
                    ))}
                </div>

                <div className={styles.open_source}>
                    <h3 className='text-primary text-xl font-medium'>Open Source Portfolios</h3>
                    <Slider {...settings}>
                        {Data?.openSource.map((item) => (
                            <Link to={item.url} className='flex w-full pl-12 flex-col gap-3'>
                                <div >
                                    <img src={item?.img} alt="" />
                                </div>
                                <div className='flex justify-between'>
                                    <span className="text-xl text-center text-primary font-bold">
                                        {item.title}
                                    </span>
                                    <Link to={item.url} className='flex text-primary items-center gap-1'>
                                        view code <GrGithub />
                                    </Link>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Portfolio