import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import heroImg from "../assets/hero.svg";

const Hero = () => {
    return (
        <section className='bg-emerald-100 py-24'>
            <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">

                <article>
                    <h1 className='text-7xl font-bold tracking-wider'> I am Mehmet Can Seyhan</h1>
                    <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>I"am a fullstack developer</p>
                    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                        Turn your ideas into reality
                    </p>
                    <div className='flex gap-x-4'>
                        <a href="#">
                            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                        <a href="#">
                            <FaLinkedin className='h-8 w-8 text-state-500 hover:text-black duration-300' />
                        </a>
                        <a href="#">
                            <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                        </a>
                    </div>

                </article>

                <article className='md:block'>
                    <img src={heroImg} alt="" />
                </article>
            </div>
        </section>
    )
}

export default Hero