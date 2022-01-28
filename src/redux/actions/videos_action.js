import { ADD_VIDEOS,
    REMOVE_VIDEOS,
    VIDEOS_REQUEST,
    VIDEOS_SUCCESS,
     VIDEO_ERROR
 } from "../constants";
import axios from "axios";
// import { applyMiddleware } from "redux";
// import thunk from 'redux-thunk';








const videoRequest=()=>{
    return{
        type:VIDEOS_REQUEST,
    }
}

const videoSuccess=(videos)=>{
    return{
        type:VIDEOS_SUCCESS,
        payload:videos

    }
}

const videoError=(error)=>{
    return{
        type:VIDEO_ERROR,
        payload:error

    }
}


export const fetchData=()=>{
    return (dispatch)=>{
        dispatch(videoRequest());
       axios.get('http://localhost:3003/videos')
       .then(response =>{
           const res =response.data;
           console.log('gggg',res);
           dispatch(videoSuccess(res));

       })
       .catch(error=>{
       return dispatch(videoError(error.message));

       })

    }
}



export const removeVideo=(id)=>{
    return (dispatch)=>{
        dispatch(videoRequest());
       axios.delete(`http://localhost:3003/videos/${id}`)
       .then(() =>{
        axios.get('http://localhost:3003/videos').then((response)=>{
            const res =response.data;
           dispatch(videoSuccess(res));
        }).catch(error=>{
            dispatch(videoError(error.message));
       })
       })
    }
}



export const addVideo=(video)=>{
    console.log('kkkkkkkkk',video);
    return (dispatch)=>{
        dispatch(videoRequest());
       axios.post(`http://localhost:3003/videos`,video)
       .then(() =>{
        axios.get('http://localhost:3003/videos').then((response)=>{
            const res =response.data;
           dispatch(videoSuccess(res));
        }).catch(error=>{
            dispatch(videoError(error.message));
       })
       })
    }
}



