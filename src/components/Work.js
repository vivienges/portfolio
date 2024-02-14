import React, { Component } from 'react'
import IMG1 from '../images/grey_background.jpg'
import IMG2 from '../images/spexor4.png'
import IMG3 from '../images/grey_background.jpg'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'

import PDF from "../Portfolio.pdf"


const portfolio = [
    // {
    //     id: 1,
    //     company: "Web and brand design",
    //     title: "Apartly",
    //     image: IMG1,
    //     url: "apartly-designwork"
    // },
    {
        id: 1,
        company: "Bachelor Thesis",
        title: "Designing a B2B app for Bosch startup spexor",
        image: IMG2,
        url: PDF
    }
    // {
    //     id: 2,
    //     company: "JIBS Entrepreneurship Challenge",
    //     title: "Gig economy app: unifi",
    //     image: IMG3,
    //     url: "unify-app"
    // }
]



export default class Work extends Component {

    componentDidMount(){
        document.title = "Vivien Geschwind | Portfolio"
        window.scrollTo(0,0)
      }
      
    render() {
        return (
            <section id='work' class='content'>
                <div id="work-intro">
                <h1 id='work-hello'>Hi, I'm <span class="">Vivien</span>!</h1>
                {/* <h3 id='work-statement'>I <span class="">design</span> digital <span class="">experiences</span> and help people make their <span class="">visions</span> visible to the world.</h3> */}
                <h3 id='work-statement'>I'm passionate about creating digital experiences and <span class="">making people's lives easier</span> through design <br/><span id="statement-underline">so they can spend more time on the things they enjoy.</span></h3>
                {/* <h3 id='work-statement'>A <span>happy</span> and open-minded <span class="yellow bold">designer</span> who likes creating digital <span class="purple bold">experiences</span> and helping people make their <span class="turqu bold">visions</span> visible to the world.</h3> */}
                {/* <h3 id='work-statement'>I'm a happy and open-minded designer in Stockholm who likes creating digital experiences and helping people make their visions visible to the world.</h3> */}
                <p id="work-subline" class="uppercase">B a s e d &nbsp; i n &nbsp; S t o c k h o l m &nbsp; a n d &nbsp; o p e n &nbsp; f o r &nbsp; h y b r i d &nbsp; a n d &nbsp; o n - s i t e &nbsp; o p p o r t u n i t i e s</p>
                </div>
                <Grid id="grid" container spacing={{xs: 4, md: 6}}>
                   
                    {
                    //    portfolio.map(({id, company, title, image, url}) => {
                   //         return (
                    
                //     <Grid item xs ={12} md={6} lg={4} key={id}>
                //                 {/* <Link class="project-link" to={url}> */}
                //                 <a href = {url} target = "_blank">
                //                 <article key = {id} className='project-item'>
                //         <img class="project-image" src={image} width="300px"></img>
                //         <div class="project-item-banner">
                //             <div class="project-item-text">
                //         <div class="company uppercase purple">{company}</div>
                //         <div class="title">{title}</div>
                //         </div>
                //         </div>
                //     </article>
                //     </a>
                //     {/* </Link> */}
                //   </Grid>
                       //     )
                        //    })
                        }
                </Grid>
                <div id='work-info'>
                <div id='coming-soon'class="uppercase">W o r k &nbsp; s a m p l e s &nbsp; w i l l &nbsp; b e &nbsp; p u b l i s h e d &nbsp; s h o r t l y </div>
                <h2 id="work-header" class="">About&nbsp;my&nbsp;work</h2>
                <div class="work-about">
                    <div id='introduction'>
                    <p>Good, thoughtful design is an essential ingredient for exceptional user experience. As a UI/UX Designer, I design digital interfaces that address user needs in a user-friendly manner. I strive for a human-centered approach, and I value authenticity and sincerity towards the user.</p>
                    <p>Whether you have your project already up and running or you need a whole concept from scratch for your idea, I am happy to support you at any stage of your project.</p>
                    <p>Want to work with me or say hi? <a class="contact" href="mailto:vivien-geschwind@live.de">Let’s have a coffee.</a> </p>
                    </div>
                    <div class='services services-margin'>
                        <h4 class="uppercase background">W h a t &nbsp; I &nbsp; d o</h4>
                        <ul>
                        <li>User Research</li>
                        <li>User Journey Mapping</li>
                        <li>Wireframing / Prototyping</li>
                        <li>Usability Testing</li>
                        </ul>
                    </div>
                    <div class='services'>
                        <h4 class="uppercase background">W h a t &nbsp; I &nbsp; w o r k &nbsp; w i t h</h4>
                        <ul>
                            <li>Figma / Zeplin</li>
                            <li>Adobe Creative Cloud</li>
                            <li>Miro / FigJam / Jira</li>
                            <li>Visual Studio Code / Git</li>
                            <li>Xcode / Swift</li>
                            <li>HTML / CSS / JS / React</li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>
            
        )
    }
}