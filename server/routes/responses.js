const express = require("express");
const router = express.Router();
const Response = require("../model/responses");

router.get("/", (req, res, next) => {
    Response.find().then(responses => {
      res.status(200).json({
        message: "Responses fetched successfully!",
        responses: responses
      });
    });
  });

  router.post("/responses", (req,res, next) =>{
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

router.delete("/:id", (req, res, next)=>{
  var query = { id: res.params.id };

  Response.findOne(query, function (err, document) {
    if (err) {
      return response.status(500).json({
        title: 'No Response Found',
        error: err
      });
    }

    if (!response) {
      return response.status(500).json({
        title: 'No Response Found',
        error: { responseId: res.params.id }
      })
    }
    Response.deleteOne({ _id: res.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Response deleted!" });
    });
  });
  });

  module.exports = router;
