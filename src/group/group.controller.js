const { populate } = require("./group.model")
const GroupModel = require("./group.model")

const addGroup = async (req, res) =>{
    try{      
        const doc = await GroupModel.create(req.body)
        return res.status(201).json(doc)
    } catch(err){
        console.log(err)
        return res.status(400).json(err)
    }
}

const getGroups = async (req, res) =>{
    try{
        const docs = await GroupModel.find({})
        .populate("teacher", "fullname")
        return res.status(200).json(docs)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getGroup = async (req, res) =>{
    try{
        const doc = await GroupModel.findById(req.params.id)
        if(!doc){
            return res.status(400).send("Group not found")
        }
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const editGroup = async (req, res) =>{
    try{
        const doc = await GroupModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const deleteGroup = async (req, res) =>{
    try{
        const doc = await GroupModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

module.exports = {
    addGroup,
    getGroups,
    getGroup,
    editGroup,
    deleteGroup
}