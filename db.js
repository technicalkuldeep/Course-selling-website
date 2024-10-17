const mongoose = require("mongoose");

console.log("connected db");


mongoose.connect("mongodb+srv://KuldeepCohort3:Kuldeep%40123@cluster0.ynnp7.mongodb.net/coursera-app?retryWrites=true&w=majority/")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema ({
    email: {type : String , unique : true},
    password : String,
    firstName: String ,
    lastName : String,
});

const adminSchema = new Schema ({
    email: {type : String , unique : true},
    password : String,
    firstName: String ,
    lastName : String,
});

const courseSchema = new Schema ({
    title : String ,
    description : String,
    price : Number,
    imageUrl : String ,
    CreatorId: ObjectId
});

const purchaseSchema = new Schema ({
    userId : ObjectId ,
    CourseId : ObjectId

});

const userModel = mongoose.model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

