import React from 'react'
import AboutImg from '@/assets/images/about.jpg'
import styles from './About.module.css'
import Slider from "react-slick";

import CircleSvg from '@/assets/images/circle.png'

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const skills = ["Html Css", "Javascript", "React", "Redux toolkit", "React router", "TailwindCss", "Restfull Api", "Axios", "Responsive",]

    return (
        <section className={styles.about_section}>
            <div className={styles.about_section_content_box}>
                <div className={styles.about_section_content_img}>
                    <img src={AboutImg} alt="" />
                    <div className={styles.circle}>
                        <div className={styles.spinner}>
                            <img src={CircleSvg} alt="" />
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
                    <span className='text-primary font-semibold text-lg'>
                        My skills
                    </span>
                    <div className='flex gap-4 flex-wrap '>
                        {skills.map((skill, index) => (
                            <div className='py-1 px-2 bg-secondary text-white rounded text-sm' >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About