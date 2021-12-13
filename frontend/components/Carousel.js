import React, {Component} from 'react'


class Carousel extends Component {

    render(){
        return(
            <div className="row mt-3 ">
      <div id="carouselExampleCaptions" className="carousel slide col-sm-12 col-md-8 m-auto " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src="img/slider1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/slider2.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/slider3.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col-sm-12 col-lg-4 card shadow  p-3 mt-3 m-auto" >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus incidunt aperiam facilis, rerum suscipit
        deleniti labore nulla porro, quam qui saepe magni tempora recusandae accusantium autem minus et, officiis rem!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quas voluptas ducimus odio aliquam eaque quod
        incidunt saepe consectetur recusandae voluptatem odit id repellendus cumque, officia dolores! Necessitatibus, sunt
        corrupti?
      </div>
    </div>

        );
    }
}

export default Carousel;