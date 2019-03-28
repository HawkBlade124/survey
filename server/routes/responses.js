const express = require("express");
const router = express.Router();

router.post('/', function (request, response, next) {
  var maxResponseId = sequenceGenerator.nextId("responses");

  var response = new response({
    id: maxResponseId,
    name: request.body.name,
    email: request.body.email,
    phone: request.body.phone,
    imageUrl: request.body.imageUrl

  });
})

router.patch('/:id', function (request, response, next) {
  response.findOne({ id: request.params.id }, function (err, response) {
    if (err || !response) {
      return response.status(500).json({
        title: 'No response Found!',
        error: { response: 'response not found' }
      });
    }

    response.name = request.body.response;
    response.major = request.body.response;
    response.food = request.body.response;
  });
});

router.delete('/:id', function (request, response, next) {
  var query = { id: request.params.id };

  response.findOne(query, function (err, response) {
    if (err) {
      return response.status(500).json({
        title: 'No response Found',
        error: err
      });
    }
    if (!response) {
      return response.status(500).json({
        title: 'No response Found',
        error: { responseId: request.params.id }
      })
    }
    response.deleteOne({ _id: req.params.id }).then(result => {
      console.log(result);
      res.status(200).json({ response: "response deleted!" });
  });
});

  router.get("/", (req, res, next) => {
    response.find()
      .then(responses => {
        res.status(200).json({
          response: 'responses fetched successfully!',
          responses: responses
        });
      })
      .catch(error => {
        returnError(res, error);
      })
  });


  router.put('/:id', function (request, response, next) {
    Response.findOne({ id: request.params.id }, function (err, document) {
      if (err || !response) {
        return response.status(500).json({
          title: 'No Response Found!',
          error: { response: 'Response not found' }
        });
      }
  
      response.name = request.body.name;
  
      Document.updateOne({id: req.params.id }, document)
      .then
    });
  
  });
module.exports = router;
