import Note from "../models/Note.js";

export async function getNote(req,res){
    try {
        const singlenote=await Note.findById(req.params.id);
        if(!singlenote) return res.status(404).json({message:"Note not found"})
        res.status(200).json(singlenote);
    } catch (error) {
        console.error("error in getNote cont ",error);
        res.status(500).json({message:"internal server error"})
    }
}


export async function getAllNotes(req,res){
    try {
        const notes=await Note.find().sort({createdAt:-1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in getAllNotes cont ",error);
        res.status(500).json({message:"internal server error"})
    }
};
export async function createNote(req,res){
    try {
        const {title,content}=req.body;
        const newNote=new Note({title,content});
        const savednote=await newNote.save();
        
        res.status(201).json(savednote);
    } catch (error) {
        console.error("error in creatNote cont ",error);
        res.status(500).json({message:"internal server error"})
    }
}
export async function updateNote(req,res){
    try {
        const {title,content}=req.body;
        const updatednote=await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true});

        if(!updatednote) return res.status(404).json({message:"Note not found"})
        res.status(200).json(updatednote)
    } catch (error) {
        console.error("error in updateNote cont ",error);
        res.status(500).json({message:"internal server error"})
    }

}
export async function deleteNote(req,res){
    try {
        const deletednote=await Note.findByIdAndDelete(req.params.id);
        if(!deletednote){
            return res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({message:"note deleted successfully"});
    } catch (error) {
        console.error("error in deleteNote cont ",error);
        res.status(500).json({message:"internal server error"})
    }
}