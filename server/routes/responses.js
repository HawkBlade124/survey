const express = require("express");
const router = express.Router();
const Response = require("../model/responses");

router.get("/responses", (req, res, next) => {
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
  
router.delete("/responses/:id", (req, res, next)=>{
    Response.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ message: "Response deleted!"});
    });
  });

  module.exports = router;