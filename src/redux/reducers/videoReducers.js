import { ADD_VIDEOS, REMOVE_VIDEOS,VIDEOS_REQUEST,VIDEOS_SUCCESS,VIDEO_ERROR } from "../constants"
import { deleteVideo } from "../../services/api"
import {getAllVideos} from '../../screens/Home/Home'

// const initialState={
//     list:[]
// }
const initialState={
    loading:false,
    videos:[],
    error:''

}

const videoReducers=(state=initialState,action)=>{
    switch(action.type){
        case VIDEOS_REQUEST:
            console.log("hello request")
            return {
                ...state,
                loading:true
            }
            case VIDEOS_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    videos:action.payload,
                    error:''

                }
                case VIDEO_ERROR:
                    return {
                        loading:false,
                        videos:[],
                        error:action.payload
    
                    }
            
            default: return state;
            
    }


}
export default videoReducers;