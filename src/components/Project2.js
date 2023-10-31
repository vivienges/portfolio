import React, { Component } from 'react'
import IMG2 from '../images/spexor4.png'

export default class Project2 extends Component {
    render() {
        return (
            <section id="spexor">
              <img src={IMG2} class="project-img"></img>
          <h2>Designing a B2B app for Bosch startup spexor</h2>
          <p class="nda uppercase">T h e &nbsp; p r o j e c t &nbsp; c o n t e n t &nbsp; c a n n o t &nbsp; b e &nbsp; p u b l i s h e d &nbsp; h e r e &nbsp; d u e &nbsp; t o &nbsp; N D A</p>

          <h4 class="uppercase">P r o j e c t &nbsp; o v e r v i e w</h4>
          <div class="float">
          <p>This project was developed as part of my bachelor's thesis in cooperation with the startup spexor. spexor was a mobile and versatile product of the Bosch brand that uses smart sensor technology to warn of various (everyday) dangers, such as burglaries or indoor air pollution. It comprised an IoT device and a smartphone app that could be used to manage the device remotely.<br/><br/>The goal of this project was to identify B2B customers' pain points with the spexor app in order to design a new interface for use in the B2B context. </p>

      

<p>
          <div>Role:<br/> Designer &amp; Developer</div>
          <div>Tools:<br /> Sketch, Xcode</div>
          <div>Duration:<br/> January - April 2022</div>
          </p>
          </div>

         

          <h4 class="uppercase">B a c k g r o u n d</h4>

          <p>spexor was a startup within the Bosch Corporation, which is known as a global player for household appliances and mobility. I joined spexor as application development intern in late summer 2020 and supported them as a working student until I finished my bachelor studies in summer 2022. <br/><br/>spexor was part of Bosch's smart home assortment and was designed for the B2C market. However, it has also been used internally at Bosch in a B2B context. While a private customer usually uses one or two spexor devices, a business customer would have a large number of spexor devices, affecting the usability of the spexor app. Therefore, I researched how the spexor app could be redesigned to suit the needs of B2B customers.  </p>

        
        
        <h4 class="uppercase">P r o c e s s</h4>
        <p>The project was carried out in four phases: </p>
        <ul class="project-list">
        <li>Empathise: Here I conducted user interviews.</li>
        <li>Define: After gathering user insights, I analysed the results of the user interviews and translated them into requirements. I categorised them into larger epics and prioritised the requirements according to their severity. </li>
        <li>Prototype: Based on the most severe requirements, I did some sketching and designed high-fidelity wireframes. Finally, I implemented an interactive iPad prototype using Xcode Storyboards. </li>
        <li>Test: Here I tested the prototype with users to receive feedback and refine the requirements for a next notional iteration.</li>
        </ul>

        <h4 class="uppercase">L e a r n i n g s</h4>
        <p>spexor was my first experience working with a real-world product. Joining spexor shortly after its market release, I was able to gain valuable insights into the product development process of an IoT product and agile workflows from an early stage. </p>
        

        <p>
        <h4 class="purple uppercase">» T r u s t &nbsp; w h a t &nbsp; y o u r &nbsp; u s e r s &nbsp; d o, &nbsp; n o t &nbsp; w h a t &nbsp; t h e y &nbsp; s a y «</h4>
        {/* <div id="quote-author" class="uppercase">S t e v e &nbsp; J o b s</div> */}
        </p>
        <p>This is something I have also found during my user research. During the evaluation phase, one user commented on a feature of the user interface as not necessary, which was requested by the same user during the interviews. On the one hand, I understood that asking the right questions and precise phrasing is everything when conducting interviews. On the other hand, observing the user ... </p>


        
          </section>
        )
    }
}

