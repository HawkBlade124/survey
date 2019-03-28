// Get dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const Response = require("./model/responses");

const app = express();

// mongoose.connect('', { useNewUrlParser: true });
mongoose.connect( "mongodb+srv://benful1:EqAat8iuEkVSQQku@survey-qlklq.mongodb.net/test?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/responses", (req, res, next) => {
  Response.find().then(responses => {
    res.status(200).json({
      message: "Responses fetched successfully!",
      responses: responses
    });
  });
});

app.post("/api/responses", (req,res, next) =>{
  const response = new Response({
    name: req.body.name,
    major: req.body.major,
    food: req.body.food
  });
  response.save().then(createdResponse =>{
    res.status(201).json({
      message: "Response added successfully!",
      responseId: createdResponse._id
    });
  });
});

app.delete("/api/responses/:id", (req, res, next)=>{
  Response.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Response deleted!"});
  });
});

module.exports = app;
