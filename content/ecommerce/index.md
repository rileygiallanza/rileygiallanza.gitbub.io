---
title: 
---


<!--TOGGLE MENU-->
<html>
<header>
  <a href="#main-menu"
     id="main-menu-toggle"
     class="menu-toggle"
     aria-label="Open main menu">
    <span class="sr-only">Open main menu</span>
    <span class="fa fa-bars" aria-hidden="true"></span>
  </a>
  
  <nav id="main-menu" class="main-menu" aria-label="Main menu">
    <a href="#main-menu-toggle"
       id="main-menu-close"
       class="menu-close"
       aria-label="Close main menu">
      <span class="sr-only">Close main menu</span>
      <span class="fa fa-close" aria-hidden="true"></span>
    </a>
    <ul>
      <li><a href="#Landscape">Landscapes</a></li>
      <li><a href="#Cityscape">Cityscapes</a></li>
      <li><a href="/ecommerce/product/cart">Cart</a></li>
    </ul>
  </nav>
</header>

<style>
/* Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}

/* Button styling */
.menu-toggle {
  display: inline-block;
  padding: .75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #333;
}

.menu-toggle:hover,
.menu-toggle:focus {
  color: #8c92ac;
}

/*
 Default styles
*/
.main-menu {
  position: absolute;
  display: none;
  left: -200px;
  top: 58px;
  height: 20%;
	transition: left 0.3s ease,
				      box-shadow 0.3s ease;
	z-index: 999;
}

.main-menu ul {
  list-style: none;
  margin: 0;
  padding: 3em 0 0;
  min-height: 20%;
  width: 200px;
  background: #00000000;
}

.main-menu a {
  display: block;
  color: #000;
 padding: 8px 0 8px 28px;
 text-decoration: none;
 }

.main-menu a:hover,
.main-menu a:focus {
  text-decoration: underline;
}

.main-menu .menu-close {
  position: absolute;
  right: 0;
  top: 0;
}

/*
 On small devices, allow it to toggle...
*/
/*
 :target for non-JavaScript
 [aria-expanded] will be used if/when JavaScript is added to improve interaction, though it's completely optional.
*/
.main-menu:target,
.main-menu[aria-expanded="true"] {
  display: block;
  left: 0;
  outline: none;
}

.main-menu:target .menu-close,
.main-menu[aria-expanded="true"] .menu-close {
  z-index: 1001;
}

.main-menu:target ul,
.main-menu[aria-expanded="true"] ul {
  position: relative;
  z-index: 1000;
}

/* 
 We could us `.main-menu:target:after`, but
 it wouldn't be clickable.
*/
.main-menu:target + .backdrop,
.main-menu[aria-expanded="true"] + .backdrop{
  position: absolute;
  display: block;  
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: #000;
  background: rgba(0,0,0,.85);
  cursor: default;
}

@supports (position: fixed) {
  .main-menu,
  .main-menu:target + .backdrop,
  .main-menu[aria-expanded="true"] + .backdrop{
    position: fixed;
  }
}
</style>
</html>


<!-- PRODUCT CARDS-->
<html>
<div class="main">
  <h1 style="font-size:50px;">PRINTS</h1>
  <h1 style="font-size:16px;">Available for Purchase!</h1>
  <ul class="cards">
    <p id="Landscape"></p>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg
"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
        <form method="get" action="/ecommerce/product">
          <button class="btn card_btn">Read More</button>
        </form>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
     <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg
"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
        <form method="get" action="/ecommerce/product">
          <button class="btn card_btn">Read More</button>
        </form>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    </p>
    <p id="Cityscape"></p>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
        <div class="card_image"><img src="/ecommerce/_index_files/DSC_0568 (1).jpg"></div>
        <div class="card_content">
          <h2 class="card_title">Card Grid Layout</h2>
          <button class="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
  </ul>
</div>

<style>
body{
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: left;
    align-items: left;
    background: #bfb5b2;
}
/* Design */
*,
*::before,
*::after {
  box-sizing: border-box;
}

.main{
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  background: transparent;
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 75%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
  }
}

.card {
  background-color: #00000000;
  border: 0;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
}

.card_title {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0px;
}
</style>
</html>
