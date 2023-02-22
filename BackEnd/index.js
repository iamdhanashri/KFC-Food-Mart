const express = require("express")
const { connection } = require("./db")
const {UserModel} = require("./model/user.model")
const cors=require("cors")




const app = express()

app.use(express.json())
app.use(cors())




app.get("/", async(req, res) => {
    let query = req.query
    try {
        const users = await UserModel.find(query)
        res.send(users)
    } catch (e) {
        res.send({ "msg": "user registration failed", "error": e.message })
    }
})


app.post("/createusers", async (req, res) => {
    // const data=req.body
    try {
        const user = new UserModel(req.body)
        await user.save()
        res.send({ "msg": "user has been added" })
    }
    catch (err) {
        res.send({ "msg": "cannot added", "error": err.messaage })
    }
})




app.listen(4500, async () => {
    try {
        await connection
        console.log("connected to db")
    } catch (err) {
        console.log({ "msg": "cannot connected to db", "error": err })
    }
    console.log("server running at port 4500")
})