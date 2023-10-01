const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    Title : {
        type : String
    },
    SubTitle : {
        type : String
    },
    Description : {
        type : String
    }
},{
    timestamps : true
})

const Blog = mongoose.model("Blog",BlogSchema)
module.exports = Blog

// Alternative methode
// module.exports = mongoose.model("Blog",BlogSchema)