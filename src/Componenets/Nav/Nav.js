import React from 'react';
import logo from '../../images/icons/logo.png';
import search from '../../images/icons/search-icon.png';
import cart from '../../images/icons/cart.png';
function Nav() {
  return (
   


 <nav class="navbar navbar-expand-lg navbar-light fixed-top header-wrapper">
    <div class="container">
      <a class="logo-link navbar-brand js-scroll-trigger" href="#"><img src={logo}/></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav nav-fill w-100">
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="/mac/">Mac</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">iphone</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">ipad</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">watch</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">tv</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Music</a></li>
					<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Support</a></li>
					<li><a class="search-link nav-link js-scroll-trigger" href="/search/"><img src={search}/></a></li>
					<li><a  class="cart-link nav-link js-scroll-trigger" href="/cart/"><img src={cart}/></a></li>
        </ul>
      </div>
    </div>
  </nav>





  );
}

export default Nav;
