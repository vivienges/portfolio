import React, { Component } from 'react'
import IMG2 from '../images/spexor4.png'

export default class Project2 extends Component {


  componentDidMount() {
    document.title = "Vivien Geschwind | Designing a B2B app for Bosch startup spexor"
    window.scrollTo(0,0)
  }

    render() {
        return (
            <section id="spexor">
              <img src={IMG2} class="project-img"></img>
          <h2>Designing a B2B app for Bosch startup spexor</h2>
          <p class="nda darkgrey uppercase">T h e &nbsp; p r o j e c t &nbsp; c o n t e n t &nbsp; i s &nbsp; l i m i t e d &nbsp; a n d &nbsp; r e s u l t s &nbsp; c a n n o t &nbsp; b e &nbsp; p u b l i s h e d &nbsp; h e r e &nbsp; d u e &nbsp; t o &nbsp; N D A</p>

          <h4 class="uppercase margin-top-48">P r o j e c t &nbsp; o v e r v i e w</h4>
          <div class="float gap-10">
            <p class="project-description">This project was developed as part of my bachelor's thesis in cooperation with the startup spexor. spexor was a mobile and versatile product of the Bosch brand that uses smart sensor technology to warn of various (everyday) dangers, such as burglaries or indoor air pollution. It comprised an IoT device and a smartphone app that could be used to manage the device remotely.<br/><br/>The goal of this project was to identify business customers' pain points with the spexor app in order to design a new interface for use in the B2B context. </p>

          <p class="project-role">
          <p><span class="purple uppercase bold font-size-14">R o l e</span><br/> Designer, Developer</p>
          <p><span class="purple uppercase bold font-size-14">T o o l s</span><br /> Sketch, Xcode</p>
          <p><span class="purple uppercase bold font-size-14">D u r a t i o n</span><br/> January - April 2022</p>
          </p>
          </div>

          {/* <br/><span class="font-size-14 normal">User Research, UI Design, Prototyping, Testing</span> */}

<div class="project-description">
          <h4 class="uppercase margin-top-32">B a c k g r o u n d</h4>

          <p>spexor was a startup within the Bosch Corporation, which is known as a global player for household appliances and mobility. I joined spexor as application development intern in late summer 2020 and supported them as a working student until I completed my bachelor's degree in summer 2022. <br/><br/>spexor was part of Bosch's smart home assortment and was designed for the B2C market. However, it has also been used internally at Bosch in a B2B context. While a private customer typically uses one or two spexor devices, a business customer is more likely to have a large number of spexor devices in use, affecting the usability of the spexor app. Therefore, I researched how the spexor app could be redesigned to suit the needs of business customers.  </p>

        
        
        <h4 class="uppercase margin-top-48">P r o c e s s</h4>
        <p>The project was carried out in four phases: </p>
        <ul class="project-list">
        <li class="float"><div class="purple uppercase bold font-size-14 padding-right-48 width-30">E m p a t h i s e</div> <div class="width-70">Here I conducted semi-structured user interviews to learn more about the pain points users faced when using spexor in a B2B context.</div></li>
        <li class="float"><div class="purple uppercase bold font-size-14 padding-right-48 width-30">D e f i n e</div>  <div class="width-70">After gathering user insights, I analysed the results of the interviews and translated them into requirements. I categorised the requirements into larger epics and prioritised them according to their severity.</div> </li>
        <li class="float"><div class="purple uppercase bold font-size-14 padding-right-48 width-30">P r o t o t y p e</div>  <div class="width-70">Based on the most severe requirements, I did some sketching and designed high-fidelity wireframes. Finally, I implemented an interactive iPad prototype using Xcode Storyboards.</div> </li>
        <li class="float"><div class="purple uppercase bold font-size-14 padding-right-48 width-30">T e s t</div>  <div class="width-70">Here I tested the prototype with users using a think-aloud approach to receive feedback and refine the requirements for a next notional iteration.</div></li>
        </ul>

        <h4 class="uppercase margin-top-48">L e a r n i n g s</h4>
        <p>spexor was my first experience working with a real-world product. Joining spexor shortly after its market release, I was able to gain valuable insights into agile workflows and the product development process of an IoT product from an early stage. During this project, I learned above all how to define precise requirements for a software product based on user insights and how to prioritise these appropriately for design iteration. </p>
        

        <p>
        <h4 class="purple uppercase font-size-12">» T r u s t &nbsp; w h a t &nbsp; y o u r &nbsp; u s e r s &nbsp; d o, &nbsp; n o t &nbsp; w h a t &nbsp; t h e y &nbsp; s a y «</h4>
        {/* <div id="quote-author" class="uppercase">S t e v e &nbsp; J o b s</div> */}
        </p>
        <p>This is something I have also found during my user research. During the testing, a user commented on a feature of the user interface as not necessary, which was requested by the same user during the interviews. On the one hand, I understood that asking the right questions and precise phrasing is everything when conducting interviews. On the other hand, observing users using a service or product, rather than asking for their opinion, can often provide more meaningful insights.</p>
        </div>
        
        
          </section>
        )
    }
}

