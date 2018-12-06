import React,{ Component } from 'react';
import HeaderIcon from "../images/Shopping-icon.png";

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <img src={HeaderIcon} width="30" height="30" className="d-inline-block align-top" alt="" />
            MyShop
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Gadgets
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Phone</a>
                  <a className="dropdown-item" href="#">Tablets</a>
                  <a className="dropdown-item" href="#">Drones</a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Homes
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Dinning</a>
                  <a className="dropdown-item" href="#">homeDecor</a>
                  <a className="dropdown-item" href="#">Kettles</a>
                </div>
              </li>
              <li className="nav-item dropdown active">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Computers
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
                <button type="button" className="btn btn-light">
                  <i class="fa fa-search text-info" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-light">
                  <i class="fa fa-heart text-danger" aria-hidden="true"></i>
                </button>
              </li>
              <li className="nav-item">
                <div class="dropleft">
                  <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <form class="px-4 py-3">
                      <div class="form-group">
                        <label for="exampleDropdownFormEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                      </div>
                      <div class="form-group">
                        <label for="exampleDropdownFormPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                        <label class="form-check-label" for="dropdownCheck">
                          Remember me
                        </label>
                      </div>
                      <button type="submit" class="btn btn-primary">Sign in</button>
                    </form>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">New around here? Sign up</a>
                    <a class="dropdown-item" href="#">Forgot password?</a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-info">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;