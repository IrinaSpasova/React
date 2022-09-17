import React from 'react'
import phoneImg from './images/phone.svg'
import {useGlobalContext} from './context'

const Hero = () => {
  // test: const data = useGlobalContext();
  // test: console.log(data);
  const {closeSubmenu} = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem tempore, similique sequi explicabo fugit nostrum nulla accusamus animi quibusdam?</p>
        <button className='btn'> Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt="phone-img" />
        </article>
      </div>
    </section>
  );
}

export default Hero
