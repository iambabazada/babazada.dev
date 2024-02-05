import React from 'react'
import styles from './Hero.module.css'
import Button from '../../../components/Button'
import Person from '@/assets/images/iambabazada.jpg'

const Hero = () => {
    return (
        <section id="hero_section" className={`${styles.hero_section}  py-[70px] px-[170px]`}>
            <div className={`${styles.hero_section_content_box} container mx-auto`}>
                <div className={styles.hero_section_content}>
                    <p>Hey I'm Shahriyar</p>
                    <h1 className='text-5xl font-semibold'>
                        Front end <br /> Developer
                    </h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, totam.</p>
                    <div>
                        <Button variant={"primary"} rounded size="lg">
                            Download Cv
                        </Button>
                    </div>
                </div>
                <div className={styles.hero_section_img}>
                    <img src={Person} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero