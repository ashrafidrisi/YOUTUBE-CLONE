import React from 'react'
import './Sidebar.css'
function Sidebar({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
       <div className='sortcut-links' >
         <div className={`side-link ${category===0?"active":""} `} onClick={()=> setCategory(0)}>
            <img src="./images/home.png" alt="home" /> <p>Home</p>
         </div>
        
         <div className={`side-link ${category===20?"active":""} `} onClick={()=> setCategory(20)}>
            <img src="./images/game_icon.png" alt="game" /> <p>Gaming</p>
         </div>

         <div className={`side-link ${category===2?"active":""} `} onClick={()=> setCategory(2)}>
            <img src="./images/automobiles.png" alt="automobiles" /> <p>Automobiles</p>
         </div>

         <div className={`side-link ${category===17?"active":""} `} onClick={()=> setCategory(17)}>
            <img src="./images/sports.png" alt="sport" /> <p>Sports</p>
         </div>

         <div className={`side-link ${category===24?"active":""} `} onClick={()=> setCategory(24)}>
            <img src="./images/entertainment.png" alt="entertainment" /> <p>entertainment</p>
         </div>

         <div className={`side-link ${category===28?"active":""} `} onClick={()=> setCategory(28)}>
            <img src="./images/tech.png" alt="tech" /> <p>Technology</p>
         </div>

         <div className={`side-link ${category===10?"active":""} `} onClick={()=> setCategory(10)}>
            <img src="./images/music.png" alt="music" /> <p>Music</p>
         </div>

         <div className={`side-link ${category===22?"active":""} `} onClick={()=> setCategory(22)}>
            <img src="./images/blogs.png" alt="blog" /> <p>Blogs</p>
         </div> 

         <div className={`side-link ${category===25?"active":""} `} onClick={()=> setCategory(25)}>
            <img src="./images/news.png" alt="news" /> <p>News</p>
         </div>

         <hr />
       </div>
     
       <div className='subscribed-list'>
         <h3>Subscribed</h3>
          <div className='side-link' onClick={()=> setCategory(0)}>
            <img src="./images/jack.png" alt="jack" /><p>PewDiePie</p>        
          </div>
        
          <div className='side-link' onClick={()=> setCategory(0)}>
            <img src="./images/simon.png" alt="simon" /><p>MrBeast</p>        
          </div>

          <div className='side-link' onClick={()=> setCategory(0)}>
            <img src="./images/tom.png" alt="tom" /><p>Justin Bieber </p>        
          </div>

          <div className='side-link' onClick={()=> setCategory(0)}>
            <img src="./images/megan.png" alt="megan" /><p>5-minute</p>        
          </div>

          <div className='side-link' onClick={()=> setCategory(0)}>
            <img src="./images/cameron.png" alt="cameron" /><p>Nas Daily</p>        
          </div>

       </div>

    </div>
  );
}

export default Sidebar
