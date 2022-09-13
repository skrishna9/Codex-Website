const express=require('express')
const {route} =require('express/lib/application')
const Detail=require("../models/Details")
const Service = require('../models/Service')
const slider = require('../models/slider')
const Contact=require('../models/contact')


const routes =express.Router()
routes.get("/", async (res,resp)=>{
   const detalis= await  Detail.findOne({"_id":"631ec59ef7f85853052a0d98"})
   const slides= await slider.find()
    const services=await Service.find()
//    console.log(slides)



//    console.log(detalis)
    resp.render("index",{

        detalis:detalis,
        slides:slides,
        services:services

    })
})

routes.get("/gallery",async (res,resp)=>{
    const detalis= await  Detail.findOne({"_id":"631ec59ef7f85853052a0d98"})

    resp.render("gallery",{
        detalis:detalis
    })
})

routes.post("/process-contact-form",async (res,resp)=>{
    console.log("This form is submited")
    console.log(resp.body)

    //save the data to db
    try{
        const data=await Contact.create(res.body)
        console.log(data)
        resp.redirect("/")
    }catch(e)
    {
        console.log(e)
        resp.redirect("/")
    }
})

module.exports=routes