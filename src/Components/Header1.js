import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const Header = () => {
    const [menu ,setMenu]=useState(false);
  return (
    <>
    <Wrapper>
 
        <div className='Navbar'>
        <NavLink to="/">
                    <img src='/images/10 Years(1).png'  alt="logo"></img>
                    
                </NavLink>
                <div className='menu' onClick={()=>{
        setMenu(!menu)
    }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
            <ul className={menu ? "open" : ""}>
               
                <li>
                    <NavLink to="/">HOME</NavLink>
                </li>
                <li>
                    <NavLink >CAMPAIGNS</NavLink>
                    <ul >
                        <li>       <NavLink to="/womensubstance">Women of Substance</NavLink>
                        <ul>
                        <li>
                    <NavLink to="/womensubstancelegend">Legends</NavLink>
                </li>
                <li>
                    <NavLink to="/womensubstancetoday">Today</NavLink>
                </li>
                <li>
                    <NavLink to="/womensubstancetommorow">Tommorow</NavLink>
                </li>
                        </ul>
                        </li>
                        <li>
                    <NavLink to="/powerhour">Power Hour</NavLink>
                </li>
              
                <li>
                    <NavLink to="/yes2her">#Yes2Her</NavLink>
                   
                </li>
                <li>
                    <NavLink to="/corporatechallenges">Corporate Challenge</NavLink>
                </li>
                <li>
                    <NavLink to="/transformationchallenges">Transformation Challenge</NavLink>
                
                </li>
              
                    </ul>
                </li>
               
                <li>
                    <NavLink >HIGHLIGHTS</NavLink>
                    <ul >
               
                    <li><NavLink to="/news" >News and Media</NavLink></li>
                      </ul>
                </li>
             
                <li>
                    <NavLink >REGISTER </NavLink>
                    <ul >
                 <li>   <NavLink to="/eventFlow">Event Flow</NavLink></li>
                    <li><NavLink to="/routes__maps">Routes and Maps</NavLink></li>
                      </ul>
                 
                  
                </li>
                <li>
                    <NavLink >GALLERY </NavLink>
                    <ul style={{position:"absolute",right:"38px"}}>
                 <li>   <NavLink to="/pictures">Pictures</NavLink></li>
                    <li><NavLink to="/videos">Videos</NavLink></li>
                      </ul>
                </li>
                <li>
                <NavLink to="/sponsors">SPONSORS</NavLink>
                
                </li>
               
              
              
                <li>
                    <NavLink to="/faqs">FAQS</NavLink>
                 
                </li>
                
               
            </ul>
    
        </div>

    </Wrapper>
    </>
  )
}

export default Header
const Wrapper=styled.nav`

.Navbar{
    display: flex;
    flex-direction: row;
 
    align-items: center;
    justify-content: space-around;
   
    padding-left: 58px;
    width:100%;
    background:#A22A8E;

  


}
.Navbar img{
    width: 125.722px;
height: 109.5px;
margin-right: 190px;

}
.Navbar ul{
    display:flex;
    flex-direction:row;
    width: 1035px;


justify-content: space-evenly;
margin-top: 36px;


}
.Navbar ul li{
   
    list-style: none;
    display:flex;
    flex-direction:row;
    height:50px;
   position:relative


}
.Navbar ul li a{
    color: #FFF;
font-size: 16.121px;
font-family: Inter;
font-weight: 700;
text-decoration:none;

}
.Navbar ul ul{
    position: absolute;
   
    display: flex;
    flex-direction: column;
    width: 165px;
    padding-left:0px;
    height:auto;
    background:white;
    padding-bottom:18px;
    padding-top:10px;
    border-radius:10px;
    visibility:hidden;
    z-index:1;
    border:2px solid none;
    border-radius:10px;

  
    

}
.Navbar ul ul li{

    width: 161px;
    padding-left: 0px;
    border-bottom: 2px solid #E0E0E0;
    padding: 8px 0px 8px 18px;
    height:auto;


 
   
}
.Navbar ul ul li a{
    color: #A3258E;
    font-family: Inter;
    font-size: 13.235px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    
    

}
.Navbar ul ul ul{
    left:100%;
    top:-47px;
    margin-left:7px;


   
}
.menu{
    display: none;
    flex-direction: column;
    width: 30px;
    height: 20px;
    background-color: transparent;
    gap: 6px;
    position: absolute;
    right: 32px;
    top: 39px;


}
.menu span{
    width: 22px;
    height: 10px;
    
    border:2px solid white;
    border-radius: 5px;
    color: #fff;
}
.Navbar ul li:hover > ul{
    visibility:visible;

}

    @media screen and (min-width: 0px) and (max-width: 599px){
        .Navbar{

            flex-direction:column;
            align-items:start;
            padding-left: 15px;
          
         
          
          
        
        
        }
        .Navbar img{
            width: 132.611px;
            height: 122.5px;
            margin-right: 0px;
        
        }
       
           
        
       
        
        .Navbar ul{
            flex-direction: column;
            width: 100%;
        
            display: none;
         
            align-items: start;
            margin: 20px 0px 40px  18px;
            padding: 10px 0px;
          
          
      
           
        }
        
       .Navbar ul.open{
            display:flex;
        }
        .menu{
            display: flex;
    
    }
        
    .Navbar ul ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 160px;
        padding-left: 0px;
        height: auto;
        background: white;
        padding-bottom: 18px;
        padding-top: 10px;
        border-radius: 10px;
        visibility: hidden;
        z-index: 1;
        border: 2px solid #A3258E;
        border-radius: 10px;
        left: 52px;
        top: 23px;
    
        
        
        z-index:3;
    
      
        
    
    }
    .Navbar ul ul li{
    
        width: 156px;
        padding-left: 0px;
        border-bottom: 2px solid #E0E0E0;
        padding: 8px 0px 8px 18px;
        height:auto;
    
    
     
       
    }
    .Navbar ul ul li a{
        color: #A3258E;
        font-family: Inter;
        font-size: 13.235px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    
        
        
    
    }
    .Navbar ul ul ul{
        left:100%;
        top:13px;
        margin-left:7px;
        display:flex
    
    
       
    }
    }
    @media screen and (min-width: 600px) and (max-width: 959px){
        .Navbar{

            flex-direction:column;
            align-items:start;
            padding-left: 15px;
          
         
          
          
        
        
        }
        .Navbar img{
             width: 132.611px;
            height: 122.5px;
            margin-right: 0px;
        
        }
       
           
        
       
        
        .Navbar ul{
            flex-direction: column;
            width: 100%;
        
            display: none;
         
            align-items: start;
            margin: 20px 0px 40px  18px;
            padding: 10px 0px;
          
      
           
        }
        
       .Navbar ul.open{
            display:flex;
        }
        .menu{
            display: flex;
    
    }
        
    .Navbar ul ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 160px;
        padding-left: 0px;
        height: auto;
        background: white;
        padding-bottom: 18px;
        padding-top: 10px;
        border-radius: 10px;
        visibility: hidden;
        z-index: 1;
        border: 2px solid #A3258E;
        border-radius: 10px;
        left: 52px;
        top: 23px;
    
        
        
        z-index:3;
    
      
        
    
    }
    .Navbar ul ul li{
    
        width: 156px;
        padding-left: 0px;
        border-bottom: 2px solid #E0E0E0;
        padding: 8px 0px 8px 18px;
        height:auto;
    
    
     
       
    }
    .Navbar ul ul li a{
        color: #A3258E;
        font-family: Inter;
        font-size: 13.235px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    
        
        
    
    }
    .Navbar ul ul ul{
        left:100%;
        top:13px;
        margin-left:7px;
        display:flex
    
    
       
    }
    }
    @media screen and (min-width: 960px) and (max-width: 1279px){
        .Navbar{

            flex-direction:column;
            align-items:start;
            padding-left: 20px;
          
         
          
          
        
        
        }
        .Navbar img{
             width: 132.611px;
            height: 122.5px;
            margin-right: 0px;
        
        }
       
           
        
       
        
        .Navbar ul{
            flex-direction: column;
            width: 100%;
        
            display: none;
         
            align-items: start;
            margin: 20px 0px 30px  18px;
            padding: 10px 0px;
          
      
           
        }
        
       .Navbar ul.open{
            display:flex;
        }
        .menu{
            display: flex;
    
    }
        
    .Navbar ul ul{
        position: absolute;
        display: flex;
        flex-direction: column;
        width: 160px;
        padding-left: 0px;
        height: auto;
        background: white;
        padding-bottom: 18px;
        padding-top: 10px;
        border-radius: 10px;
        visibility: hidden;
        z-index: 1;
        border: 2px solid #A3258E;
        border-radius: 10px;
        left: 52px;
        top: 23px;
    
        
        
        z-index:3;
    
      
        
    
    }
    .Navbar ul ul li{
    
        width: 156px;
        padding-left: 0px;
        border-bottom: 2px solid #E0E0E0;
        padding: 8px 0px 8px 18px;
        height:auto;
    
    
     
       
    }
    .Navbar ul ul li a{
        color: #A3258E;
        font-family: Inter;
        font-size: 13.235px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    
        
        
    
    }
    .Navbar ul ul ul{
        left:100%;
        top:13px;
        margin-left:7px;
        display:flex
    
    
       
    }
    }
    @media screen and (min-width: 1280px) and (max-width: 1919px){
        .Navbar{
            display: flex;
            flex-direction: row;
         
            align-items: center;
            justify-content: space-between;
           
            padding-left: 104px;
            width:100%;
          
         
          
          
        
        
        }
        .Navbar img{
            width: 132.611px;
            height: 122.5px;
            margin-right: 0px;
        
        }
       
           
        
       
        
        .Navbar ul{
            display:flex;
    flex-direction:row;
    width: 1035px;


justify-content: space-evenly;

   
      
           
        }
        
       .Navbar ul.open{
            display:flex;
        }



        .menu{
            display: none;
    
    }
        
    .Navbar ul ul{
        position: absolute;
       
        display: flex;
        flex-direction: column;
        width: 165px;
        padding-left:0px;
        height:auto;
        background:white;
        padding-bottom:18px;
        padding-top:10px;
        border-radius:10px;
        visibility:hidden;
        z-index:1;
        border:2px solid none;
        border-radius:10px;
    
      
        
    
    }
    .Navbar ul ul li{
    
        width: 161px;
        padding-left: 0px;
        border-bottom: 2px solid #E0E0E0;
        padding: 8px 0px 8px 18px;
        height:auto;
    
    
     
       
    }
    .Navbar ul ul li a{
        color: #A3258E;
        font-family: Inter;
        font-size: 13.235px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    
        
        
    
    }
    .Navbar ul ul ul{
        left:100%;
        top:-47px;
        margin-left:7px;
    
    
       
    }
    .menu{
        display: none;
        flex-direction: column;
        width: 30px;
        height: 20px;
        background-color: transparent;
        gap: 6px;
        position: absolute;
        right: 32px;
        top: 39px;
    
    
    }
    .menu span{
        width: 22px;
        height: 10px;
        
        border:2px solid white;
        border-radius: 5px;
        color: #fff;
    }
    .Navbar ul li:hover > ul{
        visibility:visible;
    
    }
    }
    @media screen and (min-width: 1921px){
        .Navbar{
            display: flex;
            flex-direction: row;
         
            align-items: center;
            justify-content: space-between;
           
            padding-left: 135px;
            width:100%;
          
         
          
          
        
        
        }
        .Navbar img{
             width: 152.611px;
            height: 142.5px;
            margin-right: 0px;
        
        }
       
           
        
       
        
        .Navbar ul{
            display:flex;
    flex-direction:row;
    width: 1035px;


justify-content: space-evenly;
margin-top: 36px;
font-size:17px;

      
           
        }
      
        
       .Navbar ul.open{
            display:flex;
        }
        .menu{
            display: none;
    
    }
        
    .Navbar ul ul{
        position: absolute;
       
        display: flex;
        flex-direction: column;
        width: 165px;
        padding-left:0px;
        height:auto;
        background:white;
        padding-bottom:18px;
        padding-top:10px;
        border-radius:10px;
        visibility:hidden;
        z-index:1;
        border:2px solid none;
        border-radius:10px;
    
      
        
    
    }
    .Navbar ul ul li{
    
        width: 161px;
        padding-left: 0px;
        border-bottom: 2px solid #E0E0E0;
        padding: 8px 0px 8px 18px;
        height:auto;
    
    
     
       
    }
    .Navbar ul ul li a{
        color: #A3258E;
        font-family: Inter;
        font-size: 13.235px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    
        
        
    
    }
    .Navbar ul ul ul{
        left:100%;
        top:-47px;
        margin-left:7px;
    
    
       
    }
    .menu{
        display: none;
        flex-direction: column;
        width: 30px;
        height: 20px;
        background-color: transparent;
        gap: 6px;
        position: absolute;
        right: 32px;
        top: 39px;
    
    
    }
    .menu span{
        width: 22px;
        height: 10px;
        
        border:2px solid white;
        border-radius: 5px;
        color: #fff;
    }
    .Navbar ul li:hover > ul{
        visibility:visible;
    
    }
    .Navbar ul li a{
        color: #FFF;
    font-size: 20.121px;
    font-family: Inter;
    font-weight: 700;
    text-decoration:none;
    
    }
        
    }
`
