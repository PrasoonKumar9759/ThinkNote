import mongoose from "mongoose";


//1: create schema 
// maked schema based model
const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        required:true
    },
    content:{
        type:String,
        required:true,
        trim:true
    }
},{ timestamps:true }//by default gives createdAt and UpdatedAt
) 

const Note=mongoose.model('Note',noteSchema);

export default Note;