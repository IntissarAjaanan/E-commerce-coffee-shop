class SFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <footer>
            <div class="flogo">
                <img src="./img/logo.png" alt="">
                <p>At The Coffeine World, we believe that coffee is
                more than just a beverage - it is a way of life. Our mission 
                is to bring you the finest coffee from around the globe, right to 
                your doorstep.</p>
            </div>

            <div class="aboutus">
                <h4>About</h4>
                <div>
                    <li><a href="menu.html">Our Menu</a></li>
                    <li><a href="about.html#story">Our Story</a></li>
                    <li><a href="about.html#coffee">Our Coffee</a></li>
                </div>
            </div>

            <div class="contactus">
                <h4>Contact Us</h4>
                <div>
                    <p><i class="fas fa-map-marker-alt" style="color:grey"></i> 1023 Coffee street Caffeine World</p>
                    <p><i class="fas fa-phone-alt" style="color:grey"></i> +212 00 11 55 88 00</p>
                    <p><i class="far fa-envelope" style="color:grey"></i> Caffeine_World@gmail.com</p>
                    <div>
                        <i class="fab fa-facebook-f" style="font-size: 24px;margin-right: 15px;"></i>
                        <i class="fab fa-instagram" style="font-size: 24px;margin-right: 15px;"></i>
                        <i class="fab fa-whatsapp" style="font-size: 24px;margin-right: 15px;"></i>
                        <i class="fab fa-youtube" style="font-size: 24px;margin-right: 15px;"></i>
                        <i class="fab fa-twitter" style="font-size: 24px;margin-right: 15px;"></i>
                    </div>
                </div>
            </div>
            <div class="top">
                <a href="#"><i class="fas fa-angle-double-up"></i></a>
            </div>
        </footer>
        `
    }
   
}
customElements.define('s-footer',SFooter)


        const footstyle = document.createElement('style');

        footstyle.textContent = `
        html{
            scroll-behavior: smooth;
        }
        footer{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            padding: 15px 30px 15px 30px;
            background-color: black;
            color: white;
        }
        
        .flogo{
            width: 30%;
        }
        
        .flogo img{
            width: 150px;
            height: 150px;
        }
        
        .flogo p{
            text-align: justify;
            font-size: 25px;
        }
        .aboutus{
            margin-top:20px;
            text-align: center;
        }
        .aboutus li a{
            text-decoration: none;
            color: white;
            font-size: 20px;
        }
        
        .aboutus li{
            list-style: none;
            margin-bottom: 10px;
        }
        
        footer h4{
            font-size: 30px;
        }
        
        .contactus{
            margin-top:20px;
            text-align:center;
        }
        .contactus div p{
            font-size: 20px;
            margin-bottom: 10px;
        }
        .contactus div div{
            text-align: center;
        }
        .contactus div div i{
            cursor: pointer;
        }
        
        footer .top{
            border-radius: 50%;
            width: 50px;
            height: 50px;
            background-color: white;
            position: fixed;
            left: 95%;
            top: 90%;
        }
        footer .top a{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        
        footer .top a i{
            color: black;
        }


        
        @media (max-width:1100px) {
            footer{
                flex-direction: column !important;
            }
            
            .aboutus{
                text-align: center !important;
                width: 100% !important;
            }
        
            .flogo{
                text-align: center !important;
                width: 100% !important;
            }
        
            .contactus{
                text-align: center !important;
                width: 100% !important;
            }
        }
        @media (max-width:990px) {
                footer .top{
                    left: 90%;
                    top:86%;
                }
        }
        @media (max-width:500px) {
                footer .top{
                    left: 80%;
                }
        }`;

        document.head.appendChild(footstyle);
