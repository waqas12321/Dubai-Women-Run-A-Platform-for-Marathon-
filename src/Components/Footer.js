import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube ,FaTwitter,FaSnapchat,FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
<Wrapper>
<div className='terms'>
    <p >2023 DUBAI WOMEN’S RUN | TERMS & CONDITIONS PRIVACY POLICY CONTACT</p>
   </div>
    <div className='footer__1'>
  
        <div className='footer__1__1'>
      <div>
      <div className='footer__1__1__1'>
<img src="/images/10 Years.png" alt="pic not found"/>
            </div>
            <div className='footer__1__1__2'>
                <NavLink to="https://www.planbadv.com" target='_blank'><img src="/images/footer__logo.png" alt="pic not found"/></NavLink>

            </div>
      </div>
      <div className='footer__1__1__1'>
                <div>Pages</div>
                <ul>
                   <NavLink to="/news"> <li>News</li></NavLink>
                   <NavLink to="/sponsors"><li>Contact Us
                    </li></NavLink>
                   
          
                 <NavLink to="/eventFlow">   <li>Privacy Policy</li></NavLink>
                <NavLink to="/eventFlow">    <li>Terms & Condition</li></NavLink>
           
                   
                </ul>
            </div>
          
            <div className='footer__1__1__1'>
                <div>Pages</div>
                <ul>
                   <NavLink to="/"> <li>Home</li></NavLink>
                   <NavLink to="/womensubstance"><li>Campaigns
                    </li></NavLink>
                   
          
                 <NavLink to="/sponsors">   <li>Sponsors</li></NavLink>
                <NavLink to="/news">    <li>Highlights</li></NavLink>
           
                   <NavLink to="/categories"> <li>FAQs</li></NavLink>
                   <NavLink to="/pictures"> <li>Gallery</li></NavLink>
                </ul>
            </div>
            <div className='footer__1__1__1'>
                <div>Social</div>
<ul>
    
    <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
    <li>Instagram</li>
            </NavLink>

    <NavLink to="https://www.youtube.com/@THEDUBAIWOMENSRUN" target='_blank'>
                
    <li>YouTube</li>
                            </NavLink>
   

</ul>
</div>
        </div>
        <div className='footer__1__2'>
            <NavLink to="https://www.instagram.com/thedubaiwomensrun/" target='_blank'>
            <div className='icons__1'><FaInstagram/></div>
            </NavLink>
         
            <NavLink to="https://www.youtube.com/@THEDUBAIWOMENSRUN" target='_blank'>
                
<div className='icons__1'><FaYoutube/></div>
            </NavLink>
          
           
   




 </div>
    </div>
    <div className='footer__2'>
        <div className='footer__2__1'><NavLink to="https://www.theuxbench.com/" target='_blank'>Designed by - <span style={{color:"#A3258E"}}>The UX Bench</span></NavLink></div>
    </div>
</Wrapper>
  )
}

export default Footer
const Wrapper=styled.section`

 
    


    


@media screen and (min-width: 0px) and (max-width: 599px) {
    background: #FBF0F9;
height:auto;
display:flex;
flex-direction:column;
width:100%;
padding-top:55px;
.terms{

position:relative;
left:30px;
width: 325px;



    
  }
  .terms p{
    color: #A3258E;
    font-size: 13.877px;
    font-weight: 600;

    width: 323px;
  }
.footer__1{
 
    display:flex;
    flex-direction:column;
    align-items:start;
    position:relative;
left:30px;
    


}

.footer__1__1{
    
   
    display: flex;
    flex-direction: row;
    margin-top: 80px;
    gap: 20px;
    
    
   
}
.footer__1__1__2{
    margin-left:0px;
 
}

.footer__1__1__1{
    
    width:80px;
    margin-top: -27px;
    width: 58px;
}
.footer__1__1__1 div{
    color: #A3258E;
    font-family: Inter;
    font-size: 15.945px;
    font-style: normal;
    font-weight: 600;
    line-height: 169.9%; /* 20.295px */



}
.footer__1__1__1 ul li{
    color: #2E2E2E;
    font-family: Montserrat;
    font-size: 13.6px;
    font-style: normal;
    font-weight: 500;
    line-height: 169.9%; /* 19.708px */
 list-style:none;
   
    margin-left: -31px;
    
    margin-bottom: 5px;
}
.footer__1__1__1 p{
    color: #2E2E2E;
    font-size: 12.023px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 169.9%;
    list-style: none;
    
}

.footer__1__1 img {
    width: 130px;
    height: 130px;
    margin-top: -9px;
}

.footer__1__2{
   
    width: 98.6vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    text-align: center;
    justify-content: center;
  
    

}
.icons__1{
    width: 30.023px;
    height: 30.023px;
    font-size: 14px;
    border-radius: 50%;
    border: 0.985px solid #A3258E;
    margin: 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#A3258E;
  
}
.footer__2{
    width: 100%;

   
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
  
    border-top: 2px solid rgba(163, 37, 142, 0.20);


}
.footer__2__1{
    color: #2E2E2E;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 169.9%; /* 20.388px */

}
a {
    color: #2E2E2E;

    text-decoration: none;
}
}
@media screen and (min-width: 600px) and (max-width: 959px){
    background: #FBF0F9;
    height:auto;
    display:flex;
    flex-direction:column;
    width:100%;
    padding-top:55px;
    .terms{
    
    position:relative;
    left:30px;
 
    width: 90%;
    
    
    
        
      }
      .terms p{
        color: #A3258E;
        font-size: 14.877px;
        font-weight: 600;
    
        width: 90%;
      }
    .footer__1{
     
        display:flex;
        flex-direction:column;
        align-items:center;
    
    
    }
    
    .footer__1__1{
        
       
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        gap: 80px;
        
        
       
    }
    .footer__1__1__2{
        margin-left:0px;
    }
    .footer__1__1__2 img{
        
        width: 170px;
        height: 83px;
        margin-top: 10px;
    }
    .footer__1__1__1{
        
        width:80px;
        margin-top: -27px;
        width: 58px;
    }
    .footer__1__1__1 div{
        color: #A3258E;
        font-family: Inter;
        font-size: 16.945px;
        font-style: normal;
        font-weight: 600;
        line-height: 169.9%; /* 20.295px */
    
    
    
    }
    .footer__1__1__1 ul li{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 16.6px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 19.708px */
     
       
        margin-left: -31px;
        
        margin-bottom: 5px;
        list-style:none;
    }
    .footer__1__1__1 p{
        color: #2E2E2E;
        font-size: 12.023px;
        font-family: Montserrat;
        font-weight: 400;
        line-height: 169.9%;
        list-style: none;
        
    }
    
    .footer__1__1 img{
        width: 150.432px;
        height: 150.828px;
        margin-top: -9px;
    
    }
    
    .footer__1__2{
       
        width: 98.6vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        text-align: center;
        justify-content: center;
      
        
    
    }
    .icons__1{
        width: 35.023px;
        height: 35.023px;
        font-size: 15px;
        border-radius: 50%;
        border: 0.985px solid #A3258E;
        margin: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#A3258E;
      
    }
    .footer__2{
        width: 100%;
    
       
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
      
        border-top: 2px solid rgba(163, 37, 142, 0.20);
    
    
    }
    .footer__2__1{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 20.388px */
    
    }
    a {
        color: #2E2E2E;
    
        text-decoration: none;
    }
}
@media screen and (min-width: 960px) and (max-width: 1279px){
    background: #FBF0F9;
    height:auto;
    display:flex;
    flex-direction:column;
    width:100%;
    padding-top:55px;
    .terms{
    
    position:relative;
    left:30px;
    width: 90%;

    
    
    
        
      }
      .terms p{
        color: #A3258E;
        font-size: 15.877px;
        font-weight: 600;
    
        width: 100%;
      }
    .footer__1{
     
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        
    
    
    }
    
    .footer__1__1{
        
       
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        gap: 50px;
        
        
       
    }
    .footer__1__1__2{
        margin-left:0px;
    }
    .footer__1__1__2 img{
        
        width: 170px;
        height: 83px;
        margin-top: 10px;
    }
    .footer__1__1__1{
        
        
        margin-top: -27px;
        width: 200px;
    }
    .footer__1__1__1 div{
        color: #A3258E;
        font-family: Inter;
        font-size: 18.945px;
        font-style: normal;
        font-weight: 600;
        line-height: 169.9%; /* 20.295px */
    
    
    
    }
    .footer__1__1__1 ul li{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 18.6px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 19.708px */
     
       
        margin-left: -31px;
        list-style:none;
        
        margin-bottom: 5px;
    }
    .footer__1__1__1 p{
        color: #2E2E2E;
        font-size: 17.023px;
        font-family: Montserrat;
        font-weight: 400;
        line-height: 169.9%;
        list-style: none;
        
    }
    
    .footer__1__1 img{
        width: 150.432px;
        height: 150.828px;
        margin-top: -9px;
    
    }
    
    .footer__1__2{
       
        width: 98.6vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        text-align: center;
        justify-content: center;
      
        
    
    }
    .icons__1{
        width: 40.023px;
        height: 40.023px;
        font-size: 18px;
        border-radius: 50%;
        border: 0.985px solid #A3258E;
        margin: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#A3258E;
      
    }
    .footer__2{
        width: 100%;
    
       
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
      
        border-top: 2px solid rgba(163, 37, 142, 0.20);
    
    
    }
    .footer__2__1{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 20.388px */
    
    }
    a {
        color: #2E2E2E;
    
        text-decoration: none;
    }
}
@media screen and (min-width: 1280px) and (max-width: 1919px){
    background: #FBF0F9;
    height:auto;
    display:flex;
    flex-direction:column;
    width:100%;
    padding-top:55px;
    .terms{
    
    position:relative;
    left:120px;
    width: 90%;

    
    
    
        
      }
      .terms p{
        color: #A3258E;
        font-size: 16.877px;
        font-weight: 600;
    
        width: 100%;
      }
    .footer__1{
     
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        
        padding-left:0px
    
    
    }
    
    .footer__1__1{
        
       
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        gap: 50px;
        
        
       
    }
    .footer__1__1__2{
        margin-left:0px;
    }
    .footer__1__1__2 img{
        
        width: 170px;
        height: 83px;
        margin-top: 10px;
    }
    .footer__1__1__1{
        
        
        margin-top: -27px;
        width: 200px;
    }
    .footer__1__1__1 div{
        color: #A3258E;
        font-family: Inter;
        font-size: 19.945px;
        font-style: normal;
        font-weight: 600;
        line-height: 169.9%; /* 20.295px */
    
    
    
    }
    .footer__1__1__1 ul li{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 18.6px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 19.708px */
     
       
        margin-left: -31px;
        list-style:none;
        margin-bottom: 5px;
    }
    .footer__1__1__1 p{
        color: #2E2E2E;
        font-size: 17.023px;
        font-family: Montserrat;
        font-weight: 400;
        line-height: 169.9%;
        list-style: none;
        
    }
    
    .footer__1__1 img{
        width: 150.432px;
        height: 150.828px;
        margin-top: -9px;
    
    }
    
    .footer__1__2{
       
        width: 98.6vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        text-align: center;
        justify-content: center;
      
        
    
    }
    .icons__1{
        width: 40.023px;
        height: 40.023px;
        font-size: 21px;
        border-radius: 50%;
        border: 0.985px solid #A3258E;
        margin: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#A3258E;
      
    }
    .footer__2{
        width: 100%;
    
       
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
      
        border-top: 2px solid rgba(163, 37, 142, 0.20);
    
    
    }
    .footer__2__1{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 20.388px */
    
    }
    a {
        color: #2E2E2E;
    
        text-decoration: none;
    }
}
@media screen and (min-width: 1920px){
    background: #FBF0F9;
    height:auto;
    display:flex;
    flex-direction:column;
    width:100%;
    padding-top:55px;
    .terms{
    
    position:relative;
    left:165px;
    width: 90%;

    
    
    
        
      }
      .terms p{
        color: #A3258E;
        font-size: 19.877px;
        font-weight: 600;
    
        width: 100%;
      }
    .footer__1{
     
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        
        padding-left:0px
    
    
    }
    
    .footer__1__1{
        
       
        display: flex;
        flex-direction: row;
        margin-top: 80px;
        gap: 100px;
        
        
       
    }
    .footer__1__1__2{
        margin-left:0px;
    }
    .footer__1__1__2 img{
        
        width: 170px;
        height: 83px;
        margin-top: 10px;
    }
    .footer__1__1__1{
        
        
        margin-top: -27px;
        width: 200px;
    }
    .footer__1__1__1 div{
        color: #A3258E;
        font-family: Inter;
        font-size: 24.945px;
        font-style: normal;
        font-weight: 600;
        line-height: 169.9%; /* 20.295px */
    
    
    
    }
    .footer__1__1__1 ul li{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 23.6px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 19.708px */
        list-style:none;
     
       
        margin-left: -31px;
        
        margin-bottom: 5px;
    }
    .footer__1__1__1 p{
        color: #2E2E2E;
        font-size: 19.023px;
        font-family: Montserrat;
        font-weight: 400;
        line-height: 169.9%;
        list-style: none;
        
    }
    
    .footer__1__1 img{
        width: 200.432px;
        height: 200.828px;
        margin-top: -9px;
    
    }
    
    .footer__1__2{
       
        width: 98.6vw;
        margin: auto;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        text-align: center;
        justify-content: center;
      
        
    
    }
    .icons__1{
        width: 45.023px;
        height: 45.023px;
        font-size: 24px;
        border-radius: 50%;
        border: 0.985px solid #A3258E;
        margin: 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#A3258E;
      
    }
    .footer__2{
        width: 100%;
    
       
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 22px;
      
        border-top: 2px solid rgba(163, 37, 142, 0.20);
    
    
    }
    .footer__2__1{
        color: #2E2E2E;
        font-family: Montserrat;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 169.9%; /* 20.388px */
    
    }
    a {
        color: #2E2E2E;
    
        text-decoration: none;
    }
}
`

