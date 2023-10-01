const mongoose = require("mongoose")

exports.connectDatabase = async()=>{
    // connecting to database
    // jaba samma database sanga connect hudaina wait gar vaneko ho await vaneko
    await mongoose.connect("mongodb+srv://drphillip078:Nirajan123@cluster0.lv2744g.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
    console.log("Database is connected successfully")
}