const { response,request } =  require('express')

const usuariosGet = (req = request,res = response) => {
        
    const {q, apikey,nombre = 'no name',page = 1,limit} = req.query;

    res.status(403).json({
        msg: 'Get a API - Controlador',
        q,apikey,nombre,page,limit
    })
}
const usuariosPost = (req,res) => {

    const {nombre,edad } = req.body
    res.status(400).json({
        msg: 'POST a API - Controlador',
        nombre,edad,
    })
}
const usuariosPut =  (req,res) => {

    const id = req.params.id;

    res.status(400).json({
        msg: 'Put a API - Controlador',
        id
    })
}
const usuariosPatch =  (req,res) => {

    res.status(400).json({
        msg: 'Patch a API - Controlador'
    })
}
const usuariosDelete =  (req,res) => {

    res.status(400).json({
        msg: 'Delete a API - Controlador'
    })
}




module.exports = {

    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut,
}