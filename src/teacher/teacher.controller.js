const TeacherModel = require("./teacher.model")

const addTeacher = async (req, res) =>{
    try{      
        const doc = await TeacherModel.create(req.body)
        return res.status(201).json(doc)
    } catch(err){
        console.log(err)
        return res.status(400).json(err)
    }
}

const getTeachers = async (req, res) =>{
    try{
        const docs = await TeacherModel.find({})
        .populate("subject", "title")
        return res.status(200).json(docs)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getTeacher = async (req, res) =>{
    try{
        const doc = await TeacherModel.findById(req.params.id)
        if(!doc){
            return res.status(400).send("teacher not found")
        }
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const editTeacher = async (req, res) =>{
    try{
        const doc = await TeacherModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const deleteTeacher = async (req, res) =>{
    try{
        const doc = await TeacherModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

module.exports = {
    addTeacher,
    getTeachers,
    getTeacher,
    editTeacher,
    deleteTeacher
}