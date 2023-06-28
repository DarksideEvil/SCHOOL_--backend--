const SubjectModel = require("./subject.model")

const addSubject = async (req, res) =>{
    try{      
        const doc = await SubjectModel.create(req.body)
        return res.status(201).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getSubjects = async (req, res) =>{
    try{
        const docs = await SubjectModel.find({})
        return res.status(200).json(docs)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getSubject = async (req, res) =>{
    try{
        const doc = await SubjectModel.findById(req.params.id)
        if(!doc){
            return res.status(400).send("Subject not found")
        }
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const editSubject = async (req, res) =>{
    try{
        const doc = await SubjectModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const deleteSubject = async (req, res) =>{
    try{
        const doc = await SubjectModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

module.exports = {
    addSubject,
    getSubjects,
    getSubject,
    editSubject,
    deleteSubject
}