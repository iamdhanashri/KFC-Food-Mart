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
    

foodRouter.delete("/delete/:id", async(req, res) => {
    const foodID=req.params.id
    await FoodModel.findByIdAndDelete({_id:foodID})
    res.send({"msg":`food with id: ${foodID} has been deleted`});
});


foodRouter.patch("/update/:id",async (req, res) => {
    const foodID=req.params.id
    const payload = req.body
    await FoodModel.findByIdAndUpdate({_id:foodID},payload)
    res.send({"msg":`food with id: ${foodID} has been updated`});
});

module.exports={foodRouter}