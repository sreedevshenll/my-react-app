import React ,{Component} from 'react';
import card5 from "../images/card5.jpeg";
import card3 from "../images/card3.jpeg";
import card4 from "../images/card4.jpeg";
class Products extends Component {
    render() {
        return (
            <div className="app-Products">
                <div class="row">
                  <div class="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={card5}  alt="" />  
                        <div className="card-body">
                            <h5 className="card-title text-center"> Example Products </h5>
                            <h5 className="card-sub-titletitle text-center">
                                <span> &#8377; </span>
                                <span> 499 </span>
                            </h5>    
                            <a href="#" class="btn btn-success btn-block"> 
                                View details <i className="fa fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={card3}  alt="" />  
                        <div className="card-body">
                            <h5 className="card-title text-center"> Family-shopping </h5>
                            <h5 className="card-sub-titletitle text-center">
                                <span> &#8377; </span>
                                <span> 799 </span>
                            </h5>    
                            <a href="#" class="btn btn-success btn-block"> 
                                sofunny <i className="fa fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div className="card">
                        <img className="card-img-top" src={card4}  alt="" />  
                        <div className="card-body">
                            <h5 className="card-title text-center"> Family-shopping </h5>
                            <h5 className="card-sub-titletitle text-center">
                                <span> &#8377; </span>
                                <span> 999 </span>
                            </h5>    
                            <a href="#" class="btn btn-success btn-block"> 
                                shop <i className="fa fa-arrow-circle-right"></i>
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
export default Products;