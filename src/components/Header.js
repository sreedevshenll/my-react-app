import React,{ Component } from 'react';
import HeaderIcon from "../images/Shopping-icon.png";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">  
          <img src={HeaderIcon} width="30" height="30" alt="" />  
           <a class="navbar-brand" href="#">
              MyShop
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-car" aria-hidden="true"></i> Vehicles
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Car</a>
                  <a className="dropdown-item" href="#">Bus</a>
                  <a className="dropdown-item" href="#">Bike</a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-home" aria-hidden="true"></i> Homes
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Dinning</a>
                  <a className="dropdown-item" href="#">homeDecor</a>
                  <a className="dropdown-item" href="#">Kettles</a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-television" aria-hidden="true"></i> Computers
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Laptops</a>
                  <a className="dropdown-item" href="#">printers</a>
                  <a className="dropdown-item" href="#">Scanners</a>
                </div>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-search text-info" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-bell text-success" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-heart text-danger" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  <i class="fa fa-shopping-cart text-warning" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link text-link" href="#">
                  <i class="fa fa-user" aria-hidden="true"></i> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;