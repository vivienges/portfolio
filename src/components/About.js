import React, { Component } from 'react'
import Portrait from '../images/Viv4.jpg'
import Gallery from './Gallery'

export default class About extends Component {

    componentDidMount(){
        document.title = "Vivien Geschwind | About"
      }

    render() {
        return (
            <section id="about" class='content'>
                <div class='about-item' id="about-text">
                <h1 id='about-title'>Who I am</h1> 
                {/* <p>I’m a sun-seeker, roamer and coffee enthusiast. Okay, let’s get serious now. </p> */}
                {/* <h3 id='about-statement'>I design digital experiences and help people make their visions visible to the world.</h3> */}
                <p>I’m a UI and UX designer based in Stockholm where I’m currently doing a master’s degree in User Experience and Interactive Media Design at Södertörn University. 
</p> 
{/* that even though we're all just small, seemingly insignificant individuals in this world, */}
<p>In my professional career so far, I have mostly been involved in the startup environment. I like the spirit of people who put their whole heart into a cause because they believe they can change the world. And I’m thrilled if I can help with that. However, I'm open to different kinds of projects and I'm happy to evolve. </p>
<p>In my design work, I strive for a human-centered approach and I value authenticity and sincerity towards the user. </p>


                <h4 class="about-margin">Why I do what I do</h4>
                <p>Having a background in web and app development, I used to be on the tech side despite my creative streak. Over the last few years, my curiosity about human psychology has grown and I've been trying to understand why people act the way they do ever since. UX allows me to dive in deeper into people's minds and combine this with my technical and creative skills to design digital interfaces with thought. Innovation can bring great change in the world and I hope to contribute to that. Even if only a little bit. </p>
                <h4 class="about-margin">What I also do</h4>
                <p>I like walking in the sun and along the water, drinking coffee, riding boards on snow or asphalt, discovering new music, shooting analogue, having deep conversations, going to live gigs, watching sunsets and celebrating life, with friends or alone. Sometimes I do several of these things at once.</p>
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