var express = require('express');
var router = express.Router();

/* GET movies listing. */
router.get('/', (req, res) => {
  // Get List of movie and return JSON
  res.status(200).json({ movies });
});

/* GET one movie. */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    // Find user in DB
    const user = _.find(movies, ["id", id]);
    // Return user
    res.status(200).json({
      message: 'Movie found!',
      user 
    });
  });

  /* PUT new movie. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { movie } = req.body;
    // Create new unique id
    const id = _.uniqueId();
    // Insert it in array (normaly with connect the data with the database)
    moviess.push({ movie, id });
    // Return message
    res.json({
      message: `Just added ${id}`,
      movie: { movie, id }
    });
  });

  /* DELETE movie. */
router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(movies, ["id", id]);
  
    // Return message
    res.json({
      message: `Just removed ${id}`
    });
  });
  

module.exports = router;



// Lodash utils library
//const _ = require('lodash');


// Create RAW data array
let users = [{
  user: "Arthur",
  id: "0"
}];






/* UPDATE user. */
router.post('/:id', (req, res) => {
  // Get the :id of the user we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the user we want to update from the body of the request
  const { user } = req.body;
  // Find in DB
  const userToUpdate = _.find(users, ["id", id]);
  // Update data with new data (js is by address)
  userToUpdate.user = user;

  // Return message
  res.json({
    message: `Just updated ${id} with ${user}`
  });
});

