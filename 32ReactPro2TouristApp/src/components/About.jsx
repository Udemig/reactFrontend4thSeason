import React from 'react'
import Title from './Title'
import aboutImg from "../assets/about.jpeg";

const About = () => {
    return (
        <section className='section' id='about'>
            <Title title="about" subTitle="us" />

            <div className='section-center about-center'>
                <div className='about-img'>
                    <img src={aboutImg} alt="" className='about-photo' />
                </div>
                <article className='about-info'>
                    <h3>Explore the difference</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis maiores quia culpa amet, iusto suscipit doloremque cumque accusamus excepturi corporis quo doloribus commodi eligendi provident nihil. Aliquid, ex ducimus.
                    </p>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis maiores quia culpa amet, iusto suscipit doloremque cumque accusamus excepturi corporis quo doloribus commodi eligendi provident nihil. Aliquid, ex ducimus.
                    </p>
                    <a href="" className='btn'>More</a>
                </article>
            </div>
        </section>
    )
}

export default About