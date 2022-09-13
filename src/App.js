const express = require('express')
const routes = require('./routes/main')
const hbs = require('hbs')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Detail = require('./models/Details')
const Slider = require('./models/slider')
const Service = require('./models/Service')

const App = express()

App.use(bodyParser.urlencoded({
    extended:true
}))
App.use('/static', express.static("public"))
App.use('', routes)


//(template engine)
App.set('view engine', 'hbs')
App.set("views", "views")
hbs.registerPartials("views/partials")


//mongodb connection
mongoose.connect("mongodb://localhost:27017/website", () => {
    console.log("db connected")
    // Service.create([
    //     {
    //         icon: 'fab fa-accusoft',
    //         title: 'Provide Best courses',
    //         description: 'We provide best courses that helps our student for learning and placment.',
    //         linkText: 'https://www.learncodewihkrishna.com',
    //         link: 'Check'
    //     },

    //     {
    //         icon: 'fab fa-affiliatetheme',
    //         title: 'Learn Projects',
    //         description: 'We provide best courses that helps our student for learning and placment.',
    //         linkText: 'https://www.learncodewihkrishna.com',
    //         link: 'Learn'
    //     },
    //     {
    //         icon: 'fab fa-affiliatetheme',
    //         title: 'Learn Projects',
    //         description: 'We provide best courses that helps our student for learning and placment.',
    //         linkText: 'https://www.learncodewihkrishna.com',
    //         link: 'Learn'
    //     }
    // ])



    //     Slider.create([

    //         {
    //         title:'Learn java and Bootstrap in very easy method from krishna sharma ',
    //         subTitle:'Java is one of the most popular Langauge.',
    //         imageUrl:'/static/images/m2.jpg',

    //     },
    //     {
    //         title:'What is Django in python ',
    //         subTitle:'Django is one of the most popular Langauge in python.',
    //         imageUrl:'/static/images/m4.jpg'
    //     },
    //     {
    //         title:'what about node js ? ',
    //         subTitle:'Node is runtime environment to execute javascript outside browser.',
    //         imageUrl:'/static/images/m6.jpg'
    //     }

    // ])


    // Detail.create({
    //     brandName:"Codex Technical Solution",
    //     brandIconUrl:"https://seeklogo.com/images/C/Codex-logo-6D5E3B9838-seeklogo.com.gif",
    //        links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"//services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact us"
    //         }
    //     ]

    // })
})


App.listen(process.env.PORT | 3000, () => {
    console.log("server started");
});