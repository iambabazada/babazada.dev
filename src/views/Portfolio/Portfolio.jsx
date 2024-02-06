import React from 'react'
import styles from './Portfolio.module.css'
import Data from '@/data/data.json'
import PortfolioCard from '../../components/PortfolioCard'

const Portfolio = () => {

    return (
        <section className={styles.portfolio_section}>
            <div className={`${styles.portfolio_section_content_box}`}>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-primary text-xl font-medium'>Portfolio</h3>
                    <p className='text-secondary text-xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, amet.</p>
                </div>
                <div className={styles.portfolio_cards}>
                    {Data.portfolios.map((portfolio) => (
                        <PortfolioCard key={portfolio.id} data={portfolio} />
                    ))}
                </div>

                <div className={styles.open_source}>
                    <h3 className='text-primary text-xl font-medium'>Open Source</h3>
                </div>

            </div>
        </section>
    )
}

export default Portfolio