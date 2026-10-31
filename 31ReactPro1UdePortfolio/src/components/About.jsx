import React from 'react'
import aboutSvg from "../assets/about.svg";
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={aboutSvg} alt="" className='w-full h-64' />
                <article>
                    <SectionTitle text="code and coffee" />
                    <p className='text-slate-600 mt-8 leading-loose'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, eligendi. Eveniet, voluptate maiores obcaecati qui nesciunt unde quis consequatur? At in adipisci, fugit neque consequatur ipsum tenetur eos qui cum?
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About