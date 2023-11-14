import React, { Component } from 'react'
import Portrait from '../images/Viv4.jpg'
import Gallery from './Gallery'

export default class About extends Component {

    componentDidMount(){
        document.title = "Vivien Geschwind | About"
        window.scrollTo(0,0)
      }

    

      

    render() {
        return (
            <section id="about" class='content'>
                <div class='about-item' id="about-text">
                <h1 id='about-title'>Who I am</h1> 
                {/* <p>I’m a sun-seeker, roamer and coffee enthusiast. Okay, let’s get serious now. </p> */}
                {/* <h3 id='about-statement'>I design digital experiences and help people make their visions visible to the world.</h3> */}
                <p>Hi, my name is Vivien and I’m a UI/UX designer based in Stockholm. I’m currently doing a master’s degree in User Experience and Interactive Media Design at Södertörn University. 
</p> 
{/* that even though we're all just small, seemingly insignificant individuals in this world, */}
<p>In my previous work, I have mostly been involved in the startup environment. I like the spirit of people who put their whole heart into a cause because they truly believe in it. Innovation can bring great change and I’m thrilled if I can contribute to that. Even if only a little bit.  </p>
{/* However, I'm open to different kinds of projects and I'm happy to evolve. */}
{/* <p>In my design work, I strive for a human-centered approach and I value authenticity and sincerity towards the user. </p> */}


                <h4 class="about-margin uppercase background">W h y &nbsp; I &nbsp; d o &nbsp; w h a t &nbsp; I &nbsp; d o</h4>
                <p>With a background in web and app development, I used to be more on the tech side despite my creative streak. Over the last few years, my curiosity about human psychology has grown and I've been trying to understand why people act the way they do ever since. I love to explore, in both private and professional contexts, how experiences and habits significantly shape our behaviour. UX allows me to dive in deeper into people's minds and to combine this with my technical and creative skills to design digital interfaces that are thoughtful and truly benefit people. </p>
                <h4 class="about-margin uppercase background">W h a t &nbsp; I &nbsp; a l s o &nbsp; d o</h4>
                {/* <div class="yellow-background"></div> */}
                <p>I like going for walks in the sun and along the water, drinking coffee, riding boards on snow or asphalt, discovering new music, shooting analogue, learning my favorite songs on guitar, having wholesome conversations, going to live gigs, watching sunsets and celebrating life, with friends or alone. Sometimes I do several of these things at once.</p>
                {/* <p>In my spare time you can usually find me somewhere in the sun or on a board in the mountains or on the asphalt.</p> */}
                {/* <h4>What's on my ears</h4>
                <p>Music is a means for me to underline my life and intensify moments. So the right soundtrack during my design work should not be missing either. Especially melodic techno, deep house and downtempo get me into the flow. Check out my playlists <a href="https://open.spotify.com/user/vivienges?si=936f9754d9bb41b6">here</a>.</p> */}
                </div>
                <div class='about-item' id='about-image'>
                    <img src={Portrait} alt='portrait' width='500' id='portrait'></img>
                </div>
                {/* <div>
                <Gallery></Gallery></div> */}
            </section>
        )
    }
}