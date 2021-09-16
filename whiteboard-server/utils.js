const express = require('express')
const data = require('../data')

exports.search = async(req, res) => {
    const search = req.body.search;
    for (let key in data){

        getKey = String(data[key])        
        
        if (String(getKey).includes(search)){
            return res.status(200).json({message: `${key}- ${search}`})
        }
    }
    return res.status(404).json({message: `${search} not found!`})
}
