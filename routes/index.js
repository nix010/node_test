var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> {
  const { num_1, num_2, calculation } = req.body;
  let result;
  switch (calculation) {
    case 'plus':
      result = parseInt(num_1) + parseInt(num_2);
      break;
    case 'minus':
      result = parseInt(num_1) - parseInt(num_2);
      break;
    case 'times':
      result = parseInt(num_1) * parseInt(num_2);
      break;
    case 'divide':
      result = parseInt(num_1) / parseInt(num_2);
      break;
  }

  res.render('index', {num_1, num_2, calculation, result});
});

module.exports = router;
