import React, { Component } from 'react'
import IMG2 from '../images/echallenge.JPG'

export default class Project3 extends Component {

    componentDidMount() {
        document.title = "Vivien Geschwind | Gig economy app: unifi"
        window.scrollTo(0,0)
      }

    render() {
        return (
            <section id="unifi">
          <h2>A gig economy app: unifi</h2>
          <h4 class="uppercase margin-top-48">P r o j e c t &nbsp; o v e r v i e w</h4>
          <div class="float gap-10">
            <p class="project-description">unifi was created as part of the JIBS Entrepreneurship Challenge 2020.</p>

          <p class="project-role">
          <p><span class="purple uppercase bold font-size-14">R o l e</span><br/> Designer, Developer</p>
          <p><span class="purple uppercase bold font-size-14">T o o l s</span><br /> Figma, Android Studio</p>
          <p><span class="purple uppercase bold font-size-14">D u r a t i o n</span><br/> 30th March - 1st April 2020</p>
          </p>
          </div>

          {/* <br/><span class="font-size-14 normal">User Research, UI Design, Prototyping, Testing</span> */}

<div class="project-description">
          <h4 class="uppercase margin-top-32">B a c k g r o u n d</h4>

          <p>The JIBS Entrepreneurship Challenge is a student competition annually held by Jönköping International Business School to encourage entrepreneurship and creativity. Shortly before the event, the news of the coronavirus outbreak hit, which ultimately determined the objective of the challenge.</p>

            <p>» Building upon our current but incomplete knowledge, your task is to present a business idea based on the emerging entrepreneurial opportunities that can bring light in the shadow of Covid-19. «</p>
        
            <h4 class="uppercase margin-top-48">S o l u t i o n</h4>

            <h4 class="uppercase margin-top-48">P r o t o t y p e</h4>
 

        <h4 class="uppercase margin-top-48">R e s u l t s</h4>

        <p>We won the 1st place of the challenge, with the jury motivating their decision with the statement</p>


        <h4 class="purple uppercase font-size-12">» A n &nbsp; i m m e d i a t e &nbsp; a n d &nbsp; s i m p l e &nbsp; s o l u t i o n &nbsp; t o &nbsp; b r i n g &nbsp; r e l i e f, &nbsp; b y &nbsp; c o m b i n i n g &nbsp; c o m m u n i t y &nbsp; b u i l d i n g &nbsp; w i t h &nbsp; t h e &nbsp; p o w e r &nbsp; o f &nbsp; s o l i d a r i t y &nbsp; a n d &nbsp; t h e &nbsp; g i g &nbsp; e c o n o m y «</h4>

<p><a href="https://ju.se/en/collaboration/events-and-conferences/events/jibs-entrepreneurship-challenge/news-enrepreneurship-challenge/2021-03-01-innovation-race-to-find-solutions-for-covid-19.html">Read more about the challenge here.</a></p>

        <img src={IMG2} width="100%"></img>

        </div>
          </section>
        )
    }
}

