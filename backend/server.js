const express = require("express");
const db = require("./knex")
const cors = require("cors");

function setupServer() {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use("/", express.static("frontend/dist"));

    app.get("/api/hello",(req, res)=>{
        console.log("12345");
        res.json({title: "Tsugu123Tsugu"});
    })

    app.get("/api", async (req,res)=>{
        const workerdata = await db
            .select(
                'group_code.*',
                'workers.name'
            )
            .from('group_code')
            .join('workers',{'workers.code_id':'group_code.id'})
        res.send(workerdata);
    })

    return app;
}

module.exports = {
    setupServer,
};