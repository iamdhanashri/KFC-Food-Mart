const express=require("express");
const {FoodModel}=require("../model/food.model")

const foodRouter=express.Router();



foodRouter.get("/", async(req, res) => {
    const foods=await FoodModel.find()
     res.send(foods);
});


foodRouter.post("/create", async (req, res) => {
    const payload=req.body
    const food=new FoodModel(payload)
    await food.save()
    res.send({"msg":"food is created"})
})
    

// app.delete("/delete", (req, res) => {
//     res.send("data is deleted");
// });


// app.update("/patch", (req, res) => {
//     res.send("data is updated");
// });

module.exports={foodRouter}