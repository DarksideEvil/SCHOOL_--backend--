const StudentModel = require("./student.model")

const addStudent = async (req, res) =>{
    try{      
        const doc = await StudentModel.create(req.body)
        return res.status(201).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getStudents = async (req, res) =>{
    try{
        const docs = await StudentModel.find({})
        return res.status(200).json(docs)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getStudent = async (req, res) =>{
    try{
        const doc = await StudentModel.findById(req.params.id)
        if(!doc){
            return res.status(400).send("Student not found")
        }
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const getStudentGroup = async (req, res) =>{
    try{
        const doc = await StudentModel.find({group: req.params.id})
        .populate("group", "name")
        if(!doc){
            return res.status(400).send("Student not found")
        }
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

const editStudent = async (req, res) =>{
    try{
        const {price} = req.body
        if(price){

            const doc = await StudentModel.findByIdAndUpdate(req.params.id, {
                $push: {
                    payments: {
                        date: req.body?.date,
                        price: req.body?.price*1
                    }
                }
            }, {new: true})
            return res.status(200).json(doc)
        }
    } catch(err){
        return res.status(400).json(err)
    }
}

const deleteStudent = async (req, res) =>{
    try{
        const doc = await StudentModel.findByIdAndDelete(req.params.id)
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudent,
    editStudent,
    deleteStudent,
    getStudentGroup
}