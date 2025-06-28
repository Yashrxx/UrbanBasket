const mongoose=require("mongoose");
const mongoURI="mongodb+srv://yashrxx:Kapil_jain01@cluster0.wshex.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Connection error:', err);
    });
}
module.exports=connectToMongo;