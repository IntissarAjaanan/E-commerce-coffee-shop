class SHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <nav>
            <div class="it">
                <div class="store_logo">
                    <a href="index.html"><img src="./img/logo.png" alt="Brand Image"></a>
                </div>
                <ul class="links">
                    <li id="home"><a href="index.html">Home</a></li>
                    <li id="about"><a href="about.html">About</a></li>
                    <li id="menu"><a href="menu.html">Menu</a></li>
                    <li id="contact"><a href="contact.html">Contact Us</a></li>
                    <li id="panier"><a href="shop.html"><i class="fas fa-shopping-cart"><span id='p'>0</span></i></a></li>
                    <li id="connexion"><a href="login.html"><i class="fas fa-user"></i></a></li>
                </ul>
                <div class="sumlink">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="dmenu">
                    <ul>
                        <li id="home"><a href="index.html">Home</a></li>
                        <li id="about"><a href="about.html">About</a></li>
                        <li id="menu"><a href="menu.html">Menu</a></li>
                        <li id="contact"><a href="contact.html">Contact Us</a></li>
                        <li id="panier"><a href="shop.html">Shopping Cart</a></li>
                        <li id="connexion"><a href="login.html">Connexion</a></li>
                    </ul>
                </div>
            </div>
            <div class="l">
                <p class="solg"><span>COFFEE</span><br> IS ALWAYS A GOOD IDEA</p>
                <img src="./img/lines.png" alt="lines">
                <a href="menu.html"><input type="button" value="Shop Now"></a>
            </div>
            
        </nav>  `
    }
   
}
customElements.define('s-header',SHeader)


        const navstyle = document.createElement('style');


        navstyle.textContent = `
        nav{
            background-image: url(./img/navbg.jpg); 
             background-repeat: no-repeat;
             background-size: cover;
             background-position: center;
             width: 100%;
             height: 650px;
             position: relative;
         }
         
         nav ul #panier a i{
             position: relative;
         }
         nav ul #panier a i span{
             position: absolute;
             bottom: 60%;
             border: 1px solid white;
             width: 23px;
             height: 23px;
             border-radius: 50%;
             background-color: #fff;
             font-size: 15px;
             font-weight: bold;
             color: black;
             text-align: center;
             padding-top:4px;
         }
         nav .l{
             display: flex;
             flex-direction: column;
             align-items: center;
             text-align: center;
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%,-50%);
             color: white;
             font-size: 30px;
         }
         
         nav .l .solg{
             margin-bottom: 0px;
         }
         nav .solg span{
             font-size: 120px;
         }
         nav .l input{
             width: 130px;
             height: 40px;
             border-radius: 15px;
             background-color: rgb(181, 181, 181);
             font-weight: bold;
             border: 1px solid rgb(181, 181, 181);
             cursor: pointer;
         }
         nav .l input:hover{
             background-color: rgb(104, 103, 103);
             border-color: rgb(104, 103, 103);
         }
         nav .l img{
             width: 220px;
             height: 100px;
         }
         
         nav .it{
             display: flex;
             justify-content:space-between ;
             align-items: center;
             background-color: rgba(0, 0, 0, 0.731);
             padding: 10px;
             height: 150px;
         }
         
         .store_logo img{
             width: 150px;
             height: 150px;
         }
         
         nav ul{
             display: flex;
             justify-content: space-between;
             align-items: center;
             list-style: none;
         }
         
         nav ul li{
             padding-right: 50px;
         }
         nav ul li a:hover{
             text-decoration: underline;
         }
         nav ul li a{
             text-decoration:none;
             color: white;
             font-size: 22px;
         }
         
         #panier i:hover,#connexion i:hover{
             color: gray;
         }
         
         .dmenu{
             display: none;
             position: absolute;
             right: 3rem;
             top: 110px;
             width: 300px;
             height: 0px;
             background-color: rgba(255, 255, 255, 0.475);
             backdrop-filter: blur(15px);
             border-radius: 10px;
             overflow: hidden;
             transition: height .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
         }
         .dmenu.open{
             height: fit-content;
             z-index: 1;
         }
         .dmenu ul{
             display: block;
             padding: 0;
         }
         .dmenu ul li{
             padding: 0.7rem;
             display: flex;
             align-items: center;
             justify-content: center;
             margin-bottom: 5px;
         
         }
         .dmenu ul li a{
             font-size: 1.5rem;
             color: black;
         }
         
         .dmenu ul li a{
             display: flex;
             justify-content: center;
             align-items: center;
         }
         
         .sumlink{
             display: none;
             cursor:pointer;
             margin-right: 30px;
         }
         
         .sumlink span{
             display: block;
             width: 40px;
             height: 5px;
             margin-bottom: 3px;
             background-color: white;
             
         }
         
         
         @media (max-width:1200px) {
             .links{
                 display: none !important;
             }
             .dmenu{
                 display: block !important;
             }
             .sumlink{
                 display:block !important;
             }
         }
         @media (max-width:500px) {
             nav{
                 margin-top: 0px !important;
                 height: 300px;
             }
             .it{
                 height: 60px !important;
             }
             .store_logo img{
                 width: 100px;
                 height: 100px;
             }
             nav .solg {
                 font-size: 20px !important;
                 margin-bottom: 0px;
             }
             nav .solg span{
                 font-size: 60px !important;
             }
             nav .l img{
                 width: 130px;
                 height: 55px;
             }
             .dmenu{
                 top: 50px !important;
             }
             .dmenu.open{
                 width: 200px !important;
                 z-index: 1 !important;
             }
             .dmenu ul li a{
                 font-size: 1rem !important;
             }
             .it .store_logo img{
                 width: 90px !important;
                 height: 90px !important;
             }
             .it .sumlink span{
                 width: 30px !important;
                 height: 4px !important;
                 margin-bottom: 2px !important;
             }
         }
        `;

        document.head.appendChild(navstyle);
