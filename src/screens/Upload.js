import React, { useState } from 'react';
import {Button,Form, NavLink} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addVideo } from '../redux/actions/videos_action';

 const initialState={
   title:'',
   author:'',
   link:''
 }



const Upload = () => {
  const dispatch =useDispatch();
  const [videosList,setVideosList]=useState(initialState);
  const {title,author,link}=videosList;



  const onChangeHandler=(e)=>{
    e.preventDefault();
    setVideosList({...videosList, [e.target.name]: e.target.value})
    console.log(videosList);
  }

  const handleFileSelect=(e)=>{
    let file=e.target.files[0];
    setVideosList({...videosList, [e.target.name]: file.name})
    console.log(videosList);

  }

  return (
    <Form  className="container"  >

    <Form.Group className="mb-3" >
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Enter Title" onChange={(e)=>onChangeHandler(e)} name='title'/>
    </Form.Group>
  
    <Form.Group className="mb-3" >
      <Form.Label>Author</Form.Label>
      <Form.Control type="text" placeholder="Enter Author" onChange={(e)=>onChangeHandler(e)} name='author'/>
    </Form.Group>

    <Form.Group className="mb-3">
     
      {/* <Form.Control type="file" name="link"  accept="video/mp4, video/mov" onChange={(e)=>onChangeHandler(e)} /> */}
      <Form.Control type="file" name="link"  accept="video/mp4, video/mov" onChange={handleFileSelect} />
    </Form.Group>
    
    <Button variant="primary"  onClick={()=>dispatch(addVideo(videosList))} >
      Submit
    </Button>

    <NavLink to="./" exact>BackToHome</NavLink>
  </Form>
  )
};

export default Upload;
