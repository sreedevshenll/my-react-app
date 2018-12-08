import React ,{Component} from 'react';
import card from "../images/card.jpg";
class Products extends Component {
    render() {
        return (
            <div className="app-Products">
                <div class="row">
                  <div class="col-md-3">
                    <div className="card">
                        <img className="card-img-top" src={card}  alt="" />  
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
                </div>
            </div>
        )
    }
}
export default Products;