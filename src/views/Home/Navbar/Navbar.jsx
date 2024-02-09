import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import styles from './Navbar.module.css'
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [navActive, setNavActive] = useState(false)

    const toogleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }


    return (
        <nav className={`${styles.navbar_section} py-5 px-3`}>
            <div className={`${styles.navbar_section_content} mx-auto `}>
                <div className={styles.navbar_section_content_brand}>
                    <h1 className='text-2xl font-bold'>
                        babazada.dev
                    </h1>
                </div>
                <div className={`${styles.navbar_section_content_menu} ${navActive ? styles.active : ""} ${navActive ? "animate__slideInUp animate__animated" : ""}`}>
                    <ul>
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
                {
                    !navActive ? (
                        <button className={styles.menu} onClick={toogleNav}>
                            <IoIosMenu />
                        </button>
                    ) : (
                        <button className={styles.menu} onClick={toogleNav}>
                            <IoClose />
                        </button>
                    )

                }
                <div className={styles.navbar_section_content_action}>
                    <Button variant={"outline"} size="md" rounded>
                        Contact me
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar