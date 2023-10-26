import React, { Component } from 'react'
import IMG1 from '../images/grey_background.jpg'
import IMG2 from '../images/grey_background.jpg'
import IMG3 from '../images/grey_background.jpg'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'


const portfolio = [
    {
        id: 1,
        company: "Web and brand design",
        title: "Apartly",
        image: IMG1,
        url: "apartly-designwork"
    },
    {
        id: 2,
        company: "Bachelor Thesis",
        title: "Designing a B2B app for Bosch startup spexor",
        image: IMG2,
        url: "bosch-spexor"
    },
    {
        id: 3,
        company: "JIBS Entrepreneurship Challenge",
        title: "Gig economy platform: unify",
        image: IMG3,
        url: "unify-app"
    }
]



export default class Work extends Component {

    componentDidMount(){
        document.title = "Vivien Geschwind | Portfolio"
      }
      
    render() {
        return (
            <section id='work' class='content'>
                <h1 id='work-hello'>Hi, I'm Vivien.</h1>
                {/* <h3 id='work-statement'>I like <span class="bold purple">designing</span> digital <span class="bold turquoise">experiences</span> and helping people make their <span class="bold yellow">visions</span> visible to the world.</h3> */}
                <h3 id='work-statement'>I'm a <span class="bold yellow">happy</span> and open-minded <span class="bold purple">designer</span> who likes creating digital <span class="bold turquoise">experiences</span> and helping people make their <span class="bold yellow">visions</span> visible to the world.</h3>
                {/* <h3 id='work-statement'>I'm a happy and open-minded designer in Stockholm who likes creating digital experiences and helping people make their visions visible to the world.</h3> */}
                <Grid container spacing={{xs: 4, md: 6}}>
                    {
                        portfolio.map(({id, company, title, image, url}) => {
                            return (
                    
                    <Grid item xs ={12} md={6} lg={4} key={id}>
                                {/* <Link class="project-link" to={url}> */}
                                <article key = {id} className='project-item'>
                        <img class="project-image" src={image} width="300px"></img>
                        <div class="project-item-banner">
                            <div class="project-item-text">
                        <div class="company uppercase purple">{company}</div>
                        <div class="title">{title}</div>
                        </div>
                        </div>
                    </article>
                    {/* </Link> */}
                  </Grid>
                            )
                            })
                        }
                </Grid>
                <div id='quote'>
                <div id='quote-phrase'>"People ignore design that ignores people."
                </div>
                <div id='quote-author'>Frank Chimero
                </div>
                </div>
                <div id='work-info'>
                <h2 id="work-header">About my work</h2>
                <div class="work-about">
                    <div id='introduction'>
                    <p>Good, thoughtful design is an essential ingredient for the success of every project. As a UI/UX Designer, I design websites and apps that address user needs in a user-friendly manner, with emerging technologies and trends in mind. Whether you have your project already up and running or you need a whole concept from scratch for your idea, I am happy to support you at any stage of your project.</p>
                    <p>Want to work with me or say hi? <a class="contact" href="mailto:vivien-geschwind@live.de">Let’s have a coffee.</a> </p>
                    </div>
                    <div class='services'>
                        <h4>What I do</h4>
                        <ul>
                        <li>Qualitative User Research</li>
                        <li>Concept</li>
                        <li>Wireframing / Prototyping</li>
                        <li>Usability Testing</li>
                        </ul>
                    </div>
                    <div class='services'>
                        <h4>What I work with</h4>
                        <ul>
                            <li>Figma / Zeplin</li>
                            <li>Adobe Creative Cloud</li>
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