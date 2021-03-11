
const {response} = require('express');

const userGet = (req,res= response)=>{
    const {q,nombre,apikey, page=1, limit} = req.query;
    res.json({
        msg:'get API - controller',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usePut = (req,res)=>{
    const id = req.params.id;
    res.status(201).json({
        msg:'put API',
        id
    })
}

const usePost = (req,res)=>{
    const {nombre,edad} = req.body;
    res.json({
        msg:'post API',
        nombre,
        edad
    })
}

const useDelete = (req,res)=>{
    res.json({
        msg:'delete API'
    })
}

const useaPatch = (req,res)=>{
    res.json({
        msg:'patch API'
    })
}


module.exports = {
    userGet,
    usePut,
    usePost,
    useDelete,
    useaPatch
}