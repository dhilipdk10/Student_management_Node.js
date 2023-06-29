const express = require('express');
const bodyparser = require("body-parser");

const { studentDetailsController } = require('./controller/StudentDetailsController.js');

const sequelize = require ('./utill/database.js');
const StudentDetails = require('./model/studentDetails')
const { Sequelize } = require('sequelize');
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

global.returnResponse = function(req,res,promise){
    res.type("application/json");

    promise.then(result => {
        console.log(result);
        res.status(200);
        res.json(result);
    }).catch(err =>{
        console.log(err);
        res.status(err.errcode || 500);
        res.json( err.message || err);
});
};
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Student Details API",
			version: "1.0.0",
			description: "A simple Express Student Details API",
		},
		servers: [
			{
				url: "http://localhost:3000",
			},
		],
	},
	apis: ["./controller/*.js"],
};
const specs = swaggerJsDoc(options);
const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(bodyparser.json({limit:'10mb'}));
var studentRouter = express.Router();
app.use("/student", studentDetailsController.init(studentRouter));

sequelize.sync({force:true}).then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err)
})
app.listen(3000);
