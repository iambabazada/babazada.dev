import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

const Home = () => {
    return (
        <main className='pt-[85px]'>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </main>
    )
}

export default Home