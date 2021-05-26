const router = require("express").Router();

const UserModel = require("../models/User.model")
const TaskModel = require("../models/Task.model")



/* GET home page */

router.get("/", (req, res, next) => {
  if (req.session.loggedInUser) res.redirect('/main');
  else res.render("index");
});


router.post('/', (req, res, next) => {
})

module.exports = router;
