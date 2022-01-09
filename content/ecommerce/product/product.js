---
  title: 
  ---
  
  <!-- PRODUCT DETAILS-->
  <html>
  <div class="wrapper">
    
    <div class="col-1-2">
      <div class="product-wrap">
        <div class="product-shot">
          <img src="/ecommerce/_index_files/DSC_0568 (1).jpg" alt="" />
            </div>
            </div>
            </div>
            
            <div class="col-1-2">
              <div class="product-info">
                <h3>Boston Harbor</h3>
                
                
                <h7> Select Size </h7>   
                <div class="select">
                  <select id="Size">
                    <option value="1">8x10</option>
                      <option value="2">11x14</option>
                        <option value="3">16x20</option>
                          <option value="4">20x24</option>
                            </select>
                            </div>
                            
                            <h7> Select Finish </h7>
                            <div class="select">
                              <select id="Type">
                                <option value="1">Glossy</option>
                                  <option value="2">Matte</option>
                                    <option value="3">Metal</option>
                                      <option value="4"> Canvas</option>
                                        </select>
                                        </div>
                                        </div>
                                        <form method="get" action="/ecommerce/product/cart">
                                          <button class="button">Add to Cart</button>
                                            </form>
                                            </div>
                                            </div>
                                            </div>
                                            
                                            <style>
                                            *,
                                          *::before,
                                          *::after {
                                            box-sizing: border-box;
                                          }
                                          select {
                                            // A reset of styles, including removing the default dropdown arrow
                                            appearance: none;
                                            // Additional resets for further consistency
                                            background-color: transparent;
                                            border: none;
                                            font-family: inherit;
                                            font-size: inherit;
                                            cursor: inherit;
                                            line-height: inherit;
                                            background-color: transparent;
                                            border: none;
                                            background-position: right 10px center;
                                            background-repeat: no-repeat;
                                            background-size: auto 50%;
                                            padding: 5px 30px 10px 30px;
                                            outline: none;
                                          }
                                          select::-ms-expand {
                                            display: none;
                                          }
                                          select {
                                            // ...existing styles
                                            outline: none;
                                          }
                                          
                                          :root {
                                            --select-border: #777;
                                              --select-focus: blue;
                                            --select-arrow: var(--select-border);
                                          }
                                          
                                          .select {
                                            min-width: 10ch;
                                          }
                                          .select::after {
                                            content: "";
                                            width: 0.8em;
                                            height: 0.5em;
                                            clip-path: polygon(100% 0%, 0 0%, 50% 100%);
                                          }
                                          .select {
                                            // ...existing styles
                                            display: grid;
                                          }
                                          .select {
                                            // ...existing styles
                                            grid-template-areas: "select";
                                          }
                                          select,
                                          .select:after {
                                            grid-area: select;
                                          }
                                          .select {
                                            // ...existing styles
                                            align-items: center;
                                          }
                                          .select:after {
                                            // ...existing styles
                                            justify-self: end;
                                          }
                                          
                                          img{ max-width: 100%; }
                                          
                                          .wrapper{
                                            width: 960px;
                                            margin: 100px auto;
                                          }
                                          
                                          .col-1-2{
                                            float: left;
                                            width: 50%;
                                          }
                                          
                                          .product-wrap{
                                            margin: 0 auto;
                                            width: 350px;
                                            
                                            
                                            .product-shot{
                                              padding-top: 30px;
                                              transition: all 0.5s ease;
                                              &:hover{ transform: scale(1.1); }
                                            }
                                          }
                                          
                                          .product-info{
                                            h2{
                                              padding-bottom: 15px;
                                              font-size: 32px; 
                                              border-bottom: 1px solid #d9d9d9;
                                            }
                                            
                                            .sizing-list{
                                              margin-top: 25px;
                                              padding: 10px;
                                              list-style-type: none; 
                                            }
                                            
                                            .size{ 
                                              display: inline;
                                              margin-right: 10px;
                                              padding: 10px 15px; 
                                              color: rgb(194, 194, 194);
                                              border: 1px solid rgb(194, 194, 194);
                                              cursor: pointer;
                                              &.active{
                                                color: white;
                                                background-color: rgb(194, 194, 194);
                                              }
                                            }
                                            
                                          }
                                          .button{
                                            display: inline-block;
                                            margin-top: 35px;
                                            padding: 12px 25px;
                                            font-size: 16px;
                                            text-decoration: none;
                                            background-color: #505050;
                                              color: white;
                                            transition: 0.25s ease;
                                          }
                                          
                                          .button:hover{
                                            background-color: #323232;
                                          }
                                          body {
                                            color: #000000;
                                              font-family: Sans-Serif;
                                            padding: 30px;
                                            background-color: #f6f6f6;
                                          }
                                          
                                          a {
                                            text-decoration: none;
                                            color: #000000;
                                          }
                                          
                                          a:hover {
                                            color: #222222
                                          }
                                          </style>
                                            </html>