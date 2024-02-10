import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaCopyright } from "react-icons/lia";
import { Link } from 'react-scroll';





const Contact = () => {
    return (
        <section id='contact_section' className='max-w-[1440px] mx-auto '>
            <div className="flex items-center justify-center h-screen">
                <div className='flex flex-col h-full '>
                    <div className='flex flex-col h-full justify-center gap-4'>
                        <h4 className='text-3xl text-center text-primary'>
                            Contact me
                        </h4>
                        <div className='flex gap-6 mx-2 border-[1px] border-primary rounded-lg py-3 px-5'>
                            <a href="mailto:iambabazada@gmail.com" className='flex items-center gap-1'>
                                <MdOutlineMailOutline />
                                iambabazada@gmail.com
                            </a>
                            <div className='flex justify-center gap-2'>
                                <a href="https://www.linkedin.com/in/iambabazada/" className='flex items-center gap-1'>
                                    <MdOutlineMailOutline />
                                    Linkedin
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 mb-2 '>
                        <div>
                            <div className=" flex justify-center">
                                <ul className='flex gap-6 max-[972px]:flex-col max-[972px]:text-center text-xl text-primary'>
                                    <li>
                                        <Link
                                            activeClass="navbar_active_menu"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            to={"hero_section"}
                                            className='navbar_menu_item'
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeClass="navbar_active_menu"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            to={"hero_section"}
                                            className='navbar_menu_item'
                                        >
                                            Portfolio
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeClass="navbar_active_menu"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            to={"hero_section"}
                                            className='navbar_menu_item'
                                        >
                                            About Me
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            activeClass="navbar_active_menu"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            to={"hero_section"}
                                            className='navbar_menu_item'
                                        >
                                            Testimonials
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='text-center mt-10 text-secondary'>
                                copyright  	&#169; Shahriyar Babazada.All Rights Reserved
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Contact