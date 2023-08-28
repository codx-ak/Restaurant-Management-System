import { createSlice } from "@reduxjs/toolkit";
import { feedbackPost} from "../API/feedback";

const initialState={
    value:[]
}

const ReviewSlice=createSlice({
    name:'ReviewStore',
    initialState:initialState,
    reducers:{
        AddReview:(state,action)=>{
            
            const feedback={
                customer_name:action.payload.name,
                rating:action.payload.rating,
                email:action.payload.email,
                feedback_text:action.payload.message
            }
            feedbackPost(feedback)
            alert("Feedback Sent Successfully")
        }
    }
})

export const {AddReview}=ReviewSlice.actions
export default ReviewSlice.reducer