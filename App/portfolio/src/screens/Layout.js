import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSpring, useTrail, useSprings, useChain, useTransition, animated } from 'react-spring';
import Background3D from '../components/Background3D';
import Home from './Home'

const Layout = () => {
    const props = useSpring({
        from: {
            scale: 0,
            translateX: -10,
            translateY: 0,
            opacity: -10,
            skewX: 0,
        },
        to: {
            scale: 1,
            translateX: 0,
            translateY: 0,
            opacity: 1,
            skewX: 0,
        },
        delay: 10,
        config: {
            precision: 500,
            bounce: 10,
            tension: 20,
            damping: 100,
        },
    })

    return (
        <>
            <animated.div style={props} id='foreground' className='flex flex-col justify-start m-2 md:mx-10 lg:mx-32 w-fit transition-all duration-700 ease-in-out p-1 rounded'>
                <nav class="z-50">
                    <section class='w-full flex justify-between'>
                        <div className='p-3 rounded'>
                            <h1 class='w-1/2 text-6xl font-medium transition-all duration-100 ease-in-out' >Sean|Fay</h1>
                            <ul>
                                <li class='text-xs md:text-sm transition-all duration-100 ease-in-out'>multi-diciplinary/</li>
                                <li class='text-xs md:text-sm transition-all duration-200 ease-in-out'>UI/UX designer/</li>
                                <li class='text-xs md:text-sm transition-all duration-300 ease-in-out'>web developer/</li>
                            </ul>
                        </div>
                        <span className=''>
                            <animated.img style={props} src='https://smfay.github.io/portfolio/images/logo.svg' alt="logo" className='h-20 md:h-32 transition-all duration-500 ease-in-out p-3 rounded' />
                        </span>
                    </section>
                </nav>
                <Home className='z-50' />
                <div class="fixed -z-50 left-0 top-0 flex w-screen h-screen fixed overflow-hidden">
                    <Background3D />
                </div>
            </animated.div>
        </>
    )
}

export default Layout