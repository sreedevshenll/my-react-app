import React ,{Component} from 'react';
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";

class Imagegallery extends Component {
  render() {
    return (
      <div className="app-imagegallery">
        <div className="owl-carousel owl-theme">
          <div className="carousel-item active">
           <img class="d-block w-100" src={image1} width="30" height="30"  alt="" />
          </div>
          <div className="carousel-item">
            <img class="d-block w-100" src={image2} width="30" height="30"  alt="" />
          </div>
          <div className="carousel-item">
            <img class="d-block w-100" src={image3} width="30" height="30"  alt="" />
          </div>
        </div>
      </div>
    )
  }

}
export default Imagegallery;