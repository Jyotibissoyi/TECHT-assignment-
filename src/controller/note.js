const model= require('../model/noteModel'); // import module



//-----------------------------------------< API >------------------------------------------------//



//CREATE
const createNote= async (req,res)=>{
    try {

    const bodyData= req.body;
    const {title, content}= bodyData

    if(Object.keys(bodyData).length==0){
        return res.status(400).send({message: "Please provide all data"})
    }
    if(!title){
        return res.status(400).send({message: "Please provide title"})
    }
    if(!content){
        return res.status(400).send({message: "Please provide content"})
    }
     

    const store= await model.create(bodyData);

    return res.status(200).send({data:store})
        
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}


//FETCH
const getNote= async (req,res)=>{
    try {

    const id= req.params.id

    const data= await model.findOne({_id:id, isDelete: false})

    return res.status(201).send({data:data})
        
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}


//UPDATE
const updateNote= async (req,res)=>{
    try {

    const id= req.params.id;
    const bodydata= req.body;
    const {title, content}= bodydata
    
    if(Object.keys(bodydata).length==0){
        return res.status(400).send({message:"please provide data for update"})
    }

    const data= await model.updateOne({_id:id, isDelete: false},
        {$set:{title:title, content:content}},
        {new:true})

    if(!data){
        return res.status(400).send({message: "data not present in database"})
    }    

    return res.status(200).send({message: "successfully updated",data:data})
        
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}


//DELETE
const deleteteNote= async (req,res)=>{
    try {

    const id= req.params.id;
 
    const data= await model.updateOne({_id:id},
        {$set:{isDelete:true}},
        {new:true})

    return res.status(200).send({message: "successfully deleted",data:data})
        
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
}


module.exports= {createNote, getNote, updateNote,deleteteNote} //export module