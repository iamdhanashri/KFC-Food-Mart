const express = require("express")
const { connection } = require("./configs/db")
const { userRouter } = require("./route/user.route")
const cors=require("cors")
const { foodRouter } = require("./route/food.route")


const app = express()

app.use(express.json())
app.use(cors())


// app.get("/", (req, res) => {
//     res.send("Home Page");
// });

app.use("/users", userRouter)
app.use("/foods",foodRouter)



app.listen(4500, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log({ "msg": "cannot connected to db", "error": err })
    }
    console.log("server running at port 4500")
})