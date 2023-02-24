const mongoose = require("mongoose")

const foodSchema=mongoose.Schema({
    image:String,
    title:String,
    price:Number,
    calories:String,
    des:String
   
})

const FoodModel=mongoose.model("food",foodSchema)

module.exports={
FoodModel
}