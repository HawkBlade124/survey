const express = require("express");
const router = express.Router();
const Response = require("../model/surveys");

router.get("/surveys", (req, res, next) => {
    Response.find().then(responses => {
      res.status(200).json({
        message: "Surveys fetched successfully!",
        responses: responses
      });
    });
  });
  
  router.post("/surveys", (req,res, next) =>{
    const response = new Response({
      name: req.body.name,
      major: req.body.major,
      food: req.body.food
    });
    response.save().then(createdResponse =>{
      res.status(201).json({
        message: "Survey added successfully!",
        responseId: createdResponse._id
      });
    });
  });
  
router.delete("/surveys/:id", (req, res, next)=>{
    Response.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Survey deleted!"});
    });
  });

  module.exports = router;