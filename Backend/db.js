const mongoose=require("mongoose");
const mongoURI="mongodb+srv://yashrxx:Kapil_jain01@cluster0.wshex.mongodb.net/urbanBasket?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo=()=>{
    // console.log("Connected To Mongoose Successfully")
    // mongoose.connect(mongoURI,()=>{
    //     console.log("Connected To Mongoose Successfully")
    // })
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Connection error:', err);
    });
}
module.exports=connectToMongo;