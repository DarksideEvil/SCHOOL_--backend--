const StudentModel = require('../student/student.model')
const GroupModel = require('../group/group.model')
const CostModel = require("../cost/cost.model")
const moment = require("moment")

const byGroupStudent = async (req, res) =>{
    try{      
        const students = await StudentModel.find({})
        const groups = await GroupModel.find({})
        // let result = []

        // for(let i = 0; i<groups.length; i++){
        //     groups[i]['count']=0
        //     for(let j = 0; j<students.length; j++){
        //         if(groups[i]._id.toString() === students[i].group.toString()){
        //             groups[i]['count']+=1
        //         }
        //     }

        //     let body = {
        //         name: groups[i].name,
        //         count: groups[i].count
        //     }
        //     result.push(body)
        //     body = {}
        // }

        let result = await StudentModel.aggregate([
            {
                $group : { _id : '$group', count : {$sum : 1} }
            }
        ])

        await GroupModel.populate(result, {
            path: '_id',
            select: 'name'
        })

        return res.status(201).json(result)
    } catch(err){
        return res.status(400).json(err)
    }
}

const byGroupPrice = async (req, res) =>{

    try{
        const {month} = req.query
        let result = await StudentModel.aggregate([
            {$unwind: {path: '$payments'} },
            {
                $match: {
                    'payments.date': month
                }
            },
            {
                $group : { _id : '$group', price : {$sum : '$payments.price'} }
            }
        ])

        await GroupModel.populate(result, {
            path: '_id',
            select: 'name'
        })
        for(let i of result){
            i['name'] = i._id._doc.name
            delete i._id            
        }
        

        return res.status(201).json(result)
    } catch(err){
        return res.status(400).json(err)
    }
}


const byCosts = async (req, res) =>{
    try{      
        const {startDate, endDate} = req.query
        let data = {}
        if(startDate && endDate){
            data['createdAt'] = {
                $gte: moment(startDate, "YYYY-MM-DD").startOf("day").toDate(),
                $lte: moment(endDate, "YYYY-MM-DD").endOf("day").toDate(),
            }
        }
        let doc = await CostModel.aggregate([
            {
                $match: data
            },
            {
                $group: { _id: "$title", totalPrice: { $sum: "$price" } }
            }
        ])
        return res.status(200).json(doc)
    } catch(err){
        return res.status(400).json(err)
    }
}


module.exports = {
    byGroupStudent,
    byGroupPrice,
    byCosts
}