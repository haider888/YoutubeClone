import React, { useEffect ,useState } from 'react';
import Header from '../../components/Header';
import './home.scss';
 import { useSelector,useDispatch } from 'react-redux';
import ReactPlayer from 'react-player'
import { removeVideo, addVideo ,fetchData } from '../../redux/actions/videos_action';
import { getVideos } from '../../services/api';
import {NavLink} from 'react-router-dom';



const Home = () => {
    const myList=useSelector((state)=>state.videoReducer.videos);
    console.log('myList',myList)
    const dispatch =useDispatch();

    useEffect(()=>{
    dispatch(fetchData())
      console.log('haider');
    },[])


  return (
      <>
         <Header />
         <button><NavLink to="upload" exact className="upload">Upload</NavLink></button>
        <div className="video">
          
             {myList.map((elem)=>{
              return(
            <>
           <div key={elem.id}>
            <ReactPlayer width='90%' height='200px' url={elem.link} controls/>
            <div>
             
              <button onClick={()=>dispatch(removeVideo(elem.id))}>Delete</button>
              </div>
            </div>
             </>
          )})}
          
        </div>
        
      </>
      

    

  );
};

export default Home;
