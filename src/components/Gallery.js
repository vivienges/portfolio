import React, { Component } from 'react'
import IMG1 from '../images/000022.JPG'
import IMG2 from '../images/75684944-F66A-4F5E-AC65-B59D53EDF1BA.jpg'
import IMG3 from '../images/000017.JPG'
import IMG4 from '../images/000002.JPG'
import IMG5 from '../images/025_FULL_01_500.jpg'
import IMG6 from '../images/000035.jpg'

const photos = [
    { src: {IMG1}, width: 800, height: 600 },
    { src: {IMG2}, width: 1600, height: 900 },
    { src: {IMG3}, width: 800, height: 600 },
    { src: {IMG4}, width: 1600, height: 900 }
  ]
  

export default class Gallery extends Component {
    render() {
        return (
            <section>
          <h2>My life on film</h2>
          {/* <PhotoAlbum layout="rows" photos={photos} /> */}
          <div class="flex">
          <img src={IMG1} width="500px"></img>
          <img src={IMG2} width="500px"></img>
          <img src={IMG3} width="500px"></img>
          <img src={IMG4} width="500px"></img>
          <img src={IMG5} width="500px"></img>
          <img src={IMG6} width="500px"></img>
          </div>
          </section>
        )
    }
}