import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import {API_KEY, value_converter} from '../../data';
import moment from 'moment'
import { useParams } from 'react-router-dom';

 function PlayVideo() {

     const{videoId} = useParams();

  const[apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const[commentData, setCommentData] = useState([]);

   const fetchvideoData = async ()=>{
     // Fetching videos Data,
     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
  
     const response = await fetch(videoDetails_url);
     const data = await response.json();
     setApiData(data.items[0]);
      
   }

   const fetchOtherData = async () => {
    
      // Fetching channel data
      const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
  
      const response = await fetch(channelData_url);
      const data = await response.json();
      setChannelData(data.items[0]);  // First item ko set karenge

      // Fetching comment data
       const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;

      const res = await fetch(comment_url);
      const dat = await res.json();
      setCommentData(dat.items);  // First item ko set karenge
  };
   
  
   
  
    useEffect(()=>{
      fetchvideoData();
    },[videoId])

    useEffect(() => {
      if (apiData) {
        fetchOtherData();  // apiData load hone ke baad fetchOtherData call hoga
      }
    }, [apiData]);
    



  return (
    <div className='play-video'>
      {/* <video src="/images/video.mp4" controls autoPlay muted></video> */}
      <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title:"title"}</h3>
      <div className='play-video-info'>
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData? moment(apiData.snippet.publishedAt).fromNow():""}
</p>
        <div>
           <span> <img src='/images/like.png'  alt="like"/> {apiData?value_converter(apiData.statistics.likeCount):155}</span>
           <span> <img src='/images/dislike.png'  alt="Dislike"/> Dislike</span>
           <span> <img src='/images/share.png'  alt="Share"/> Share</span>
           <span> <img src='/images/save.png'  alt="Save"/> Save</span>
        </div>
      </div>
      <hr />
         
      <div className='publisher'>
      <img src={channelData ? channelData.snippet.thumbnails.default.url : ""}alt="jack"/>
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>{channelData?value_converter(channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className='vid-description'>
       <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102} Comments</h4>
          { commentData.map((item,index)=>{
            return(
              
              <div key={index} className='comment'>
          <img src={item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl} alt="user-profile"></img>

          <div>
            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
            <p>{item.snippet.topLevelComment.snippet.textDisplay} </p>
            <div className='comment-action'>
              <img src="/images/like.png" alt="like"></img>
              <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <img src="/images/dislike.png" alt="dislike"></img>
            </div>
          </div>
        </div>
            );
          }) }
        


      </div>

    </div>
  );
}

export default PlayVideo
