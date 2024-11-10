const express = require("express");

function setupServer() {
    const app = express();

    app.use(express.json());
    app.use("/", express.static("frontend/dist"));

    app.get("/api/hello", (req, res)=>{
        res.json({title: "TsuguTsugu"});
    })

    return app;
}

module.exports = {
    setupServer,
};