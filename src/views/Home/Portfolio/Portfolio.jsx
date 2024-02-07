import React from 'react'
import styles from './Portfolio.module.css'
import Data from '@/data/data.json'
import { Link } from 'react-router-dom'
import { GrGithub } from "react-icons/gr";
import PortfolioCard from '../../../components/PortfolioCard';

const Portfolio = () => {

    return (
        <section className={styles.portfolio_section}>
            <div className={`${styles.portfolio_section_content_box}`}>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-primary text-xl font-medium'>Portfolio</h3>
                    <p className='text-primary text-xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet.</p>
                </div>
                <div className={styles.portfolio_cards}>
                    {Data.portfolios.map((portfolio) => (
                        <PortfolioCard key={portfolio.id} data={portfolio} />
                    ))}
                </div>

                <div className={styles.open_source}>
                    <h3 className='text-primary text-xl font-medium'>Open Source Portfolios</h3>
                    <div className='grid grid-cols-3 gap-12'>
                        {Data?.openSource.map((item) => (
                            <Link to={item.url} className='flex flex-col gap-3'>
                                <div className="img">
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
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio