import React from 'react'
import AboutImg from '@/assets/images/about.jpg'
import styles from './About.module.css'

const About = () => {
    return (
        <section className={styles.about_section}>
            <div className={styles.about_section_content_box}>
                <div className={styles.about_section_content_img}>
                    <img src={AboutImg} alt="" />
                    <div className={styles.circle}>
                        <div className={styles.spinner}>
                            Front end Developer
                        </div>
                    </div>
                </div>
                <div className={styles.about_section_content}>
                    <h3 className='text-primary font-medium text-xl'>
                        About me
                    </h3>
                    <p className='text-secondary'>
                        Hello. My name is Babazade Shahriyar. I am a Frontend developer. I have worked as a Front-end developer on several projects. I have experience with technologies such as Html, Css, JavaScript, ReactJs, Redux Toolkit, and TailwindCss. I have gained experience working on e-commerce websites as well.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About