const express = require("express");
const db = require("./knex")
const cors = require("cors");

function setupServer() {
    const app = express();

    let searchName;

    app.use(cors());
    app.use(express.json());
    app.use("/", express.static("frontend/dist"));

    app.get("/api/hello",(req, res)=>{
        console.log("12345");
        res.json({title: "Tsugu123Tsugu"});
    })

    app.get("/api/position", async(req, res)=>{
        console.log("api/position call");
        const positionData = await db
            .select(
                'group_code.*',
                'workers.name'
            )
            .from('group_code')
            .join('workers',{'workers.code_id':'group_code.id'})
            .where("name", searchName)
        console.log(positionData)
        res.send(positionData);
    })

    app.get("/api", async (req,res)=>{
        const workerData = await db
            .select(
                'group_code.*',
                'workers.name'
            )
            .from('group_code')
            .join('workers',{'workers.code_id':'group_code.id'})
        res.send(workerData);
    })


    app.post("/api/name", async(req, res)=>{
        searchName= req.body.name;
    })

    return app;
}

module.exports = {
    setupServer,
};