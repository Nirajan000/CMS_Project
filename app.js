const { connectDatabase } = require("./database/database");
const Blog = require("./model/BlogModel");
const express = require("express");
const app = express()

// nodejs lai form bata aako data bujh vaneko
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Database connection function
connectDatabase()

// GET API
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Success",
        // today : "Let's Begins.."
    })
})

// GET API -> /Blogs (All Blogs)
app.get("/blogs",async(req,res)=>{
    // fetching/reading all Blogs from Blog model
    const blogs = await Blog.find()
    // check if blogs contains data or not
    if(blogs.length == 0){
        res.json({
            status : 404,
            message : "Empty data.."
        })
    }else{
        res.json({
            status : 200,
            message : "All data is below..",
            data : blogs
        })
    }
})
    
// GET API -> /blogs/:id (single Blog)
app.get("/blogs/:id",async(req,res)=>{
    // console.log(req.params.id)
    const id = req.params.id
    // const {id} = req.params  Alternative method
//    const blog = await Blog.find({_id : id})
//    if(blog.length == 0){
//     res.status(404).json({
//         message : "No blogs found with that id.."
//     })
//    }else{

//        // Alternative
       const blog = await Blog.findById(id)
       if(blog){
        res.status(200).json({
            message : "Blog fetched successfully..",
            data : blog
        })
       }
       else{
        res.status(404).json({
            message : "No blog found.."
        })
       }
    
//         res.json({
//             status : 200,
//             message : "Blog fetched successfully bro...",
//             data : blog
//         })
//     }
})

// CREATE BLOG API
app.post("/createBlog",async(req,res)=>{
    const Title = req.body.Title;
    const SubTitle = req.body.SubTitle;
    const Description = req.body.Description;

    // Alternative method (Object Destructing..)
    // const {Title,SubTitle,Description} = req.body;

    // Insert to database logic goes here..
    await Blog.create({
        Title : Title,
        SubTitle : SubTitle,
        Description : Description
    })



    res.json({
        status : 201,
        message : "Blog created successfully.."
    })
})
// Alternative
// res.status(200).json({
//     message : "Blog created Successfully.."
// })

app.listen(3500, () => {
    console.log("CMS project is sucessfully started in port 3500.")
})